#  Command

## Introduction
Windsurf Command turns natural‑language prompts into high‑quality code edits directly in your editor.
- Invoke inline on the current file; edits apply at the cursor or within the selected range
- Review and accept/reject a diff before applying
- Optimized, file‑aware model options; fast feedback loop
- Works in the terminal to generate correct CLI syntax

## Setup (Keyboard & Models)
- Shortcut: **Cmd+I** (Mac) / **Ctrl+I** (Win/Linux)
- Select a Command model optimized for edits (e.g., Windsurf Fast)
- Submit prompt: **Cmd/Ctrl+Enter**; Discard: **Cmd/Ctrl+Delete**
- To constrain scope, select code before invoking Command

## Do’s and Don’ts (Code Quality)
- **Do** select the smallest relevant region to reduce unintended changes
- **Do** specify constraints (types, tests, interfaces, performance) in your prompt
- **Do** review the diff carefully; apply in small, atomic steps
- **Do** use terminal Command for precise CLI/task scaffolding
- **Don’t** accept large multi‑file or multi‑concern changes in one go
- **Don’t** overwrite hand‑crafted logic without tests or benchmarks
- **Don’t** paste secrets/keys into prompts

## Tips (Fast Flow)
- **Edit selection vs cursor**: select to edit only that range; no selection = insert at cursor
- **Iterate**: “continue”, “tighten types”, “add unit tests”, “keep public API stable”
- **Lints/format**: run your linter/formatter after applying changes
- **Refactors**: request minimal diffs (e.g., “rename method + update references, no behavior change”)
- **Terminal**: use Command in the terminal to produce exact commands and flags
