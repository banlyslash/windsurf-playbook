import React, { useState, useMemo } from 'react';
import styles from './styles.module.css';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  category?: string; // Optional category for grouping questions
}

interface ThreadedQuizProps {
  questions: QuizQuestion[];
  title?: string;
  showCategories?: boolean;
  randomize?: boolean; // Whether to randomize question order
  maxQuestions?: number; // Maximum number of questions to show (randomly selected if randomize is true)
  hideCheckAnswer?: boolean; // Whether to hide the "Check Answer" button
  autoAdvance?: boolean; // Whether to automatically advance to next question after selection
  autoAdvanceDelay?: number; // Delay in milliseconds before auto-advancing (default: 800ms)
  requireName?: boolean; // Whether to require name entry before starting
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function ThreadedQuiz({ 
  questions, 
  title = 'Quiz', 
  showCategories = true,
  randomize = false,
  maxQuestions,
  hideCheckAnswer = false,
  autoAdvance = false,
  autoAdvanceDelay = 800,
  requireName = false
}: ThreadedQuizProps): React.ReactElement {
  // State used to force re-randomization on reset
  const [shuffleKey, setShuffleKey] = useState(0);
  const [userName, setUserName] = useState('');
  const [hasStarted, setHasStarted] = useState(!requireName);

  // Memoize the question selection and randomization
  const displayedQuestions = useMemo(() => {
    let processedQuestions = [...questions];
    
    if (randomize) {
      processedQuestions = shuffleArray(processedQuestions);
    }
    
    if (maxQuestions && maxQuestions < processedQuestions.length) {
      processedQuestions = processedQuestions.slice(0, maxQuestions);
    }
    
    return processedQuestions;
  }, [questions, randomize, maxQuestions, shuffleKey]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(displayedQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAutoAdvanceEnabled, setIsAutoAdvanceEnabled] = useState(autoAdvance);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResults) return;
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);

