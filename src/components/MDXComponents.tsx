import React from 'react';
import Quiz, { QuizQuestion } from './Quiz';
import ThreadedQuiz from './ThreadedQuiz';
import Contributors from './Contributors';

interface MDXQuizProps {
  title?: string;
  questions: QuizQuestion[];
  requireName?: boolean;
}

interface MDXThreadedQuizProps {
  title?: string;
  questions: (QuizQuestion & { category?: string })[];
  showCategories?: boolean;
  randomize?: boolean;
  maxQuestions?: number;
  hideCheckAnswer?: boolean;
  autoAdvance?: boolean;
  autoAdvanceDelay?: number;
  requireName?: boolean;
}

export function MDXQuiz({ title, questions, requireName }: MDXQuizProps): React.ReactElement {
  return <Quiz title={title} questions={questions} requireName={requireName} />;
}

export function MDXThreadedQuiz({ title, questions, showCategories, randomize, maxQuestions, hideCheckAnswer, autoAdvance, autoAdvanceDelay, requireName }: MDXThreadedQuizProps): React.ReactElement {
  return <ThreadedQuiz title={title} questions={questions} showCategories={showCategories} randomize={randomize} maxQuestions={maxQuestions} hideCheckAnswer={hideCheckAnswer} autoAdvance={autoAdvance} autoAdvanceDelay={autoAdvanceDelay} requireName={requireName} />;
}

// Export all components that should be available in MDX files
const MDXComponents = {
  Quiz: MDXQuiz,
  ThreadedQuiz: MDXThreadedQuiz,
  Contributors: Contributors,
};

export default MDXComponents;
