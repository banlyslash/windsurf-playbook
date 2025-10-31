import React from 'react';
import Quiz, { QuizQuestion } from './Quiz';
import ThreadedQuiz from './ThreadedQuiz';

interface MDXQuizProps {
  title?: string;
  questions: QuizQuestion[];
}

interface MDXThreadedQuizProps {
  title?: string;
  questions: (QuizQuestion & { category?: string })[];
  showCategories?: boolean;
}

export function MDXQuiz({ title, questions }: MDXQuizProps): React.ReactElement {
  return <Quiz title={title} questions={questions} />;
}

export function MDXThreadedQuiz({ title, questions, showCategories }: MDXThreadedQuizProps): React.ReactElement {
  return <ThreadedQuiz title={title} questions={questions} showCategories={showCategories} />;
}

// Export all components that should be available in MDX files
const MDXComponents = {
  Quiz: MDXQuiz,
  ThreadedQuiz: MDXThreadedQuiz,
};

export default MDXComponents;
