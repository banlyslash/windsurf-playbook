---
description: "Learn how to use Cascade, Windsurf's intelligent AI agent for code generation, planning, and multi-file editing. Master context, models, and best practices."
keywords: ["Cascade", "AI agent", "code generation", "planning mode", "Windsurf", "agentic IDE", "context management"]
image: "/img/docusaurus-social-card.jpg"
---

# Cascade

## Introduction
Cascade is your in‑IDE coding copilot for chat and code edits. It understands large repos fast (Fast Context), can plan multi‑step work (Planning Mode), and apply safe edits with reverts.

- **Modes**: Cascade Code (edits files) and Cascade Chat (ask/answer; can propose inserts)
- **Context**: @‑mentions, pinned context, active document, terminal awareness
- **Controls**: Model selection, queued messages, auto‑continue, named checkpoints & reverts

## Setup (Settings & Context)
- **Model selection**: pick the right model under the chat input based on speed/accuracy needs
- **Planning Mode**: enable for longer tasks; track/edit the Todo list in‑chat
- **Persistent Context**: add Custom Instructions and pin files/dirs/snippets in Advanced tab
- **@‑Mentions**: reference files, dirs, functions/classes, or terminal to guarantee context
- **Auto‑continue**: allow Cascade to resume when tool‑call limits hit (consumes credits)

## Do’s and Don’ts (Code Quality)
- **Do** ask for small, atomic changes; review proposed diffs before applying
- **Do** create a named checkpoint[^1] before risky refactors; revert if outcomes regress
- **Do** use Planning Mode for multi‑step changes; keep the plan updated as you learn
- **Do** pin critical files/specs and use @‑mentions for determinism
- **Don’t** combine multiple concerns (refactor + feature + cleanup) in one prompt
- **Don’t** paste secrets/credentials; prefer environment placeholders
- **Don’t** skip tests/linters after applying edits

## Tips (Fast Flow)
- **Regenerate with context**: submit with `Cmd+Enter` to force codebase context; sparkle to re‑run
- **Slash command**: `/explain` to clarify code or errors
- **Copy & Insert**: insert code blocks from Chat directly at cursor
- **Fast Context**: rely on Cascade’s quick subagent to pull relevant code; still cite @‑mentions for must‑include context
- **Queued messages**: type next prompts while Cascade works; send now by pressing Enter on an empty box
- **Tool calling**: let Cascade search/build/run with terminal/web/MCP tools; press Accept to execute
- **Stats for nerds**: inspect message stats to debug context usage and tool calls
- **Reverts**: changes are revertible to a checkpoint; note that revert operations themselves are irreversible


[^1]: A named checkpoint is a clearly labeled save point of your work you can return to later. In practice, this is usually a Git commit, tag, or branch created intentionally before risky changes.
[^2]: By default, Windsurf Indexing will ignore: Paths specified in gitignore, Files in node_modules, Hidden pathnames (starting with ”.”).