import type { QuizQuestion } from './types';

export const basicConceptsAssessmentQuestions: QuizQuestion[] = [
// Tab Features
    {
      category: "Tab Features",
      question: "Which setting helps you move the cursor to the next logical edit location?",
      options: [
        "Tab to Import",
        "Tab to Jump",
        "Supercomplete",
        "Clipboard context"
      ],
      correctAnswer: 1,
      explanation: "Tab to Jump allows you to move the cursor to the next logical edit location, making it easier to navigate through your code."
    },
    {
      category: "Tab Features",
      question: "What's the safest way to keep imports consistent as you code?",
      options: [
        "Accept all suggestions",
        "Tab to Jump",
        "Tab to Import",
        "Disable formatter"
      ],
      correctAnswer: 2,
      explanation: "Tab to Import helps maintain consistent imports as you code by automatically managing import statements."
    },
    {
      category: "Tab Features",
      question: "When should you prefer word-by-word acceptance?",
      options: [
        "On critical logic where precision matters",
        "On large boilerplate blocks",
        "For deleting dead code",
        "When imports are missing"
      ],
      correctAnswer: 0,
      explanation: "Word-by-word acceptance is preferred on critical logic where precision matters to ensure accuracy in important code sections."
    },
    
    // Command Features
    {
      category: "Command Features",
      question: "How do you constrain the scope of Command edits?",
      options: [
        "Use a low-latency model",
        "Select the code range before invoking",
        "Run in Chat mode",
        "Use Auto-Continue"
      ],
      correctAnswer: 1,
      explanation: "Selecting the code range before invoking Command helps constrain the scope of edits to only the selected area."
    },
    {
      category: "Command Features",
      question: "What's the best practice after Command proposes a change?",
      options: [
        "Apply immediately",
        "Review the diff and iterate",
        "Ask for a longer diff",
        "Re-run on the whole file"
      ],
      correctAnswer: 1,
      explanation: "It's best practice to review the diff and iterate, ensuring the proposed changes meet your requirements before applying them."
    },
    {
      category: "Command Features",
      question: "Which shortcut invokes Command?",
      options: [
        "Cmd/Ctrl+L",
        "Cmd/Ctrl+I",
        "Cmd/Ctrl+Enter",
        "Cmd/Ctrl+\\"
      ],
      correctAnswer: 1,
      explanation: "The shortcut Cmd/Ctrl+I is used to invoke Command in the IDE."
    },
    
    // Cascade Features
    {
      category: "Cascade Features",
      question: "When should you choose Cascade Code over Cascade Chat?",
      options: [
        "When you want file edits with diffs",
        "When you only need high-level Q&A",
        "When running CLI commands",
        "When browsing the web"
      ],
      correctAnswer: 0,
      explanation: "Cascade Code is preferred when you want file edits with diffs, as it provides a more code-focused interface with better diff visualization."
    },
    {
      category: "Cascade Features",
      question: "What feature helps coordinate long multi-step tasks?",
      options: [
        "Named checkpoints",
        "Planning Mode",
        "Reverts",
        "Queued messages"
      ],
      correctAnswer: 1,
      explanation: "Planning Mode helps coordinate long multi-step tasks by maintaining a structured plan throughout the execution process."
    },
    {
      category: "Cascade Features",
      question: "What is the purpose of named checkpoints?",
      options: [
        "Speed up suggestions",
        "Revert file changes to a known state",
        "Format code",
        "Pin context items"
      ],
      correctAnswer: 1,
      explanation: "Named checkpoints allow you to revert file changes to a known state, providing a safety net when making complex changes."
    },
    
    // Cascade Rules
    {
      category: "Cascade Rules",
      question: "Where should workspace- or folder-specific rules live?",
      options: [
        "global_rules.md only",
        ".windsurf/rules/",
        "README.md",
        "Any file in src/"
      ],
      correctAnswer: 1,
      explanation: "Workspace- or folder-specific rules should live in .windsurf/rules/ to properly scope them to the relevant parts of your codebase."
    },
    {
      category: "Cascade Rules",
      question: "Which is a good characteristic of a rule?",
      options: [
        "Vague and inspirational",
        "Long and exhaustive",
        "Short and enforceable",
        "Filled with secrets"
      ],
      correctAnswer: 2,
      explanation: "Good rules are short and enforceable, making them clear and actionable for both humans and AI."
    },
    {
      category: "Cascade Rules",
      question: "What's a recommended maintenance practice?",
      options: [
        "Never touch rules once created",
        "Prune outdated/duplicative rules periodically",
        "Merge all rules into one file",
        "Disable rules on large PRs"
      ],
      correctAnswer: 1,
      explanation: "It's good practice to prune outdated or duplicative rules periodically to keep your rule set relevant and manageable."
    },
    
    // Cascade Memories
    {
      category: "Cascade Memories",
      question: "What's a good use of memories?",
      options: [
        "Storing API keys",
        "Capturing architectural decisions",
        "Replacing documentation entirely",
        "Storing temporary workarounds"
      ],
      correctAnswer: 1,
      explanation: "Memories are ideal for capturing architectural decisions, as they provide context about important design choices to future interactions."
    },
    {
      category: "Cascade Memories",
      question: "How do you explicitly create a memory?",
      options: [
        "Use @memory",
        "Ask Cascade to \"create a memory of ...\"",
        "Add to global_rules.md",
        "Create a workflow"
      ],
      correctAnswer: 1,
      explanation: "You can explicitly create a memory by asking Cascade to \"create a memory of...\" which allows you to store important information for future reference."
    },
    {
      category: "Cascade Memories",
      question: "Which is true about credits?",
      options: [
        "Creating/using memories costs credits",
        "Only creating memories is free",
        "Only using memories is free",
        "Creating and using memories do not consume credits"
      ],
      correctAnswer: 3,
      explanation: "Both creating and using memories do not consume credits, making them an efficient way to maintain context across sessions."
    },
    
    // Planning Mode
    {
      category: "Planning Mode",
      question: "What does Planning Mode provide?",
      options: [
        "A planning agent that maintains a Todo plan during long tasks",
        "Faster code execution",
        "A new linter",
        "A syntax highlighter"
      ],
      correctAnswer: 0,
      explanation: "Planning Mode provides a planning agent that maintains a Todo plan during long tasks, helping to organize and track progress."
    },
    {
      category: "Planning Mode",
      question: "What should a good plan include?",
      options: [
        "Acceptance criteria and testing steps",
        "Secrets for convenience",
        "Unscoped brainstorm notes only",
        "Everything in one mega-step"
      ],
      correctAnswer: 0,
      explanation: "A good plan should include acceptance criteria and testing steps to ensure clear goals and verification methods."
    },
    {
      category: "Planning Mode",
      question: "When should you update the plan?",
      options: [
        "Only at the end",
        "Only when tests fail",
        "Whenever new information appears",
        "Never"
      ],
      correctAnswer: 2,
      explanation: "Plans should be updated whenever new information appears to keep them relevant and accurate throughout the development process."
    },
    
    // Workflows
    {
      category: "Workflows",
      question: "Where are workflows stored?",
      options: [
        ".windsurf/workflows/",
        ".windsurf/rules/",
        "global_rules.md",
        ".git/hooks/"
      ],
      correctAnswer: 0,
      explanation: "Workflows are stored in the .windsurf/workflows/ directory, making them easily accessible and organized."
    },
    {
      category: "Workflows",
      question: "What's a good candidate for a workflow?",
      options: [
        "One-off personal task",
        "Repetitive, multi-step process",
        "Secret sharing",
        "Single-line edit"
      ],
      correctAnswer: 1,
      explanation: "Repetitive, multi-step processes are ideal candidates for workflows as they can be automated and standardized."
    },
    {
      category: "Workflows",
      question: "How do you invoke a workflow?",
      options: [
        "With @workflow",
        "With /[workflow-name]",
        "With #run",
        "With Cmd/Ctrl+L"
      ],
      correctAnswer: 1,
      explanation: "Workflows are invoked using /[workflow-name], making them easy to access and execute."
    },
    
    // @‑Mention Tools
    {
      category: "@‑Mention Tools",
      question: "Which @‑mention forces a real-time web search?",
      options: [
        "@docs",
        "@web",
        "@diff",
        "@term"
      ],
      correctAnswer: 1,
      explanation: "@web forces a real-time web search, allowing you to get up-to-date information from the internet."
    },
    {
      category: "@‑Mention Tools",
      question: "What's a good practice when using @docs?",
      options: [
        "Assume all pages parse perfectly",
        "Prefer @docs for official docs with predictable formatting",
        "Avoid quoting examples",
        "Disable citations"
      ],
      correctAnswer: 1,
      explanation: "It's good practice to prefer @docs for official documentation with predictable formatting for better parsing results."
    },
    
    // MCP
    {
      category: "MCP",
      question: "Which transports are supported for MCP servers?",
      options: [
        "grpc, ws",
        "stdio, http",
        "ftp, ssh",
        "ipc, udp"
      ],
      correctAnswer: 1,
      explanation: "MCP servers support stdio and http transports for communication."
    },
    {
      category: "MCP",
      question: "What's the per-workspace limit related to MCP tools?",
      options: [
        "20 tools",
        "100 enabled tools total",
        "Unlimited tools",
        "10 tools"
      ],
      correctAnswer: 1,
      explanation: "There's a limit of 100 enabled tools total per workspace for MCP tools."
    },
    {
      category: "MCP",
      question: "What happens after a team whitelists one MCP server?",
      options: [
        "Nothing changes",
        "All non-whitelisted servers are blocked",
        "All servers are disabled",
        "Users can add any server"
      ],
      correctAnswer: 1,
      explanation: "After a team whitelists one MCP server, all non-whitelisted servers are blocked for security purposes."
    },
    
    // Model Selection
    {
      category: "Model Selection",
      question: "Which model is recommended for complex reasoning or architecture discussions?",
      options: [
        "SWE-1",
        "Claude Sonnet 4.5",
        "GPT-5 (low reasoning)",
        "Gemini 2.5 Pro only"
      ],
      correctAnswer: 1,
      explanation: "Claude Sonnet 4.5 is recommended for complex reasoning or architecture discussions due to its strong reasoning capabilities."
    },
    {
      category: "Model Selection",
      question: "What's a sensible cost strategy on Free/Pro?",
      options: [
        "Always pick the most expensive model",
        "Start with SWE-1 or lower‑credit models, escalate as needed",
        "Avoid SWE-1 for coding",
        "Never switch models mid-task"
      ],
      correctAnswer: 1,
      explanation: "A sensible cost strategy is to start with SWE-1 or lower-credit models and escalate as needed based on task complexity."
    },
    {
      category: "Model Selection",
      question: "Which is a good pairing for long tasks?",
      options: [
        "SWE-1 for coding + Claude Sonnet 4.5 for reviews/design",
        "Only GPT-5 for everything",
        "Gemini 2.5 Pro only",
        "Random model selection"
      ],
      correctAnswer: 0,
      explanation: "A good pairing for long tasks is using SWE-1 for coding and Claude Sonnet 4.5 for reviews and design work, leveraging each model's strengths."
    },
    
    // Model Selection for Coding
    {
      category: "Model Selection for Coding",
      question: "Which models are highlighted for coding tasks in the guide?",
      options: [
        "Only Gemini models",
        "GPT-5-Codex, SWE-1, xAI Grok Code Fast, Claude Sonnet 4.5",
        "Claude family only",
        "Any LLM not listed"
      ],
      correctAnswer: 1,
      explanation: "The guide highlights GPT-5-Codex, SWE-1, xAI Grok Code Fast, and Claude Sonnet 4.5 as effective models for coding tasks."
    },
    {
      category: "Model Selection for Coding",
      question: "When should you use a 0‑credit model?",
      options: [
        "Rarely, to save speed",
        "For frequent coding tasks to conserve credits",
        "Never",
        "Only for documentation"
      ],
      correctAnswer: 1,
      explanation: "0-credit models are best used for frequent coding tasks to conserve credits while still getting useful assistance."
    },
    {
      category: "Model Selection for Coding",
      question: "What's recommended for complex refactors?",
      options: [
        "Grok Code Fast only",
        "Claude Sonnet 4.5 or SWE-1",
        "Any free model",
        "The slowest model"
      ],
      correctAnswer: 1,
      explanation: "For complex refactors, Claude Sonnet 4.5 or SWE-1 are recommended due to their strong reasoning capabilities and code understanding."
    },
    
    // Model Specialties
    {
      category: "Model Specialties",
      question: "Which specialty lists SWE‑1 as in-house and tool-capable?",
      options: [
        "Chat",
        "Code",
        "Planning",
        "Design"
      ],
      correctAnswer: 1,
      explanation: "The Code specialty lists SWE-1 as in-house and tool-capable, highlighting its strengths in coding tasks."
    },
    {
      category: "Model Specialties",
      question: "Which specialty suggests Claude Sonnet 4.5 for clear structure/tradeoffs?",
      options: [
        "Code",
        "Chat",
        "Planning",
        "Design & Documentation"
      ],
      correctAnswer: 3,
      explanation: "The Design & Documentation specialty suggests Claude Sonnet 4.5 for its ability to provide clear structure and articulate tradeoffs."
    },
    {
      category: "Model Specialties",
      question: "What's a tip for using specialties effectively?",
      options: [
        "Stick to one model for all stages",
        "Match model to task stage (Plan → Implement → Review)",
        "Avoid Planning Mode",
        "Disable tool-calling"
      ],
      correctAnswer: 1,
      explanation: "To use specialties effectively, match the model to the task stage (Plan → Implement → Review), leveraging each model's strengths at the appropriate phase."
    },
    
    // Web Search
    {
      category: "Web Search",
      question: "How do you force a real-time web search in Cascade?",
      options: [
        "Use @search",
        "Use @web",
        "Use @internet",
        "Use @google"
      ],
      correctAnswer: 1,
      explanation: "You can force a real-time web search by using @web in your message to Cascade."
    },
    {
      category: "Web Search",
      question: "What type of websites parse most reliably with web search?",
      options: [
        "Social media sites",
        "Documentation sites, StackOverflow, and GitHub files",
        "Video streaming platforms",
        "E-commerce sites"
      ],
      correctAnswer: 1,
      explanation: "Documentation sites, blog posts, StackOverflow, and GitHub files tend to parse more reliably than other types of websites."
    },
    {
      category: "Web Search",
      question: "What happens when you paste a URL directly into Cascade?",
      options: [
        "It's ignored",
        "Cascade reads the page contents",
        "It opens in a browser",
        "It creates a bookmark"
      ],
      correctAnswer: 1,
      explanation: "When you paste a URL directly into your message, Cascade will read the page contents to provide context."
    },
    
    // Prompt Engineering
    {
      category: "Prompt Engineering",
      question: "What should an effective coding prompt include?",
      options: [
        "Only the code snippet",
        "Context, goal, current state, specific request, and constraints",
        "Just the error message",
        "Only the desired outcome"
      ],
      correctAnswer: 1,
      explanation: "An effective coding prompt should include context, goal, current state, specific request, constraints/requirements, and examples when applicable."
    },
    {
      category: "Prompt Engineering",
      question: "Which is an example of a vague prompt anti-pattern?",
      options: [
        "\"Fix my code.\"",
        "\"My React component throws this error when clicking submit. Here's the code and error...\"",
        "\"Refactor this code to use ES6+ syntax and improve naming\"",
        "\"Write Jest tests covering valid and invalid email formats\""
      ],
      correctAnswer: 0,
      explanation: "\"Fix my code\" is a vague prompt anti-pattern. Good prompts provide specific context, error messages, and clear questions."
    },
    
    // Project Management
    {
      category: "Project Management",
      question: "What happens to Cascade's memory over time?",
      options: [
        "It remains perfectly intact",
        "It fades, making early context blur",
        "It gets automatically backed up",
        "It improves with each conversation"
      ],
      correctAnswer: 1,
      explanation: "Cascade's memory fades over time, making early context blur. It's recommended to refresh context before major changes."
    },
    {
      category: "Project Management",
      question: "What's the recommended approach for using multiple Windsurf windows?",
      options: [
        "Use as many as needed",
        "Avoid it - it can cause unexpected behavior",
        "Always use at least two",
        "It's required for large projects"
      ],
      correctAnswer: 1,
      explanation: "Using multiple Windsurf windows is not recommended as it can confuse Windsurf and lead to unexpected issues like being unable to edit files."
    },
    {
      category: "Project Management",
      question: "How can you export a Cascade conversation?",
      options: [
        "Copy and paste manually",
        "Use 'Download Trajectory' in Cascade action menu",
        "Use the export API",
        "Conversations cannot be exported"
      ],
      correctAnswer: 1,
      explanation: "You can export conversations as markdown using the 'Download Trajectory' option in the Cascade action menu."
    },
    
    // Project Initialization
    {
      category: "Project Initialization",
      question: "What should you do first when initializing a new project?",
      options: [
        "Use Windsurf to generate everything",
        "Manually initialize using the framework's official CLI",
        "Copy from another project",
        "Start with Cascade Code"
      ],
      correctAnswer: 1,
      explanation: "You should manually initialize the project using the framework's official CLI or recommended method, without using Windsurf in this stage."
    },
    {
      category: "Project Initialization",
      question: "Where should project-specific coding conventions be stored?",
      options: [
        "In README.md only",
        "In convention.md file",
        "In package.json",
        "In .gitignore"
      ],
      correctAnswer: 1,
      explanation: "Project-specific coding conventions should be stored in a convention.md file as the single source of truth for coding standards."
    },
    {
      category: "Project Initialization",
      question: "What file naming convention is recommended for components?",
      options: [
        "kebab-case",
        "PascalCase",
        "snake_case",
        "camelCase"
      ],
      correctAnswer: 1,
      explanation: "Components should use PascalCase naming convention, while utilities use camelCase and config files use kebab-case."
    },
    
    // Best Practices
    {
      category: "Best Practices",
      question: "Why should you be cautious about generating documentation with AI?",
      options: [
        "It's always inaccurate",
        "It's resource-intensive and costly",
        "It's not supported",
        "It requires special permissions"
      ],
      correctAnswer: 1,
      explanation: "Generating documentation is resource-intensive and costly. It's recommended to enforce rules to avoid unnecessary text generation."
    },
    {
      category: "Best Practices",
      question: "What should you do before making major changes to refresh Cascade's context?",
      options: [
        "Restart Windsurf",
        "Ask Cascade to clarify relevant content",
        "Clear all memories",
        "Switch models"
      ],
      correctAnswer: 1,
      explanation: "Since Cascade's memory fades over time, it's recommended to ask Cascade to clarify relevant content before making major changes."
    },
    {
      category: "Best Practices",
      question: "What's a useful feature for @-mentioning files or folders?",
      options: [
        "You can only type mentions manually",
        "You can drag and drop files or folders to @-mention them",
        "Mentions don't work with folders",
        "@-mentions are deprecated"
      ],
      correctAnswer: 1,
      explanation: "You can drag and drop files or folders to @-mention them, which is easier than typing mentions manually."
    },
    {
      category: "Best Practices",
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
      category: "Best Practices",
      question: "What happens when you switch models in Cascade?",
      options: [
        "The new model inherits all context perfectly",
        "Nothing changes, it's seamless",
        "You may lose context as the new model starts fresh without full history",
        "The previous model continues running in the background"
      ],
      correctAnswer: 2,
      explanation: "Switching models can cause context loss. The new model won't inherit the full conversation history or context, so you may need to restate key information."
    },
    {
      category: "Best Practices",
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
      category: "Best Practices",
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
      category: "Best Practices",
      question: "What should you consider when selecting a model in Windsurf?",
      options: [
        "Always use the most expensive model",
        "Choose wisely as expensive models can drain credits quickly",
        "Model selection doesn't affect performance",
        "Models are automatically selected based on the task"
      ],
      correctAnswer: 1,
      explanation: "You should choose models wisely as expensive models can drain credits quickly."
    },
    {
      category: "Best Practices",
      question: "What happens during local indexing for a new workspace?",
      options: [
        "It's instant and seamless",
        "It can cause initial slowness for 5-10 minutes",
        "It requires manual configuration",
        "It only indexes open files"
      ],
      correctAnswer: 1,
      explanation: "Local indexing for a new workspace can lead to initial slowness, as Windsurf requires approximately 5 to 10 minutes to index the entire codebase before you can fully utilize its features."
    }
];
