# For Coding

Use public benchmarks as directional signal; your repo, tools, and constraints matter. Prefer real‑world evals (SWE‑bench Verified, LiveCodeBench) over narrow function tests.

---

## Recommended Coding Models (with evidence)

- **Anthropic Claude 3.5/3.7 Sonnet**
  - Why: Strong on real‑world coding and agentic tool use.
  - Evidence: 49% on SWE‑bench Verified (SOTA at time of post) [1]; 93.7% HumanEval (class‑leading at time of post) [2].
  - Use for: Complex refactors, issue resolution, code reviews.

- **xAI Grok Code Fast 1**
  - Why: Tuned for fast agentic coding with competitive quality.
  - Evidence: 70.8% on SWE‑bench Verified (internal harness, vendor‑reported) [3].
  - Use for: Fast prototyping, rapid iterations, CLI/code scaffolding.

- **Qwen 2.5/3 Coder (family)**
  - Why: Strong open‑source coder models across sizes; good latency/cost balance.
  - Evidence: Technical report improvements on HumanEval/MBPP [4]; competitive open‑source standings on LiveCodeBench [5].
  - Use for: OSS‑first stacks, local workflows, budget‑conscious coding.

- **OpenAI o4‑mini / o3**
  - Why: Reasoning‑focused models that pair well with tools.
  - Evidence: OpenAI reports top AIME 2024/2025 and reasoning performance; positioned for coding/tool use [7].
  - Use for: Multi‑step coding plans, orchestration, complex analysis.

- **Gemini 2.5 Pro**
  - Why: Long‑context and multimodal strengths; improved coding focus.
  - Evidence: Google/DeepMind posts highlighting state‑of‑the‑art reasoning; coding improvements [8].
  - Use for: Long doc/code summarization, design discussions, planning.

---

## Quick Selection by Use Case

| Task | Suggested Models | Notes |
|------|-------------------|-------|
| New feature (greenfield) | Qwen 3 Coder, Grok Code Fast 1 | Fast iterations; cost‑aware |
| Bug fix (targeted) | Claude 3.5/3.7 Sonnet, Qwen 3 Coder | Strong retrieval + precise edits |
| Refactor (no behavior change) | Claude 3.5/3.7 Sonnet, o4‑mini | Ask for tests; small diffs |
| Code review | Claude 3.5/3.7 Sonnet | Review narrative and risk analysis |
| Large context summarization | Gemini 2.5 Pro | Long docs/specs/designs |
| Agentic workflows (tools) | Claude 3.5/3.7 Sonnet, Grok Code Fast 1 | Pairs well with Cascade tools |

---

## Tips

- **Benchmark fit**: Prefer SWE‑bench Verified and LiveCodeBench for repo‑level coding; use HumanEval+/MBPP+ for function‑level generation.
- **Iterate**: Start with faster/cost‑efficient models; escalate to heavier reasoning only when needed.
- **Guardrails**: Always run tests/linters after edits; keep diffs small and revertible.
- **Context**: Use @‑mentions and Planning Mode to keep tasks scoped and reproducible.

---

## Sources
- [1] Anthropic: Claude 3.5 Sonnet — 49% on SWE‑bench Verified — https://www.anthropic.com/research/swe-bench-sonnet
- [2] Anthropic: Claude 3.5 Sonnet (HumanEval 93.7%, coding improvements) — https://www.anthropic.com/news/github-copilot
- [3] xAI: Grok Code Fast 1 — 70.8% on SWE‑bench Verified (internal harness) — https://x.ai/news/grok-code-fast-1
- [4] Qwen2.5‑Coder Technical Report — https://arxiv.org/pdf/2409.12186
- [5] LiveCodeBench Leaderboard — https://livecodebench.github.io/leaderboard.html
- [6] EvalPlus HumanEval+ Leaderboard — https://evalplus.github.io/leaderboard.html
- [7] OpenAI: Introducing o3 and o4‑mini (reasoning‑focused; AIME) — https://openai.com/index/introducing-o3-and-o4-mini/
- [8] Google/DeepMind: Gemini 2.5 Pro (reasoning and coding focus) — https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
