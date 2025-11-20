---
description: "Learn how to use @-mentions in Cascade to reference files, directories, functions, and tools for enhanced context and productivity."
keywords: ["@-mention", "Cascade", "context", "tools", "Windsurf", "file reference", "function reference"]
image: "/img/docusaurus-social-card.jpg"
---

# Cascade @-Mention Tools
Below are the features you can explicitly invoke via @-mentions in Cascade.

## @web (Web Search)
- **Introduction**: Force real-time web search for up-to-date info and references.
- **Settings**: Enable Web Search in Windsurf Settings. You can also paste URLs to read pages.
- **Do’s**:
  - **Be specific** about what you need (version, API name, framework).
  - **Ask for citations** or direct links to sources.
  - **Have Cascade read pages** it finds when accuracy matters.
- **Don’ts**:
  - Don’t trust summaries blindly; skim the cited page.
  - Don’t mix unrelated topics in one query.
- **Tips**:
  - Use `@web` when you suspect local context isn’t enough.
  - Follow up with "read this URL" to extract exact code/config snippets.

## @docs (Curated Docs Search)
- **Introduction**: Query curated documentation sets with high‑quality parsing for reliable code examples.
- **Settings**: Ensure Docs Search is enabled; some workspaces expose named doc sets (ask Cascade which are available).
- **Do’s**:
  - Reference exact API names/classes.
  - Ask Cascade to quote and adapt examples to your codebase.
- **Don’ts**:
  - Don’t assume all sites are parseable; fall back to @web and direct URLs if needed.
- **Tips**:
  - Prefer `@docs` over `@web` for official docs and predictable formatting.

## Code Symbols and Files (functions/classes/files/directories)
- **Introduction**: Deterministically include specific code elements by @‑mentioning them.
- **Settings**: Availability depends on local indexing and language parser support (e.g., Python, TS/JS, Go, Java, C/C++, PHP, Ruby, C#, Kotlin, Dart, Bash, COBOL, etc.).
- **Do’s**:
  - Mention exact paths/symbols to narrow scope.
  - Pair with clear goals (tests pass, lints clean, minimal diff).
- **Don’ts**:
  - Don’t reference huge directories if only one file matters.
- **Tips**:
  - Combine with Fast Context by submitting with `Cmd+Enter` for complex code search tasks.

## Terminal Sessions (@‑mention your terminal)
- **Introduction**: Refer to active terminal sessions and their output in chat.
- **Settings**: Send terminal selection to Cascade with `Cmd/Ctrl+L`. Auto‑executed commands respect allow/deny lists and user permission (premium models).
- **Do’s**:
  - Share failing stack traces and ask for targeted fixes.
  - Ask Cascade to propose commands (use Terminal Command `Cmd/Ctrl+I`) and explain each flag.
- **Don’ts**:
  - Don’t accept auto‑executed commands blindly—skim for safety and side effects.
- **Tips**:
  - Request dry‑run variants (`--check`, `--diff`) where possible and rerun with confirmation.

## Remote Repositories
- **Introduction**: @‑mention remote repos to include external codebases as context.
- **Settings**: Ensure the remote is accessible and indexed as supported by Windsurf.
- **Do’s**:
  - Specify subpaths or key modules to reduce noise.
- **Don’ts**:
  - Don’t rely on remote repos for secrets or private configuration—share only what’s needed.
- **Tips**:
  - Ask Cascade to compare APIs or patterns between local and remote modules.

## Previous Conversations (@‑mention previous conversations)
- **Introduction**: Pull in summaries, checkpoints, and relevant slices from prior chats without overloading context.
- **Settings**: None.
- **Do’s**:
  - Reuse design decisions and acceptance criteria from earlier threads.
- **Don’ts**:
  - Don’t expect the full transcript; Cascade selects relevant parts only.
- **Tips**:
  - Ask Cascade to extract the exact code or plan segment referenced in the prior chat.
