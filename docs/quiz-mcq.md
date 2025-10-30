# Quiz 1

Each topic has 3–5 easy questions to reflect on key concepts. Choose the best answer.

## Tab (`tab.md`)
1) Which setting helps you move the cursor to the next logical edit location?
- A. Tab to Import
- B. Tab to Jump
- C. Supercomplete
- D. Clipboard context

2) What’s the safest way to keep imports consistent as you code?
- A. Accept all suggestions
- B. Tab to Jump
- C. Tab to Import
- D. Disable formatter

3) When should you prefer word-by-word acceptance?
- A. On critical logic where precision matters
- B. On large boilerplate blocks
- C. For deleting dead code
- D. When imports are missing

## Command (`command.md`)
1) How do you constrain the scope of Command edits?
- A. Use a low-latency model
- B. Select the code range before invoking
- C. Run in Chat mode
- D. Use Auto-Continue

2) What’s the best practice after Command proposes a change?
- A. Apply immediately
- B. Review the diff and iterate
- C. Ask for a longer diff
- D. Re-run on the whole file

3) Which shortcut invokes Command?
- A. Cmd/Ctrl+L
- B. Cmd/Ctrl+I
- C. Cmd/Ctrl+Enter
- D. Cmd/Ctrl+\

## Cascade (`cascade.md`)
1) When should you choose Cascade Code over Cascade Chat?
- A. When you want file edits with diffs
- B. When you only need high-level Q&A
- C. When running CLI commands
- D. When browsing the web

2) What feature helps coordinate long multi-step tasks?
- A. Named checkpoints
- B. Planning Mode
- C. Reverts
- D. Queued messages

3) What is the purpose of named checkpoints?
- A. Speed up suggestions
- B. Revert file changes to a known state
- C. Format code
- D. Pin context items

## Cascade Rules (`cascade-rules.md`)
1) Where should workspace- or folder-specific rules live?
- A. global_rules.md only
- B. .windsurf/rules/
- C. README.md
- D. Any file in src/

2) Which is a good characteristic of a rule?
- A. Vague and inspirational
- B. Long and exhaustive
- C. Short and enforceable
- D. Filled with secrets

3) What’s a recommended maintenance practice?
- A. Never touch rules once created
- B. Prune outdated/duplicative rules periodically
- C. Merge all rules into one file
- D. Disable rules on large PRs

## Cascade Memories (`cascade-memories.md`)
1) What’s a good use of memories?
- A. Storing API keys
- B. Capturing architectural decisions
- C. Replacing documentation entirely
- D. Storing temporary workarounds

2) How do you explicitly create a memory?
- A. Use @memory
- B. Ask Cascade to "create a memory of ..."
- C. Add to global_rules.md
- D. Create a workflow

3) Which is true about credits?
- A. Creating/using memories costs credits
- B. Only creating memories is free
- C. Only using memories is free
- D. Creating and using memories do not consume credits

## Planning Mode (`planning-mode.md`)
1) What does Planning Mode provide?
- A. A planning agent that maintains a Todo plan during long tasks
- B. Faster code execution
- C. A new linter
- D. A syntax highlighter

2) What should a good plan include?
- A. Acceptance criteria and testing steps
- B. Secrets for convenience
- C. Unscoped brainstorm notes only
- D. Everything in one mega-step

3) When should you update the plan?
- A. Only at the end
- B. Only when tests fail
- C. Whenever new information appears
- D. Never

## Workflows (`workflows.md`)
1) Where are workflows stored?
- A. .windsurf/workflows/
- B. .windsurf/rules/
- C. global_rules.md
- D. .git/hooks/

2) What’s a good candidate for a workflow?
- A. One-off personal task
- B. Repetitive, multi-step process
- C. Secret sharing
- D. Single-line edit

3) How do you invoke a workflow?
- A. With @workflow
- B. With /[workflow-name]
- C. With #run
- D. With Cmd/Ctrl+L

## @‑Mention Tools (`at-mention-tools.md`)
1) Which @‑mention forces a real-time web search?
- A. @docs
- B. @web
- C. @diff
- D. @term

2) What does @diff provide?
- A. The current repository git diff
- B. The last commit message
- C. A PR template
- D. A new branch name

3) What’s a good practice when using @docs?
- A. Assume all pages parse perfectly
- B. Prefer @docs for official docs with predictable formatting
- C. Avoid quoting examples
- D. Disable citations

## MCP (`mcp.md`)
1) Which transports are supported for MCP servers?
- A. grpc, ws
- B. stdio, http
- C. ftp, ssh
- D. ipc, udp

2) What’s the per-workspace limit related to MCP tools?
- A. 20 tools
- B. 100 enabled tools total
- C. Unlimited tools
- D. 10 tools

3) What happens after a team whitelists one MCP server?
- A. Nothing changes
- B. All non-whitelisted servers are blocked
- C. All servers are disabled
- D. Users can add any server

## Model Selection (`model-selection.md`)
1) Which model is recommended for complex reasoning or architecture discussions?
- A. SWE-1
- B. Claude Sonnet 4.5
- C. GPT-5 (low reasoning)
- D. Gemini 2.5 Pro only

2) What’s a sensible cost strategy on Free/Pro?
- A. Always pick the most expensive model
- B. Start with SWE-1 or lower‑credit models, escalate as needed
- C. Avoid SWE-1 for coding
- D. Never switch models mid-task

3) Which is a good pairing for long tasks?
- A. SWE-1 for coding + Claude Sonnet 4.5 for reviews/design
- B. Only GPT-5 for everything
- C. Gemini 2.5 Pro only
- D. Random model selection

## Model Selection for Coding (`model-selection-coding.md`)
1) Which models are highlighted for coding tasks in the guide?
- A. Only Gemini models
- B. GPT-5-Codex, SWE-1, xAI Grok Code Fast, Claude Sonnet 4.5
- C. Claude family only
- D. Any LLM not listed

2) When should you use a 0‑credit model?
- A. Rarely, to save speed
- B. For frequent coding tasks to conserve credits
- C. Never
- D. Only for documentation

3) What’s recommended for complex refactors?
- A. Grok Code Fast only
- B. Claude Sonnet 4.5 or SWE-1
- C. Any free model
- D. The slowest model

## Model Specialties (`model-specialties-specialty.md`)
1) Which specialty lists SWE‑1 as in-house and tool-capable?
- A. Chat
- B. Code
- C. Planning
- D. Design

2) Which specialty suggests Claude Sonnet 4.5 for clear structure/tradeoffs?
- A. Code
- B. Chat
- C. Planning
- D. Design & Documentation

3) What’s a tip for using specialties effectively?
- A. Stick to one model for all stages
- B. Match model to task stage (Plan → Implement → Review)
- C. Avoid Planning Mode
- D. Disable tool-calling

---

## Answer Key
- **Tab**: 1-B, 2-C, 3-A
- **Command**: 1-B, 2-B, 3-B
- **Cascade**: 1-A, 2-B, 3-B
- **Cascade Rules**: 1-B, 2-C, 3-B
- **Cascade Memories**: 1-B, 2-B, 3-D
- **Planning Mode**: 1-A, 2-A, 3-C
- **Workflows**: 1-A, 2-B, 3-B
- **@‑Mention Tools**: 1-B, 2-A, 3-B
- **MCP**: 1-B, 2-B, 3-B
- **Model Selection**: 1-B, 2-B, 3-A
- **Model Selection for Coding**: 1-B, 2-B, 3-B
- **Model Specialties**: 1-B, 2-D, 3-B
