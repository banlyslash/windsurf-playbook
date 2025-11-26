const fs = require('fs');
const path = require('path');

function extractQuestions(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract the questions array from the MDX file
  const match = content.match(/questions=\{?\[([\s\S]*?)\]\}?\s*\/>/);
  
  if (!match) {
    console.error(`No questions found in ${filePath}`);
    return null;
  }
  
  return match[1].trim();
}

function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (!frontmatterMatch) {
    return {};
  }
  
  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*"([^"]*)"/);
  const descMatch = frontmatter.match(/description:\s*"([^"]*)"/);
  
  return {
    title: titleMatch ? titleMatch[1] : '',
    description: descMatch ? descMatch[1] : ''
  };
}

const files = [
  {
    input: 'src/pages/challenges/basic-concepts.md',
    output: 'src/data/quizzes/basic-concepts-quiz.ts',
    varName: 'basicConceptsQuizQuestions'
  },
  {
    input: 'src/pages/challenges/advanced-scenarios.md',
    output: 'src/data/quizzes/advanced-scenarios-quiz.ts',
    varName: 'advancedScenariosQuizQuestions'
  },
  {
    input: 'src/pages/assessment/basic-concepts.md',
    output: 'src/data/quizzes/basic-concepts-assessment.ts',
    varName: 'basicConceptsAssessmentQuestions'
  },
  {
    input: 'src/pages/assessment/advanced-scenarios.md',
    output: 'src/data/quizzes/advanced-scenarios-assessment.ts',
    varName: 'advancedScenariosAssessmentQuestions'
  }
];

files.forEach(({ input, output, varName }) => {
  console.log(`Processing ${input}...`);
  
  const questions = extractQuestions(input);
  const metadata = extractMetadata(input);
  
  if (!questions) {
    return;
  }
  
  const tsContent = `import type { QuizQuestion } from './types';

export const ${varName}: QuizQuestion[] = [
${questions}
];
`;
  
  fs.writeFileSync(output, tsContent, 'utf8');
  console.log(`✓ Created ${output}`);
});

console.log('\\nAll quiz data extracted successfully!');
