# Quiz Data Management

This directory contains centralized quiz and assessment question data for easier management and reusability.

## Structure

```
src/data/
└── quizzes/
    ├── types.ts                           # TypeScript types for quiz questions
    ├── index.ts                           # Main export file
    ├── basic-concepts-quiz.ts             # Basic concepts quiz questions
    ├── advanced-scenarios-quiz.ts         # Advanced scenarios quiz questions
    ├── basic-concepts-assessment.ts       # Basic concepts assessment questions
    └── advanced-scenarios-assessment.ts   # Advanced scenarios assessment questions
```

## Usage

### In MDX Files

Import the questions from the centralized data files:

```mdx
---
title: "Quiz Title"
---

import { basicConceptsQuizQuestions } from '@site/src/data/quizzes';

<ThreadedQuiz 
  title="Quiz Title" 
  questions={basicConceptsQuizQuestions}
/>
```

### Available Exports

- `basicConceptsQuizQuestions` - Basic concepts quiz (36 questions)
- `advancedScenariosQuizQuestions` - Advanced scenarios quiz (36 questions)
- `basicConceptsAssessmentQuestions` - Basic concepts assessment (36 questions)
- `advancedScenariosAssessmentQuestions` - Advanced scenarios assessment (36 questions)

## Benefits

1. **Centralized Management**: All quiz questions in one place
2. **Type Safety**: TypeScript types ensure question consistency
3. **Reusability**: Questions can be imported and reused across multiple pages
4. **Easier Maintenance**: Update questions in one place instead of multiple MDX files
5. **Version Control**: Cleaner diffs when questions are updated
6. **Testing**: Questions can be unit tested separately from UI components

## Adding New Questions

1. Add your questions to the appropriate `.ts` file in `src/data/quizzes/`
2. Follow the `QuizQuestion` interface defined in `types.ts`
3. Export the questions array from the file
4. Update `index.ts` if adding a new quiz file

## Extracting Questions from MDX

If you need to extract questions from existing MDX files, use the extraction script:

```bash
node scripts/extract-quiz-data.js
```

This will parse MDX files and generate TypeScript data files automatically.
