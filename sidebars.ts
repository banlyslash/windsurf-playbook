import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

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
    "intro",
    "get-started",
    {
      type: "category",
      label: "Windsurf in Action",
      items: [
        "windsurf-in-actions/project-initialization",
        "windsurf-in-actions/add-to-existing-project",
      ],
    },
    {
      type: "category",
      label: "Essentials",
      items: [
        "essentials/tab",
        "essentials/command",
        "essentials/cascade",
        "essentials/cascade-memories",
        "essentials/cascade-rules",
      ],
    },
    {
      type: "category",
      label: "Model Selection",
      items: [
        "model-selection/model-selection-coding",
        "model-selection/model-specialties-specialty",
      ],
    },
    {
      type: "category",
      label: "Productivity Tools",
      items: [
        "productivity-tools/workflows",
        "productivity-tools/planning-mode",
        "productivity-tools/at-mention-tools",
        "productivity-tools/web-search-guide",
        "productivity-tools/mcp",
      ],
    },

    "caution",
    "stuff-you-should-know",
    {
      type: "category",
      label: "Challenges",
      items: [
        "challenges/quiz-mcq", 
        "challenges/quiz-mcq-medium"
      ],
    },
  ],
};

export default sidebars;
