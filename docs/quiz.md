# Windsurf Features — Reflection Quiz

Use these questions to confirm understanding and get ready to apply the features in this repo.

## Overall
- **[setup]** What settings or model choices do you need to change before using a feature effectively across this repo?
- **[atomicity]** How will you keep edits small and reviewable across features (Tab, Command, Cascade)?
- **[guardrails]** Which guardrails (rules, tests, formatting) will you rely on to keep quality high?

## Tab (`tab.md`)
- **[acceptance]** When will you accept full vs word-by-word suggestions to preserve correctness?
- **[imports]** How will you use Tab to Import to keep imports clean without noise?
- **[fim]** Where does FIM (mid-line completion) best reduce retyping in your current code?
- **[distraction]** What Tab speed setting minimizes distraction while keeping you fast?

## Command (`command.md`)
- **[scope]** When should you select code first vs run at cursor to control change scope?
- **[constraints]** What constraints will you include (types, tests, performance) in your prompts?
- **[review]** How will you review diffs and iterate when the first result is close but not perfect?
- **[terminal]** What repetitive CLI tasks can you generate with Command (flags, pipelines, scripts)?

## Cascade (`cascade.md`)
- **[modes]** When will you pick Cascade Code vs Cascade Chat for a task?
- **[context]** Which files/dirs will you pin or @‑mention to guarantee correct context?
- **[checkpoints]** What moments in a refactor warrant a named checkpoint?
- **[queue]** What messages will you queue while Cascade is working to keep flow uninterrupted?

## Cascade Rules (`cascade-rules.md`)
- **[locations]** Which rules belong in `global_rules.md` vs `.windsurf/rules/` for this repo?
- **[clarity]** Which vague team norms can you convert into short, enforceable bullets?
- **[scoping]** Where do you need folder-scoped rules due to differing service/module practices?
- **[maintenance]** What is your cadence to prune stale/duplicative rules?

## Cascade Memories (`cascade-memories.md`)
- **[what-to-store]** What recurring context (envs, architectural decisions, naming) should become memories?
- **[triggering]** When will you ask Cascade to “create a memory of …” vs rely on auto-generation?
- **[relevance]** How will you keep memories workspace-relevant and avoid cross-repo bleed?

## Planning Mode (`planning-mode.md`)
- **[when]** Which tasks should switch to Planning Mode (multi-step, cross-file, long-running)?
- **[todo-discipline]** How will you keep the Todo list updated and granular enough to execute?
- **[feedback]** What signals tell you to break a big step into smaller ones during execution?

## Workflows (`workflows.md`)
- **[repeatability]** What recurring sequences deserve a workflow (scaffold → implement → test → docs)?
- **[discovery]** Where will you store workflows so the team can discover and reuse them?
- **[inputs/outputs]** What parameters and outputs make your workflows predictable and safe?

## Apply Now (Pick One Feature and Act)
- **[tab-drill]** Implement a small function using Tab: use Tab to Jump, FIM, and Tab to Import. What saved you time?
- **[command-drill]** Use Command to refactor a function with the constraint “no behavior change + add unit test”.
- **[rules-drill]** Add three concise rules to `.windsurf/rules/` that would have improved your last PR.
- **[cascade-drill]** Start a named checkpoint, run a small refactor via Cascade Code, then revert and compare diffs.
- **[planning-drill]** Turn a 20–30 min task into a Todo plan and complete it, updating items as you learn.
