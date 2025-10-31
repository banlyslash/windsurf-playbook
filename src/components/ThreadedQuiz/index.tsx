import React, { useState } from 'react';
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
}

export default function ThreadedQuiz({ 
  questions, 
  title = 'Quiz', 
  showCategories = true 
}: ThreadedQuizProps): React.ReactElement {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResults) return;
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
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
    setCurrentQuestion(0);
    setSelectedAnswers(Array(questions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const score = calculateScore();
  const currentQuestionData = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== -1;
  const isCorrect = selectedAnswers[currentQuestion] === currentQuestionData.correctAnswer;

  // Group questions by category for the progress indicator
  const categories = showCategories 
    ? [...new Set(questions.map(q => q.category || 'General'))]
    : [];
  
  const getCategoryForQuestion = (index: number) => {
    return questions[index].category || 'General';
  };

  const getCurrentCategory = () => {
    return currentQuestionData.category || 'General';
  };

  const getQuestionsInCurrentCategory = () => {
    const currentCategory = getCurrentCategory();
    return questions.filter(q => (q.category || 'General') === currentCategory);
  };

  const getQuestionNumberInCategory = () => {
    const currentCategory = getCurrentCategory();
    let count = 0;
    for (let i = 0; i <= currentQuestion; i++) {
      if ((questions[i].category || 'General') === currentCategory) {
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
      
      {!showResults ? (
        <div className={styles.questionContainer}>
          <div className={styles.questionHeader}>
            <span className={styles.questionNumber}>
              Question {currentQuestion + 1} of {questions.length}
              {showCategories && (
                <span className={styles.categoryBadge}>
                  {getCurrentCategory()} ({getQuestionNumberInCategory()} of {getTotalQuestionsInCategory()})
                </span>
              )}
            </span>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
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
                {option}
              </button>
            ))}
          </div>
          
          {isAnswered && !showExplanation && (
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
            <button
              className={styles.navButton}
              onClick={handleNext}
              disabled={!isAnswered}
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.resultsContainer}>
          <h3 className={styles.resultsTitle}>Quiz Results</h3>
          <div className={styles.scoreContainer}>
            <p className={styles.score}>
              You scored {score} out of {questions.length}
              <span className={styles.percentage}>
                ({Math.round((score / questions.length) * 100)}%)
              </span>
            </p>
            
            {showCategories && categories.length > 1 && (
              <div className={styles.categoryScores}>
                <h4>Performance by Category:</h4>
                <ul>
                  {categories.map(category => {
                    const categoryQuestions = questions.filter(q => (q.category || 'General') === category);
                    const categoryCorrect = categoryQuestions.reduce((count, q, index) => {
                      const questionIndex = questions.findIndex(question => question === q);
                      return selectedAnswers[questionIndex] === q.correctAnswer ? count + 1 : count;
                    }, 0);
                    const categoryPercentage = Math.round((categoryCorrect / categoryQuestions.length) * 100);
                    
                    return (
                      <li key={category} className={styles.categoryScore}>
                        <span className={styles.categoryName}>{category}:</span> {categoryCorrect}/{categoryQuestions.length} ({categoryPercentage}%)
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          
          <button className={styles.resetButton} onClick={handleReset}>
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}
