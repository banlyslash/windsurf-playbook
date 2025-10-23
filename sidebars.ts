import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manually defined sidebar for better organization
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'cascade',
        'cascade-memories',
        'cascade-rules',
        'command',
        'mcp'
      ],
    },
    {
      type: 'category',
      label: 'Model Selection',
      items: [
        'model-selection',
        'model-selection-coding',
        'model-specialties-specialty'
      ],
    },
    {
      type: 'category',
      label: 'Productivity Tools',
      items: [
        'workflows',
        'planning-mode',
        'at-mention-tools',
        'tab'
      ],
    },
    {
      type: 'category',
      label: 'Quiz Features',
      items: [
        'quiz',
        'quiz-mcq',
        'quiz-mcq-medium'
      ],
    },
  ],
};

export default sidebars;
