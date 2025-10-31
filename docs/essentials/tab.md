# Tab

## Introduction
Windsurf Tab accelerates high‑quality coding by turning your editor into a fast, context‑aware assistant:
- Accept inline suggestions, refactors, and deletions
- Jump your cursor to the next logical spot (Tab to Jump)
- Auto‑insert imports (Tab to Import) without breaking your flow
- Suggest in the middle of a line (FIM) and even from terminal context

## Setup (Settings → Tab)
- Enable Autocomplete and Supercomplete; set speed to Default or Fast based on hardware
- Toggle on Tab to Import and Tab to Jump
- Optional: Use Clipboard as context for better in‑file and cross‑file suggestions
- Optional: Highlight code after accept to quickly review changes

## Do’s and Don’ts (Code Quality Focus)
- **Do** accept word‑by‑word for precision on critical logic
- **Do** use Tab to Import to keep imports clean and consistent
- **Do** review suggested deletions (Supercomplete) to avoid accidental behavior changes
- **Do** prefer FIM for mid‑line edits to reduce retyping and preserve style
- **Do** tune speed so suggestions arrive quickly but aren’t distracting
- **Don’t** accept large, multi‑line changes without scanning for API/side‑effect risks
- **Don’t** keep unused imports after edits; re‑trigger Tab to Import or run your linter/formatter
- **Don’t** accept suggestions that bypass tests or weaken types just to “make it compile”

## Tips (Fast Flow)
- **Accept**: Tab; **Cancel**: Esc
- **Word‑by‑word accept**: VS Code `Cmd+Right`, JetBrains `Alt+Shift+\\`
- **Cycle suggestions**: `Alt+]` / `Alt+[`
- **Tab to Jump**: let Windsurf move the cursor to the next edit site (great for implementing TODO chains)
- **Tab to Import**: define a symbol first, then press Tab to insert the import while staying in place
- **FIM**: place cursor mid‑line to get surgical completions that preserve surrounding code
- **Terminal context**: Tab learns from your terminal, enabling relevant code/task suggestions
- **Clipboard context**: copy sample code/contract, then accept suggestions tailored to it
