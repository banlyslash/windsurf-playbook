# Quiz 2: Advanced Scenarios

Scenario-style questions to check deeper understanding. Test your knowledge with these more challenging scenarios!

<ThreadedQuiz 
  title="Windsurf Advanced Scenarios Quiz" 
  showCategories={true}
  questions={[
    // Tab Features
    {
      category: "Tab Features",
      question: "You accept a multi-line suggestion, but imports weren't updated. What's the most precise next step?",
      options: [
        "Re-run formatter",
        "Trigger Tab to Import",
        "Undo and try again",
        "Add imports manually"
      ],
      correctAnswer: 1,
      explanation: "Triggering Tab to Import is the most precise solution to update imports after accepting a multi-line suggestion that didn't update them automatically."
    },
    {
      category: "Tab Features",
      question: "You're editing a critical function mid-line and want surgical suggestions. What should you do?",
      options: [
        "Move cursor to line start",
        "Use FIM by placing cursor mid-line",
        "Disable Supercomplete",
        "Paste the function into a new file"
      ],
      correctAnswer: 1,
      explanation: "Using Fill-in-Middle (FIM) by placing your cursor mid-line allows for more surgical suggestions when editing critical functions."
    },
    {
      category: "Tab Features",
      question: "After accepting a deletion suggestion, tests fail. What should you try first?",
      options: [
        "Revert the whole file",
        "Re-run Tab to Jump",
        "Reinsert the minimal deleted block manually and retest",
        "Disable Tab features"
      ],
      correctAnswer: 2,
      explanation: "When tests fail after a deletion, it's best to first reinsert the minimal deleted block manually and retest to identify the specific code that needs to be preserved."
    },
    
    // Command Features
    {
      category: "Command Features",
      question: "You need to rename a method and update references without changing behavior. Best approach?",
      options: [
        "Run Command on whole project",
        "Select only the method + call sites; prompt \"rename + update references, no behavior change\"",
        "Ask for a full rewrite",
        "Switch to Chat mode"
      ],
      correctAnswer: 1,
      explanation: "Selecting only the method and call sites with a specific prompt to rename and update references without behavior change provides the most controlled and targeted approach."
    },
    {
      category: "Command Features",
      question: "Command produced a near-correct diff. What's the efficient next step?",
      options: [
        "Reject and start over",
        "Ask Command to refine: \"keep changes, fix X only\"",
        "Apply then manually fix everything",
        "Change models and retry"
      ],
      correctAnswer: 1,
      explanation: "The most efficient approach is to ask Command to refine by keeping the good changes and fixing only the specific issues, rather than starting over or manually fixing everything."
    },
    {
      category: "Command Features",
      question: "You want terminal scaffolding with correct flags. What do you use?",
      options: [
        "Chat with @docs",
        "Terminal Command (Cmd/Ctrl+I)",
        "Planning Mode",
        "Workflows"
      ],
      correctAnswer: 1,
      explanation: "Terminal Command (Cmd/Ctrl+I) is specifically designed for terminal scaffolding with the correct flags and options."
    },
    
    // Cascade Features
    {
      category: "Cascade Features",
      question: "You want edits applied with revert safety. Which mode?",
      options: [
        "Cascade Chat",
        "Cascade Code",
        "Terminal",
        "Workflows"
      ],
      correctAnswer: 1,
      explanation: "Cascade Code provides edits with revert safety, allowing you to easily track and revert changes if needed."
    },
    {
      category: "Cascade Features",
      question: "Your long task paused after tool-call limits. What should you do?",
      options: [
        "Resend the same prompt",
        "Press Continue (optionally Auto-Continue next time)",
        "Switch models mid-stream",
        "Clear context and retry"
      ],
      correctAnswer: 1,
      explanation: "When a task pauses due to tool-call limits, pressing Continue (and considering Auto-Continue for future tasks) is the best way to resume without losing context."
    },
    {
      category: "Cascade Features",
      question: "You need deterministic inclusion of a specific file and function. Best method?",
      options: [
        "Rely on Fast Context only",
        "@‑mention the file and function",
        "Paste code into chat",
        "Ask Cascade to guess"
      ],
      correctAnswer: 1,
      explanation: "@-mentioning the specific file and function ensures deterministic inclusion of exactly what you need in the context."
    },
    
    // Cascade Rules
    {
      category: "Cascade Rules",
      question: "You have different practices in `frontend/` vs `backend/`. Where should you place rules?",
      options: [
        "Only in global_rules.md",
        "In `.windsurf/rules/frontend/` and `.windsurf/rules/backend/`",
        "In README files",
        "In the package.json"
      ],
      correctAnswer: 1,
      explanation: "For different practices across directories, placing rules in `.windsurf/rules/frontend/` and `.windsurf/rules/backend/` provides proper scoping and organization."
    },
    {
      category: "Cascade Rules",
      question: "You found duplicate rules across folders. Best practice?",
      options: [
        "Keep both for redundancy",
        "De‑duplicate and scope to the most specific location",
        "Delete all duplicates with no replacement",
        "Move everything to a single global file"
      ],
      correctAnswer: 1,
      explanation: "When finding duplicate rules, it's best to de-duplicate them and scope them to the most specific location needed to maintain clarity and avoid conflicts."
    },
    {
      category: "Cascade Rules",
      question: "Which rule phrasing is preferable?",
      options: [
        "\"Write good code\"",
        "\"Add unit tests for public functions; no behavior change in refactors\"",
        "\"Try to be consistent\"",
        "\"Use your best judgment\""
      ],
      correctAnswer: 1,
      explanation: "Specific, actionable rules like \"Add unit tests for public functions; no behavior change in refactors\" are preferable as they provide clear guidance."
    },
    
    // Cascade Memories
    {
      category: "Cascade Memories",
      question: "Which should become a memory?",
      options: [
        "A temporary workaround you'll remove tomorrow",
        "The team's decision for API versioning policy",
        "A one-off debug log location",
        "A personal reminder"
      ],
      correctAnswer: 1,
      explanation: "Important architectural decisions like the team's API versioning policy are ideal candidates for memories as they provide long-term context."
    },
    {
      category: "Cascade Memories",
      question: "How do you ensure a memory stays relevant?",
      options: [
        "Never update it",
        "Periodically review and revise outdated details",
        "Delete it after a week",
        "Duplicate it into multiple workspaces"
      ],
      correctAnswer: 1,
      explanation: "To keep memories relevant, periodically review and revise outdated details to ensure they remain accurate and useful."
    },
    {
      category: "Cascade Memories",
      question: "What's the safest way to store sensitive info?",
      options: [
        "In a memory for convenience",
        "In chat so Cascade remembers",
        "In environment variables/secrets (not memories)",
        "In a README"
      ],
      correctAnswer: 2,
      explanation: "Sensitive information should be stored in environment variables or secrets management systems, not in memories or chat history."
    },
    
    // Planning Mode
    {
      category: "Planning Mode",
      question: "Your plan is too coarse-grained to execute. What do you do?",
      options: [
        "Ignore and proceed",
        "Break steps into smaller Todo items with acceptance criteria",
        "Switch to a different model",
        "Disable Planning Mode"
      ],
      correctAnswer: 1,
      explanation: "When a plan is too coarse-grained, breaking steps into smaller Todo items with clear acceptance criteria makes it more actionable."
    },
    {
      category: "Planning Mode",
      question: "Midway through a task, new constraints appear. What's the best action?",
      options: [
        "Restart the conversation",
        "Update the plan and adjust subsequent steps",
        "Remove previous steps",
        "Continue without changes"
      ],
      correctAnswer: 1,
      explanation: "When new constraints appear, updating the plan and adjusting subsequent steps allows you to adapt while preserving progress."
    },
    {
      category: "Planning Mode",
      question: "What keeps long tasks resilient to interruptions?",
      options: [
        "Auto-continue only",
        "The Todo plan acting as persistent context",
        "Switching models",
        "Avoiding checkpoints"
      ],
      correctAnswer: 1,
      explanation: "The Todo plan serves as persistent context that makes long tasks resilient to interruptions by maintaining state."
    },
    
    // Workflows
    {
      category: "Workflows",
      question: "You need a repeatable PR review checklist. Where should it live?",
      options: [
        "`.windsurf/workflows/` as a workflow",
        "In a random doc file",
        "In global_rules.md",
        "In terminal history"
      ],
      correctAnswer: 0,
      explanation: "A repeatable PR review checklist should live in `.windsurf/workflows/` as a workflow for consistent application."
    },
    {
      category: "Workflows",
      question: "How do you combine complex procedures safely?",
      options: [
        "One giant workflow",
        "Multiple modular workflows that can nest via `/workflow-name`",
        "Only manual steps",
        "Use Chat instead"
      ],
      correctAnswer: 1,
      explanation: "Complex procedures are best combined using multiple modular workflows that can nest via `/workflow-name`, promoting reusability and maintainability."
    },
    {
      category: "Workflows",
      question: "Why curate workflow size under ~12k chars?",
      options: [
        "For linter compatibility",
        "For optimal performance and readability",
        "To reduce disk use",
        "To pass CI"
      ],
      correctAnswer: 1,
      explanation: "Keeping workflow size under ~12k chars ensures optimal performance and readability, preventing context overload."
    },
    
    // @‑Mention Tools
    {
      category: "@‑Mention Tools",
      question: "You want authoritative API usage from official docs. First choice?",
      options: [
        "@web",
        "@docs",
        "@diff",
        "Pasting code"
      ],
      correctAnswer: 1,
      explanation: "@docs is the best choice for authoritative API usage from official documentation as it provides structured access to documentation."
    },
    {
      category: "@‑Mention Tools",
      question: "You need to discuss uncommitted changes. Best @‑mention?",
      options: [
        "@docs",
        "@web",
        "@diff",
        "@term"
      ],
      correctAnswer: 2,
      explanation: "@diff is specifically designed to show and discuss uncommitted changes in your repository."
    },
    {
      category: "@‑Mention Tools",
      question: "How do you include terminal output in chat?",
      options: [
        "Copy/paste only",
        "Press Cmd/Ctrl+L to send selection, then @‑mention the terminal",
        "Use Workflows",
        "Use Planning Mode"
      ],
      correctAnswer: 1,
      explanation: "To include terminal output in chat, press Cmd/Ctrl+L to send the selection and then @-mention the terminal for context."
    },
    
    // MCP
    {
      category: "MCP",
      question: "Which is true about MCP in Windsurf?",
      options: [
        "Supports MCP prompts heavily",
        "Supports MCP tools and resources (not prompts)",
        "Only supports stdio transport",
        "HTTP transport doesn't require `/mcp`"
      ],
      correctAnswer: 1,
      explanation: "In Windsurf, MCP supports tools and resources but not prompts, focusing on extending functionality through external tools."
    },
    {
      category: "MCP",
      question: "After whitelisting a server for the team, users report blocks. Likely cause?",
      options: [
        "Too many tools enabled",
        "Case-sensitive whitelist pattern mismatch",
        "Model choice",
        "Lack of internet"
      ],
      correctAnswer: 1,
      explanation: "When users report blocks after whitelisting, a case-sensitive whitelist pattern mismatch is often the cause, as patterns must match exactly."
    },
    {
      category: "MCP",
      question: "Which keeps systems safer?",
      options: [
        "Putting tokens in chat",
        "Using least‑privilege tokens via env in `mcp_config.json`",
        "Enabling all tools for convenience",
        "Sharing `mcp_config.json` publicly"
      ],
      correctAnswer: 1,
      explanation: "Using least-privilege tokens via environment variables in `mcp_config.json` follows security best practices by limiting access scope."
    },
    
    // Model Selection
    {
      category: "Model Selection",
      question: "You're doing architecture tradeoff analysis. Best model?",
      options: [
        "SWE‑1",
        "Claude Sonnet 4.5",
        "GPT‑5 low reasoning",
        "Gemini only"
      ],
      correctAnswer: 1,
      explanation: "Claude Sonnet 4.5 is best for architecture tradeoff analysis due to its strong reasoning capabilities and ability to articulate complex tradeoffs."
    },
    {
      category: "Model Selection",
      question: "Credit‑aware strategy for long sessions?",
      options: [
        "Always pick highest‑credit model",
        "Start with 0/low‑credit models, escalate only when needed",
        "Switch randomly",
        "Avoid switching models"
      ],
      correctAnswer: 1,
      explanation: "A credit-aware strategy for long sessions is to start with 0/low-credit models and escalate only when needed based on complexity."
    },
    {
      category: "Model Selection",
      question: "Large doc reading + planning: best general choice?",
      options: [
        "Gemini 2.5 Pro",
        "SWE‑1",
        "Claude Sonnet 4.5 only",
        "GPT‑5 low reasoning"
      ],
      correctAnswer: 0,
      explanation: "Gemini 2.5 Pro is particularly good at large document reading and planning tasks due to its efficient context handling."
    },
    
    // Model Selection for Coding
    {
      category: "Model Selection for Coding",
      question: "You need fast iterations with acceptable quality. Which pick fits?",
      options: [
        "xAI Grok Code Fast",
        "Claude Sonnet 4.5",
        "GPT‑5‑Codex only",
        "Gemini 2.5 Pro"
      ],
      correctAnswer: 0,
      explanation: "xAI Grok Code Fast is designed for fast iterations with acceptable quality, making it ideal for rapid development cycles."
    },
    {
      category: "Model Selection for Coding",
      question: "For complex refactors requiring deeper reasoning, choose:",
      options: [
        "Grok Code Fast",
        "Claude Sonnet 4.5 or SWE‑1",
        "Any 0‑credit model",
        "GPT‑5 low reasoning only"
      ],
      correctAnswer: 1,
      explanation: "Complex refactors requiring deeper reasoning are best handled by Claude Sonnet 4.5 or SWE-1 due to their strong reasoning capabilities."
    },
    {
      category: "Model Selection for Coding",
      question: "When to favor 0‑credit models?",
      options: [
        "When cost doesn't matter",
        "For frequent tasks; escalate on complexity",
        "Never",
        "Only for docs"
      ],
      correctAnswer: 1,
      explanation: "0-credit models are best favored for frequent tasks, with escalation to higher-credit models only when complexity demands it."
    },
    
    // Model Specialties
    {
      category: "Model Specialties",
      question: "You're drafting a long design brief with many references. Good fit?",
      options: [
        "GPT‑5 (medium reasoning)",
        "Gemini 2.5 Pro",
        "SWE‑1",
        "Qwen3‑Coder Fast"
      ],
      correctAnswer: 1,
      explanation: "Gemini 2.5 Pro is a good fit for drafting long design briefs with many references due to its strong context handling and document understanding."
    },
    {
      category: "Model Specialties",
      question: "You need code implementation with strong tool‑calling. Best fit?",
      options: [
        "SWE‑1",
        "Claude Sonnet 4.5 (Thinking)",
        "GPT‑5 (high reasoning)",
        "Gemini 2.5 Pro"
      ],
      correctAnswer: 0,
      explanation: "SWE-1 is the best fit for code implementation with strong tool-calling capabilities, as it's specifically optimized for this use case."
    },
    {
      category: "Model Specialties",
      question: "Best practice using specialties across a feature lifecycle?",
      options: [
        "One model for everything",
        "Plan (Claude/GPT‑high) → Implement (SWE‑1/GPT‑5‑Codex) → Review (Claude)",
        "Implement only with Grok",
        "Design with @diff"
      ],
      correctAnswer: 1,
      explanation: "The best practice is to match models to task stages: Plan with Claude/GPT-high, Implement with SWE-1/GPT-5-Codex, and Review with Claude."
    }
  ]} 
/>