    // Auto-advance to next question if enabled
    if (isAutoAdvanceEnabled) {
      setTimeout(() => {
        if (currentQuestion < displayedQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setShowExplanation(false);
        } else {
          setShowResults(true);
        }
      }, autoAdvanceDelay);
    }
  };

  const handleNext = () => {
    if (currentQuestion < displayedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    // Bump shuffle key to force re-randomization
    setShuffleKey((prev) => prev + 1);

    setCurrentQuestion(0);
    // Length stays the same (maxQuestions), but content will be reshuffled
    setSelectedAnswers(Array(displayedQuestions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setHasStarted(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      const question = displayedQuestions[index];
      if (!question) return score;
      return answer === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  const score = calculateScore();
  const currentQuestionData = displayedQuestions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== -1;
  const isCorrect = selectedAnswers[currentQuestion] === currentQuestionData.correctAnswer;

  // Get performance feedback based on score percentage
  const getPerformanceFeedback = () => {
    const percentage = Math.round((score / displayedQuestions.length) * 100);
    const name = requireName && userName ? userName : '';
    
    if (percentage === 100) {
      return { 
        emoji: '🏆', 
        message: name ? `${name}, Perfect Score!` : 'Perfect Score!', 
        color: '#FFD700' 
      };
    } else if (percentage >= 90) {
      return { 
        emoji: '🌟', 
        message: name ? `Outstanding, ${name}!` : 'Outstanding!', 
        color: '#4CAF50' 
      };
    } else if (percentage >= 80) {
      return { 
        emoji: '🎯', 
        message: name ? `Excellent Work, ${name}!` : 'Excellent Work!', 
        color: '#2196F3' 
      };
    } else if (percentage >= 70) {
      return { 
        emoji: '👍', 
        message: name ? `Good Job, ${name}!` : 'Good Job!', 
        color: '#FF9800' 
      };
    } else if (percentage >= 60) {
      return { 
        emoji: '📚', 
        message: name ? `Keep Learning, ${name}!` : 'Keep Learning!', 
        color: '#9C27B0' 
      };
    } else {
      return { 
        emoji: '💪', 
        message: name ? `Keep Practicing, ${name}!` : 'Keep Practicing!', 
        color: '#F44336' 
      };
    }
  };

  // Group questions by category for the progress indicator
  const categories = showCategories 
    ? [...new Set(displayedQuestions.map(q => q.category || 'General'))]
    : [];
  
  const getCategoryForQuestion = (index: number) => {
    return displayedQuestions[index].category || 'General';
  };

  const getCurrentCategory = () => {
    return currentQuestionData.category || 'General';
  };

  const getQuestionsInCurrentCategory = () => {
    const currentCategory = getCurrentCategory();
    return displayedQuestions.filter(q => (q.category || 'General') === currentCategory);
  };

  const getQuestionNumberInCategory = () => {
    const currentCategory = getCurrentCategory();
    let count = 0;
    for (let i = 0; i <= currentQuestion; i++) {
      if ((displayedQuestions[i].category || 'General') === currentCategory) {
        count++;
      }
    }
    return count;
  };

  const getTotalQuestionsInCategory = () => {
    return getQuestionsInCurrentCategory().length;
  };

  return (
    <div className={styles.quizContainer}>
      <h2 className={styles.quizTitle}>{title}</h2>
      
      {requireName && !hasStarted ? (
        <div className={styles.nameEntryContainer}>
          <p className={styles.nameEntryPrompt}>Please enter your name to begin the assessment:</p>
          <form onSubmit={handleStartQuiz} className={styles.nameEntryForm}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className={styles.nameInput}
              autoFocus
            />
            <button 
              type="submit" 
              className={styles.startButton}
              disabled={!userName.trim()}
            >
              Start Assessment
            </button>
          </form>
        </div>
      ) : !showResults ? (
        <div className={styles.questionContainer}>
          <div className={styles.questionHeader}>
            <span className={styles.questionNumber}>
              Question {currentQuestion + 1} of {displayedQuestions.length}
              {showCategories && (
                <span className={styles.categoryBadge}>
                  {getCurrentCategory()} ({getQuestionNumberInCategory()} of {getTotalQuestionsInCategory()})
                </span>
              )}
            </span>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${((currentQuestion + 1) / displayedQuestions.length) * 100}%` }}
              />
            </div>
          </div>
          
          <h3 className={styles.question}>{currentQuestionData.question}</h3>
          
          <div className={styles.options}>
            {currentQuestionData.options.map((option, index) => (
              <button
                key={index}
                className={`${styles.option} ${
                  selectedAnswers[currentQuestion] === index ? styles.selected : ''
                } ${
                  showExplanation && index === currentQuestionData.correctAnswer ? styles.correct : ''
                } ${
                  showExplanation && selectedAnswers[currentQuestion] === index && 
                  index !== currentQuestionData.correctAnswer ? styles.incorrect : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span className={styles.optionLabel}>{String.fromCharCode(65 + index)}.</span>
                <span className={styles.optionText}>{option}</span>
              </button>
            ))}
          </div>
          
          {isAnswered && !showExplanation && !hideCheckAnswer && (
            <button 
              className={styles.checkButton}
              onClick={() => setShowExplanation(true)}
            >
              Check Answer
            </button>
          )}
          
          {showExplanation && currentQuestionData.explanation && (
            <div className={styles.explanation}>
              <h4>{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h4>
              <p>{currentQuestionData.explanation}</p>
            </div>
          )}
          
          <div className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <div className={styles.navRight}>
              {autoAdvance && (
                <label className={styles.switchContainer}>
                  <input
                    type="checkbox"
                    checked={isAutoAdvanceEnabled}
                    onChange={(e) => setIsAutoAdvanceEnabled(e.target.checked)}
                    className={styles.switchInput}
                  />
                  <span className={styles.switchSlider}></span>
                  <span className={styles.switchLabel}>Auto</span>
                </label>
              )}
              <button
                className={styles.navButton}
                onClick={handleNext}
                disabled={!isAnswered}
              >
                {currentQuestion === displayedQuestions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.resultsContainer}>
          <div className={styles.resultsCard}>
            <h3 className={styles.resultsTitle}>
              {requireName && userName 
                ? `${userName}'s ${title.replace('Quiz', 'Assessment')} Results`
                : `${title.replace('Quiz', 'Assessment')} Results`
              }
            </h3>
            
            <div className={styles.performanceBadge}>
              <span className={styles.performanceEmoji}>{getPerformanceFeedback().emoji}</span>
              <span className={styles.performanceMessage} style={{ color: getPerformanceFeedback().color }}>
                {getPerformanceFeedback().message}
              </span>
            </div>
            
            <div className={styles.mainScore}>
              <div className={styles.scoreCircle}>
                <span className={styles.scorePercentage}>
                  {Math.round((score / displayedQuestions.length) * 100)}%
                </span>
              </div>
              <p className={styles.scoreText}>
                {score} / {displayedQuestions.length} correct
              </p>
            </div>
            
            {showCategories && categories.length > 1 && (
              <div className={styles.categoryScores}>
                <h4 className={styles.categoryTitle}>Performance by Category</h4>
                <div className={styles.categoryGrid}>
                  {categories.map(category => {
                    const categoryQuestions = displayedQuestions.filter(q => (q.category || 'General') === category);
                    const categoryCorrect = categoryQuestions.reduce((count, q, index) => {
                      const questionIndex = displayedQuestions.findIndex(question => question === q);
                      return selectedAnswers[questionIndex] === q.correctAnswer ? count + 1 : count;
                    }, 0);
                    const categoryPercentage = Math.round((categoryCorrect / categoryQuestions.length) * 100);
                    
                    return (
                      <div key={category} className={styles.categoryItem}>
                        <div className={styles.categoryHeader}>
                          <span className={styles.categoryName}>{category}</span>
                          <span className={styles.categoryPercent}>{categoryPercentage}%</span>
                        </div>
                        <div className={styles.categoryBar}>
                          <div 
                            className={styles.categoryBarFill} 
                            style={{ width: `${categoryPercentage}%` }}
                          />
                        </div>
                        <span className={styles.categoryCount}>
                          {categoryCorrect}/{categoryQuestions.length}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            <div className={styles.resultsFooter}>
              <p className={styles.timestamp}>
                Completed: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          
          <button className={styles.resetButton} onClick={handleReset}>
            Retake Assessment
          </button>
        </div>
      )}
    </div>
  );
}
