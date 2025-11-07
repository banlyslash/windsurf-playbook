---
description: "Essential tips and tricks for using Windsurf IDE effectively. Learn about Cascade memory, conversation exports, and productivity hacks."
keywords: ["Windsurf", "tips", "tricks", "Cascade", "memory", "productivity", "best practices"]
image: "/img/docusaurus-social-card.jpg"
---

# Stuff You Should Know

Did you know that:
- **Cascade memory** fades over time, making early context blur! To refresh that context, it's highly recommended to ask Cascade to clarify relevant content before embarking on any major changes, like a naming convention migration.
- You can **export conversations** as markdown using the `Download Trajectory` option in the Cascade action menu! It's a handy way to keep track of your discussions.
- **Generating documentation can be a resource hog**! It's wise to enforce some rules to prevent unnecessary text generation and save on costs.
- **Multiple Windsurf Windows**? Not the best idea! They can confuse Windsurf and lead to unexpected hiccups, like being unable to edit files.
- **Model Selection** is crucial! Using an expensive model can quickly drain your credits, so choose wisely!
- You can **Drag and Drop** to @-mention a file or folder! Typing mentions can be finicky at times, so this feature will save you some trouble.
- **Local Indexing** for a new workspace can lead to initial slowness, as Windsurf requires approximately 5 to 10 minutes to index the entire codebase before you can fully utilize its features.


## Test Your Knowledge

Let's see how well you understand Windsurf with this quick quiz!

<Quiz title="Windsurf Knowledge Check" questions={[
  {
    question: "What happens to Cascade's memory over time?",
    options: [
      "It remains perfectly intact",
      "It fades, making early context blur over time",
      "It gets automatically backed up",
      "It improves with each conversation"
    ],
    correctAnswer: 1,
    explanation: "Cascade's memory fades over time, making early context blur. It's recommended to ask Cascade to explain relevant content to verify its understanding before making intensive changes."
  },
  {
    question: "How can you export a conversation with Cascade?",
    options: [
      "Using the 'Download Trajectory' in Cascade action menu",
      "Copy and paste manually",
      "Using the export API",
      "Conversations cannot be exported"
    ],
    correctAnswer: 0,
    explanation: "You can export conversations as markdown using the 'Download Trajectory' option in the Cascade action menu."
  },
  {
    question: "Why should you be cautious about generating documentation?",
    options: [
      "It's always inaccurate",
      "It's costly in terms of resources",
      "It's not supported by Windsurf",
      "It requires special permissions"
    ],
    correctAnswer: 1,
    explanation: "Generating documentation is costly in terms of resources. It's recommended to enforce rules to avoid unnecessary text generation."
  },
  {
    question: "What can happen when using multiple Windsurf windows?",
    options: [
      "It speeds up your workflow",
      "It provides better context",
      "It causes unexpected behavior like inability to edit files",
      "It automatically synchronizes your work"
    ],
    correctAnswer: 2,
    explanation: "Using multiple Windsurf Windows is not a productive experience. It can confuse Windsurf and cause unexpected behavior such as being unable to edit files."
  },
  {
    question: "What should you consider when selecting a model in Windsurf?",
    options: [
      "Always use the most expensive model",
      "Choose wisely as expensive models can drain credits quickly",
      "Model selection doesn't affect performance",
      "Models are automatically selected based on the task"
    ],
    correctAnswer: 1,
    explanation: "You should choose models wisely as expensive models can drain credits quickly."
  }
]} />
