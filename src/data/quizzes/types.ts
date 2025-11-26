export interface QuizQuestion {
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizConfig {
  title: string;
  description: string;
  keywords: string[];
  showCategories?: boolean;
  randomize?: boolean;
  maxQuestions?: number;
  requireName?: boolean;
  hideCheckAnswer?: boolean;
  autoAdvance?: boolean;
  autoAdvanceDelay?: number;
}
