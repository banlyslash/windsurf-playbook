# Quiz 2

Scenario-style questions to check deeper understanding. Choose the best answer.

## Tab (`tab.md`)
1) You accept a multi-line suggestion, but imports weren't updated. What’s the most precise next step?
- A. Re-run formatter
- B. Trigger Tab to Import
- C. Undo and try again
- D. Add imports manually

2) You’re editing a critical function mid-line and want surgical suggestions. What should you do?
- A. Move cursor to line start
- B. Use FIM by placing cursor mid-line
- C. Disable Supercomplete
- D. Paste the function into a new file

3) After accepting a deletion suggestion, tests fail. What should you try first?
- A. Revert the whole file
- B. Re-run Tab to Jump
- C. Reinsert the minimal deleted block manually and retest
- D. Disable Tab features

## Command (`command.md`)
1) You need to rename a method and update references without changing behavior. Best approach?
- A. Run Command on whole project
- B. Select only the method + call sites; prompt "rename + update references, no behavior change"
- C. Ask for a full rewrite
- D. Switch to Chat mode

2) Command produced a near-correct diff. What’s the efficient next step?
- A. Reject and start over
- B. Ask Command to refine: "keep changes, fix X only"
- C. Apply then manually fix everything
- D. Change models and retry

3) You want terminal scaffolding with correct flags. What do you use?
- A. Chat with @docs
- B. Terminal Command (Cmd/Ctrl+I)
- C. Planning Mode
- D. Workflows

## Cascade (`cascade.md`)
1) You want edits applied with revert safety. Which mode?
- A. Cascade Chat
- B. Cascade Code
- C. Terminal
- D. Workflows

2) Your long task paused after tool-call limits. What should you do?
- A. Resend the same prompt
- B. Press Continue (optionally Auto-Continue next time)
- C. Switch models mid-stream
- D. Clear context and retry

3) You need deterministic inclusion of a specific file and function. Best method?
- A. Rely on Fast Context only
- B. @‑mention the file and function
- C. Paste code into chat
- D. Ask Cascade to guess

## Cascade Rules (`cascade-rules.md`)
1) You have different practices in `frontend/` vs `backend/`. Where should you place rules?
- A. Only in global_rules.md
- B. In `.windsurf/rules/frontend/` and `.windsurf/rules/backend/`
- C. In README files
- D. In the package.json

2) You found duplicate rules across folders. Best practice?
- A. Keep both for redundancy
- B. De‑duplicate and scope to the most specific location
- C. Delete all duplicates with no replacement
- D. Move everything to a single global file

3) Which rule phrasing is preferable?
- A. "Write good code"
- B. "Add unit tests for public functions; no behavior change in refactors"
- C. "Try to be consistent"
- D. "Use your best judgment"

## Cascade Memories (`cascade-memories.md`)
1) Which should become a memory?
- A. A temporary workaround you’ll remove tomorrow
- B. The team’s decision for API versioning policy
- C. A one-off debug log location
- D. A personal reminder

2) How do you ensure a memory stays relevant?
- A. Never update it
- B. Periodically review and revise outdated details
- C. Delete it after a week
- D. Duplicate it into multiple workspaces

3) What’s the safest way to store sensitive info?
- A. In a memory for convenience
- B. In chat so Cascade remembers
- C. In environment variables/secrets (not memories)
- D. In a README

## Planning Mode (`planning-mode.md`)
1) Your plan is too coarse-grained to execute. What do you do?
- A. Ignore and proceed
- B. Break steps into smaller Todo items with acceptance criteria
- C. Switch to a different model
- D. Disable Planning Mode

2) Midway through a task, new constraints appear. What’s the best action?
- A. Restart the conversation
- B. Update the plan and adjust subsequent steps
- C. Remove previous steps
- D. Continue without changes

3) What keeps long tasks resilient to interruptions?
- A. Auto-continue only
- B. The Todo plan acting as persistent context
- C. Switching models
- D. Avoiding checkpoints

## Workflows (`workflows.md`)
1) You need a repeatable PR review checklist. Where should it live?
- A. `.windsurf/workflows/` as a workflow
- B. In a random doc file
- C. In global_rules.md
- D. In terminal history

