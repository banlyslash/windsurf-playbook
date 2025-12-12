import type { QuizQuestion } from './types';

export const advancedScenariosQuizQuestions: QuizQuestion[] = [
// Tab Features
    {
      category: "Tab Features",
      question: "You accept a multi-line suggestion, but imports weren't updated. What's the most precise next step?",
      options: [
        "Undo and try again",
        "Add imports manually",
        "Trigger Tab to Import",
        "Re-run formatter"
      ],
      correctAnswer: 2,
      explanation: "Triggering Tab to Import is the most precise solution to update imports after accepting a multi-line suggestion that didn't update them automatically."
    },
    {
      category: "Tab Features",
      question: "You're editing a critical function mid-line and want surgical suggestions. What should you do?",
      options: [
        "Use FIM by placing cursor mid-line",
        "Move cursor to line start",
        "Paste the function into a new file",
        "Disable Supercomplete"
      ],
      correctAnswer: 0,
      explanation: "Using Fill-in-Middle (FIM) by placing your cursor mid-line allows for more surgical suggestions when editing critical functions."
    },
    {
      category: "Tab Features",
      question: "After accepting a deletion suggestion, tests fail. What should you try first?",
      options: [
        "Disable Tab features",
        "Reinsert the minimal deleted block manually and retest",
        "Revert the whole file",
        "Re-run Tab to Jump"
      ],
      correctAnswer: 1,
      explanation: "When tests fail after a deletion, it's best to first reinsert the minimal deleted block manually and retest to identify the specific code that needs to be preserved."
    },
    
    // Command Features
    {
      category: "Command Features",
      question: "You need to rename a method and update references without changing behavior. Best approach?",
      options: [
        "Switch to Chat mode",
        "Ask for a full rewrite",
        "Run Command on whole project",
        "Select only the method + call sites; prompt \"rename + update references, no behavior change\""
      ],
      correctAnswer: 3,
      explanation: "Selecting only the method and call sites with a specific prompt to rename and update references without behavior change provides the most controlled and targeted approach."
    },
    {
      category: "Command Features",
      question: "Command produced a near-correct diff. What's the efficient next step?",
      options: [
        "Ask Command to refine: \"keep changes, fix X only\"",
        "Reject and start over",
        "Change models and retry",
        "Apply then manually fix everything"
      ],
      correctAnswer: 0,
      explanation: "The most efficient approach is to ask Command to refine by keeping the good changes and fixing only the specific issues, rather than starting over or manually fixing everything."
    },
    {
      category: "Command Features",
      question: "You want terminal scaffolding with correct flags. What do you use?",
      options: [
        "Workflows",
        "Planning Mode",
        "Terminal Command (Cmd/Ctrl+I)",
        "Chat with @docs"
      ],
      correctAnswer: 2,
      explanation: "Terminal Command (Cmd/Ctrl+I) is specifically designed for terminal scaffolding with the correct flags and options."
    },
    
    // Cascade Features
    {
      category: "Cascade Features",
      question: "You want edits applied with revert safety. Which mode?",
      options: [
        "Workflows",
        "Terminal",
        "Cascade Chat",
        "Cascade Code"
      ],
      correctAnswer: 3,
      explanation: "Cascade Code provides edits with revert safety, allowing you to easily track and revert changes if needed."
    },
    {
      category: "Cascade Features",
      question: "Your long task paused after tool-call limits. What should you do?",
      options: [
        "Press Continue (optionally Auto-Continue next time)",
        "Resend the same prompt",
        "Clear context and retry",
        "Switch models mid-stream"
      ],
      correctAnswer: 0,
      explanation: "When a task pauses due to tool-call limits, pressing Continue (and considering Auto-Continue for future tasks) is the best way to resume without losing context."
    },
    {
      category: "Cascade Features",
      question: "You need deterministic inclusion of a specific file and function. Best method?",
      options: [
        "Ask Cascade to guess",
        "Paste code into chat",
        "@‑mention the file and function",
        "Rely on Fast Context only"
      ],
      correctAnswer: 2,
      explanation: "@-mentioning the specific file and function ensures deterministic inclusion of exactly what you need in the context."
    },
    
    // Cascade Rules
    {
      category: "Cascade Rules",
      question: "You have different practices in `frontend/` vs `backend/`. Where should you place rules?",
      options: [
        "In the package.json",
        "In README files",
        "In `.windsurf/rules/frontend/` and `.windsurf/rules/backend/`",
        "Only in global_rules.md"
      ],
      correctAnswer: 2,
      explanation: "For different practices across directories, placing rules in `.windsurf/rules/frontend/` and `.windsurf/rules/backend/` provides proper scoping and organization."
    },
    {
      category: "Cascade Rules",
      question: "You found duplicate rules across folders. Best practice?",
      options: [
        "De‑duplicate and scope to the most specific location",
        "Keep both for redundancy",
        "Move everything to a single global file",
        "Delete all duplicates with no replacement"
      ],
      correctAnswer: 0,
      explanation: "When finding duplicate rules, it's best to de-duplicate them and scope them to the most specific location needed to maintain clarity and avoid conflicts."
    },
    {
      category: "Cascade Rules",
      question: "Which rule phrasing is preferable?",
      options: [
        "\"Use your best judgment\"",
        "\"Try to be consistent\"",
        "\"Write good code\"",
        "\"Add unit tests for public functions; no behavior change in refactors\""
      ],
      correctAnswer: 3,
      explanation: "Specific, actionable rules like \"Add unit tests for public functions; no behavior change in refactors\" are preferable as they provide clear guidance."
    },
    
    // Cascade Memories
    {
      category: "Cascade Memories",
      question: "Which should become a memory?",
      options: [
        "A personal reminder",
        "A one-off debug log location",
        "The team's decision for API versioning policy",
        "A temporary workaround you'll remove tomorrow"
      ],
      correctAnswer: 2,
      explanation: "Important architectural decisions like the team's API versioning policy are ideal candidates for memories as they provide long-term context."
    },
    {
      category: "Cascade Memories",
      question: "How do you ensure a memory stays relevant?",
      options: [
        "Periodically review and revise outdated details",
        "Never update it",
        "Duplicate it into multiple workspaces",
        "Delete it after a week"
      ],
      correctAnswer: 0,
      explanation: "To keep memories relevant, periodically review and revise outdated details to ensure they remain accurate and useful."
    },
    {
      category: "Cascade Memories",
      question: "What's the safest way to store sensitive info?",
      options: [
        "In a README",
        "In environment variables/secrets (not memories)",
        "In a memory for convenience",
        "In chat so Cascade remembers"
      ],
      correctAnswer: 1,
      explanation: "Sensitive information should be stored in environment variables or secrets management systems, not in memories or chat history."
    },
    
    // Planning Mode
    {
      category: "Planning Mode",
      question: "Your plan is too coarse-grained to execute. What do you do?",
      options: [
        "Disable Planning Mode",
        "Switch to a different model",
        "Break steps into smaller Todo items with acceptance criteria",
        "Ignore and proceed"
      ],
      correctAnswer: 2,
      explanation: "When a plan is too coarse-grained, breaking steps into smaller Todo items with clear acceptance criteria makes it more actionable."
    },
    {
      category: "Planning Mode",
      question: "Midway through a task, new constraints appear. What's the best action?",
      options: [
        "Update the plan and adjust subsequent steps",
        "Restart the conversation",
        "Continue without changes",
        "Remove previous steps"
      ],
      correctAnswer: 0,
      explanation: "When new constraints appear, updating the plan and adjusting subsequent steps allows you to adapt while preserving progress."
    },
    {
      category: "Planning Mode",
      question: "What keeps long tasks resilient to interruptions?",
      options: [
        "Avoiding checkpoints",
        "Switching models",
        "The Todo plan acting as persistent context",
        "Auto-continue only"
      ],
      correctAnswer: 2,
      explanation: "The Todo plan serves as persistent context that makes long tasks resilient to interruptions by maintaining state."
    },
    
    // Workflows
    {
      category: "Workflows",
      question: "You need a repeatable PR review checklist. Where should it live?",
      options: [
        "In terminal history",
        "In global_rules.md",
        "`.windsurf/workflows/` as a workflow",
        "In a random doc file"
      ],
      correctAnswer: 2,
      explanation: "A repeatable PR review checklist should live in `.windsurf/workflows/` as a workflow for consistent application."
    },
    {
      category: "Workflows",
      question: "How do you combine complex procedures safely?",
      options: [
        "Use Chat instead",
        "Multiple modular workflows that can nest via `/workflow-name`",
        "One giant workflow",
        "Only manual steps"
      ],
      correctAnswer: 1,
      explanation: "Complex procedures are best combined using multiple modular workflows that can nest via `/workflow-name`, promoting reusability and maintainability."
    },
    {
      category: "Workflows",
      question: "Why curate workflow size under ~12k chars?",
      options: [
        "To pass CI",
        "To reduce disk use",
        "For linter compatibility",
        "For optimal performance and readability"
      ],
      correctAnswer: 3,
      explanation: "Keeping workflow size under ~12k chars ensures optimal performance and readability, preventing context overload."
    },
    
    // @‑Mention Tools
    {
      category: "@‑Mention Tools",
      question: "You want authoritative API usage from official docs. First choice?",
      options: [
        "Pasting code",
        "@diff",
        "@docs",
        "@web"
      ],
      correctAnswer: 2,
      explanation: "@docs is the best choice for authoritative API usage from official documentation as it provides structured access to documentation."
    },
    {
      category: "@‑Mention Tools",
      question: "How do you include terminal output in chat?",
      options: [
        "Use Planning Mode",
        "Press Cmd/Ctrl+L to send selection, then @‑mention the terminal",
        "Use Workflows",
        "Copy/paste only"
      ],
      correctAnswer: 1,
      explanation: "To include terminal output in chat, press Cmd/Ctrl+L to send the selection and then @-mention the terminal for context."
    },
    
    // MCP
    {
      category: "MCP",
      question: "Which is true about MCP in Windsurf?",
      options: [
        "HTTP transport doesn't require `/mcp`",
        "Only supports stdio transport",
        "Supports MCP tools and resources (not prompts)",
        "Supports MCP prompts heavily"
      ],
      correctAnswer: 2,
      explanation: "In Windsurf, MCP supports tools and resources but not prompts, focusing on extending functionality through external tools."
    },
    {
      category: "MCP",
      question: "After whitelisting a server for the team, users report blocks. Likely cause?",
      options: [
        "Case-sensitive whitelist pattern mismatch",
        "Too many tools enabled",
        "Lack of internet",
        "Model choice"
      ],
      correctAnswer: 0,
      explanation: "When users report blocks after whitelisting, a case-sensitive whitelist pattern mismatch is often the cause, as patterns must match exactly."
    },
    {
      category: "MCP",
      question: "Which keeps systems safer?",
      options: [
        "Sharing `mcp_config.json` publicly",
        "Enabling all tools for convenience",
        "Using least‑privilege tokens via env in `mcp_config.json`",
        "Putting tokens in chat"
      ],
      correctAnswer: 2,
      explanation: "Using least-privilege tokens via environment variables in `mcp_config.json` follows security best practices by limiting access scope."
    },
    
    // Model Selection
    {
      category: "Model Selection",
      question: "You're doing architecture tradeoff analysis. Best model?",
      options: [
        "Gemini only",
        "GPT‑5 low reasoning",
        "SWE‑1",
        "Claude Sonnet 4.5"
      ],
      correctAnswer: 3,
      explanation: "Claude Sonnet 4.5 is best for architecture tradeoff analysis due to its strong reasoning capabilities and ability to articulate complex tradeoffs."
    },
    {
      category: "Model Selection",
      question: "Credit‑aware strategy for long sessions?",
      options: [
        "Start with 0/low‑credit models, escalate only when needed",
        "Always pick highest‑credit model",
        "Avoid switching models",
        "Switch randomly"
      ],
      correctAnswer: 0,
      explanation: "A credit-aware strategy for long sessions is to start with 0/low-credit models and escalate only when needed based on complexity."
    },
    {
      category: "Model Selection",
      question: "Large doc reading + planning: best general choice?",
      options: [
        "GPT‑5 low reasoning",
        "Claude Sonnet 4.5 only",
        "Gemini 2.5 Pro",
        "SWE‑1"
      ],
      correctAnswer: 2,
      explanation: "Gemini 2.5 Pro is particularly good at large document reading and planning tasks due to its efficient context handling."
    },
    
    // Model Selection for Coding
    {
      category: "Model Selection for Coding",
      question: "You need fast iterations with acceptable quality. Which pick fits?",
      options: [
        "Gemini 2.5 Pro",
        "GPT‑5‑Codex only",
        "xAI Grok Code Fast",
        "Claude Sonnet 4.5"
      ],
      correctAnswer: 2,
      explanation: "xAI Grok Code Fast is designed for fast iterations with acceptable quality, making it ideal for rapid development cycles."
    },
    {
      category: "Model Selection for Coding",
      question: "For complex refactors requiring deeper reasoning, choose:",
      options: [
        "GPT‑5 low reasoning only",
        "Any 0‑credit model",
        "Grok Code Fast",
        "Claude Sonnet 4.5 or SWE‑1"
      ],
      correctAnswer: 3,
      explanation: "Complex refactors requiring deeper reasoning are best handled by Claude Sonnet 4.5 or SWE-1 due to their strong reasoning capabilities."
    },
    {
      category: "Model Selection for Coding",
      question: "When to favor 0‑credit models?",
      options: [
        "For frequent tasks; escalate on complexity",
        "When cost doesn't matter",
        "Only for docs",
        "Never"
      ],
      correctAnswer: 0,
      explanation: "0-credit models are best favored for frequent tasks, with escalation to higher-credit models only when complexity demands it."
    },
    
    // Model Specialties
    {
      category: "Model Specialties",
      question: "You're drafting a long design brief with many references. Good fit?",
      options: [
        "SWE‑1",
        "Qwen3‑Coder Fast",
        "GPT‑5 (medium reasoning)",
        "Gemini 2.5 Pro"
      ],
      correctAnswer: 3,
      explanation: "Gemini 2.5 Pro is a good fit for drafting long design briefs with many references due to its strong context handling and document understanding."
    },
    {
      category: "Model Specialties",
      question: "You need code implementation with strong tool‑calling. Best fit?",
      options: [
        "Gemini 2.5 Pro",
        "GPT‑5 (high reasoning)",
        "SWE‑1",
        "Claude Sonnet 4.5 (Thinking)"
      ],
      correctAnswer: 2,
      explanation: "SWE-1 is the best fit for code implementation with strong tool-calling capabilities, as it's specifically optimized for this use case."
    },
    {
      category: "Model Specialties",
      question: "Best practice using specialties across a feature lifecycle?",
      options: [
        "Design with @diff",
        "Implement only with Grok",
        "Plan (Claude/GPT‑high) → Implement (SWE‑1/GPT‑5‑Codex) → Review (Claude)",
        "One model for everything"
      ],
      correctAnswer: 2,
      explanation: "The best practice is to match models to task stages: Plan with Claude/GPT-high, Implement with SWE-1/GPT-5-Codex, and Review with Claude."
    },
    
    // Web Search Advanced
    {
      category: "Web Search",
      question: "You need to reference official API documentation for a specific framework. Best approach?",
      options: [
        "Rely on Cascade's training data only",
        "Copy-paste from browser",
        "Use @docs with the documentation URL",
        "Use @web with generic search"
      ],
      correctAnswer: 2,
      explanation: "@docs is specifically designed for high-quality documentation search and works best with official documentation that has predictable formatting."
    },
    {
      category: "Web Search",
      question: "Why might some websites fail to parse correctly with web search?",
      options: [
        "Web search doesn't support HTTPS",
        "Only HTTP sites work",
        "Heavy JavaScript, paywalls, or login requirements can prevent parsing",
        "All websites parse perfectly"
      ],
      correctAnswer: 2,
      explanation: "Some websites with heavy JavaScript, paywalls, or login requirements may not parse well with web search tools."
    },
    
    // Prompt Engineering Advanced
    {
      category: "Prompt Engineering",
      question: "You're debugging a complex production issue. What information should you include?",
      options: [
        "Only the error message",
        "Just the code snippet",
        "Just say \"it's broken\"",
        "Framework, specific metrics, when issue started, relevant code, and ask for causes and solutions"
      ],
      correctAnswer: 3,
      explanation: "For production debugging, include framework/architecture, specific performance metrics, when the issue started, relevant code, and ask for both causes and solutions."
    },
    {
      category: "Prompt Engineering",
      question: "What's the benefit of role-based prompting?",
      options: [
        "It slows down responses",
        "It's just for fun",
        "It enhances expertise by asking AI to adopt a specific role (e.g., 'Act as a security expert')",
        "It makes prompts longer"
      ],
      correctAnswer: 2,
      explanation: "Role-based prompting enhances the quality of specialized advice by asking the AI to adopt a specific role like 'security expert' or 'code reviewer'."
    },
    
    // Project Workflows
    {
      category: "Project Workflows",
      question: "In the Jira Revo AI + Windsurf workflow, which phase uses Windsurf's planning mode?",
      options: [
        "Planning phase",
        "Analysis phase",
        "Requirement phase",
        "Context gathering phase"
      ],
      correctAnswer: 0,
      explanation: "The Planning phase uses Windsurf's planning mode to break down implementation into detailed tasks after gathering context from Jira Revo AI."
    },
    {
      category: "Project Workflows",
      question: "When adding Windsurf to an existing project, what's the first critical step?",
      options: [
        "Switch to a new framework",
        "Delete all existing code",
        "Analyze the project to create rules that prevent Cascade from changing existing code style",
        "Start coding immediately"
      ],
      correctAnswer: 2,
      explanation: "The first critical step is to analyze the project and create rules to ensure Cascade doesn't change existing code style or break current features."
    },
    {
      category: "Project Workflows",
      question: "How long does local indexing typically take for a new workspace?",
      options: [
        "5 to 10 minutes",
        "Instant",
        "24 hours",
        "1 hour"
      ],
      correctAnswer: 0,
      explanation: "Local indexing for a new workspace typically takes approximately 5 to 10 minutes before you can fully utilize Windsurf's features."
    },
    
    // Advanced Project Management
    {
      category: "Project Workflows",
      question: "When creating rules for an existing project, which model type is recommended?",
      options: [
        "0-credit models",
        "Any model works the same",
        "Thinking models like Claude Sonnet 4.5 Thinking",
        "Fast models only"
      ],
      correctAnswer: 2,
      explanation: "When analyzing projects to create rules, it's recommended to use thinking models like Claude Sonnet 4.5 Thinking for better analysis quality."
    },
    {
      category: "Project Workflows",
      question: "What's the purpose of creating a convention.md file?",
      options: [
        "To serve as single source of truth for coding standards and prevent style inconsistencies",
        "To store API keys",
        "To store git history",
        "To replace documentation"
      ],
      correctAnswer: 0,
      explanation: "The convention.md file serves as the single source of truth for coding standards, preventing Cascade from changing existing code style."
    },
    
    // Advanced Prompt Engineering
    {
      category: "Prompt Engineering",
      question: "For test-driven development, what's the recommended prompt approach?",
      options: [
        "Only write integration tests",
        "Skip testing entirely",
        "Write code first, then tests",
        "Ask to write tests first that verify requirements, then implement code that passes tests"
      ],
      correctAnswer: 3,
      explanation: "For TDD, the recommended approach is to ask AI to write tests first that verify requirements, then implement the code that passes all tests."
    },
    {
      category: "Prompt Engineering",
      question: "When requesting a refactor, what makes the prompt most effective?",
      options: [
        "Ask for complete rewrite",
        "Only provide the code",
        "List specific goals (ES6+, array methods, naming) and ask for explanations",
        "Just say 'make it better'"
      ],
      correctAnswer: 2,
      explanation: "Effective refactoring prompts list specific goals (like ES6+ syntax, array methods, naming improvements) and request explanations of the changes."
    },
    
    // Advanced Web Search
    {
      category: "Web Search",
      question: "What happens during web page reading in Windsurf?",
      options: [
        "Page reads happen on your device within your network",
        "Pages are sent to external servers",
        "Images are downloaded separately",
        "Only text is extracted"
      ],
      correctAnswer: 0,
      explanation: "Page reads happen entirely on your device within your network, so VPN usage doesn't cause issues."
    },
    {
      category: "Web Search",
      question: "How does Cascade handle long web pages?",
      options: [
        "Only reads the first paragraph",
        "Ignores long pages",
        "Breaks content into chunks and reads relevant sections",
        "Reads everything at once"
      ],
      correctAnswer: 2,
      explanation: "For long pages, Windsurf breaks content into multiple chunks and reads specific relevant sections, similar to how a human would skim."
    },
    
    // Integration Scenarios
    {
      category: "Integration Scenarios",
      question: "In the Jira Revo AI + Windsurf workflow, what should you do in the Review phase?",
      options: [
        "Let others review without preparation",
        "Only check syntax",
        "Conduct self-review with Windsurf checking quality, tests, and documentation",
        "Skip review and deploy"
      ],
      correctAnswer: 2,
      explanation: "In the Review phase, conduct a self-review with Windsurf to check code quality, test coverage, and documentation completeness before creating a pull request."
    }
];
