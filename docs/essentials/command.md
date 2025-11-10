---
description: "Learn how to use Windsurf Command for inline AI-powered code generation and editing. Master natural language prompts and code transformation."
keywords:
  [
    "Command",
    "code editing",
    "Windsurf",
    "AI",
    "inline editing",
    "code generation",
    "natural language",
  ]
image: "/img/docusaurus-social-card.jpg"
---

# Command

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

<table>
<tbody>
  <tr>
    <td>Selection Mode</td>
    <td>Highlight code first to edit that section</td>
    <td>
      <img src="/img/command-figure-1.png" alt="Selection Mode"></img>
    </td>
  </tr>
  <tr>
    <td>Generation Mode</td>
    <td>Without selection, creates new code at cursor</td>
    <td>
      <img src="/img/command-figure-2.png" alt="Generation Mode"></img>
    </td>
  </tr>
  <tr>
    <td>Code Lenses</td>
    <td>
      - Explain: Send current code block (where the cursor is) to cascade to explain <br></br>
      - Refactor: open a popup of prompt options or input a custom one <br></br>
      - Docstring: add comment for the current code block
    </td>
    <td>
      <video width="100%" controls>
          <source src="/vdo/command-figure-3.mov" type="video/mp4"></source>
      </video>
    </td>
  </tr>
</tbody>
</table>

### Terminal Command

- Use ⌘+I/Ctrl+I in terminal to generate CLI syntax from natural language
- Converts plain English instructions into proper command-line syntax
- Helps with complex commands you don't remember
- Supports various CLI tools and package managers
- Saves time looking up command flags and options

<video width="100%" controls>
  <source src="/vdo/command-figure-4.mov" type="video/mp4"></source>
</video>

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