2) How do you combine complex procedures safely?
- A. One giant workflow
- B. Multiple modular workflows that can nest via `/workflow-name`
- C. Only manual steps
- D. Use Chat instead

3) Why curate workflow size under ~12k chars?
- A. For linter compatibility
- B. For optimal performance and readability
- C. To reduce disk use
- D. To pass CI

## @‑Mention Tools (`at-mention-tools.md`)
1) You want authoritative API usage from official docs. First choice?
- A. @web
- B. @docs
- C. @diff
- D. Pasting code

2) You need to discuss uncommitted changes. Best @‑mention?
- A. @docs
- B. @web
- C. @diff
- D. @term

3) How do you include terminal output in chat?
- A. Copy/paste only
- B. Press Cmd/Ctrl+L to send selection, then @‑mention the terminal
- C. Use Workflows
- D. Use Planning Mode

## MCP (`mcp.md`)
1) Which is true about MCP in Windsurf?
- A. Supports MCP prompts heavily
- B. Supports MCP tools and resources (not prompts)
- C. Only supports stdio transport
- D. HTTP transport doesn’t require `/mcp`

2) After whitelisting a server for the team, users report blocks. Likely cause?
- A. Too many tools enabled
- B. Case-sensitive whitelist pattern mismatch
- C. Model choice
- D. Lack of internet

3) Which keeps systems safer?
- A. Putting tokens in chat
- B. Using least‑privilege tokens via env in `mcp_config.json`
- C. Enabling all tools for convenience
- D. Sharing `mcp_config.json` publicly

## Model Selection (`model-selection.md`)
1) You’re doing architecture tradeoff analysis. Best model?
- A. SWE‑1
- B. Claude Sonnet 4.5
- C. GPT‑5 low reasoning
- D. Gemini only

2) Credit‑aware strategy for long sessions?
- A. Always pick highest‑credit model
- B. Start with 0/low‑credit models, escalate only when needed
- C. Switch randomly
- D. Avoid switching models

3) Large doc reading + planning: best general choice?
- A. Gemini 2.5 Pro
- B. SWE‑1
- C. Claude Sonnet 4.5 only
- D. GPT‑5 low reasoning

## Model Selection for Coding (`model-selection-coding.md`)
1) You need fast iterations with acceptable quality. Which pick fits?
- A. xAI Grok Code Fast
- B. Claude Sonnet 4.5
- C. GPT‑5‑Codex only
- D. Gemini 2.5 Pro

2) For complex refactors requiring deeper reasoning, choose:
- A. Grok Code Fast
- B. Claude Sonnet 4.5 or SWE‑1
- C. Any 0‑credit model
- D. GPT‑5 low reasoning only

3) When to favor 0‑credit models?
- A. When cost doesn’t matter
- B. For frequent tasks; escalate on complexity
- C. Never
- D. Only for docs

## Model Specialties (`model-specialties-specialty.md`)
1) You’re drafting a long design brief with many references. Good fit?
- A. GPT‑5 (medium reasoning)
- B. Gemini 2.5 Pro
- C. SWE‑1
- D. Qwen3‑Coder Fast

2) You need code implementation with strong tool‑calling. Best fit?
- A. SWE‑1
- B. Claude Sonnet 4.5 (Thinking)
- C. GPT‑5 (high reasoning)
- D. Gemini 2.5 Pro

3) Best practice using specialties across a feature lifecycle?
- A. One model for everything
- B. Plan (Claude/GPT‑high) → Implement (SWE‑1/GPT‑5‑Codex) → Review (Claude)
- C. Implement only with Grok
- D. Design with @diff

---

## Answer Key
- **Tab**: 1-B, 2-B, 3-C
- **Command**: 1-B, 2-B, 3-B
- **Cascade**: 1-B, 2-B, 3-B
- **Cascade Rules**: 1-B, 2-B, 3-B
- **Cascade Memories**: 1-B, 2-B, 3-C
- **Planning Mode**: 1-B, 2-B, 3-B
- **Workflows**: 1-A, 2-B, 3-B
- **@‑Mention Tools**: 1-B, 2-C, 3-B
- **MCP**: 1-B, 2-B, 3-B
- **Model Selection**: 1-B, 2-B, 3-A
- **Model Selection for Coding**: 1-A, 2-B, 3-B
- **Model Specialties**: 1-B, 2-A, 3-B
