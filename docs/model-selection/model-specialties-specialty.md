---
description: "Understand AI model specialties in Windsurf. Learn which models excel at different tasks like coding, reasoning, and creative work."
keywords: ["model specialties", "AI capabilities", "Windsurf", "model comparison", "Cascade", "performance", "specialization"]
image: "/img/docusaurus-social-card.jpg"
---

# By Specialty

:::info Document Information
**Last Updated:** October 2025  
**Note:** AI models and their capabilities evolve rapidly. This information reflects the state of available models at the time of writing. Always check for the latest model releases and benchmarks.
:::

Selections focus on capability fit; include public benchmark evidence where available. Benchmarks vary by setup; treat as directional.

---

## Code (implementation, refactors, tooling)
- **Anthropic Claude 3.5 Sonnet**
  - Highlights: Strong agentic coding; pairs well with tool use.
  - Evidence: 49% on SWE-bench Verified (state-of-the-art at time of post) [1]; 93.7% HumanEval (class-leading at time of post) [2].
  - Use for: Complex refactors, real-world issue resolution, reviews.
- **xAI Grok Code Fast 1**
  - Highlights: Optimized for agentic coding speed with competitive quality.
  - Evidence: 70.8% on SWE-bench Verified (internal harness; reported by xAI) [3].
  - Use for: Fast iterations, prototyping, tool-driven edits.
- **Qwen 2.5/3 Coder (family)**
  - Highlights: Strong open-source coder family; diverse sizes and low-latency options.
  - Evidence: Technical report shows solid HumanEval/MBPP, improvements across sizes [4]; competitive open-source standings on LiveCodeBench [5].
  - Use for: Cost-sensitive or open-source pipelines; rapid local workflows.

## Chat (technical Q&A, explanations)
- **Claude 3.5/3.7 Sonnet**
  - Highlights: Strong general reasoning and clarity; good at explaining tradeoffs.
  - Evidence: Vendor reports of leading scores across standard reasoning benchmarks; sustained real-world traction [2].
  - Use for: Design discussions, code explanations, review narratives.
- **OpenAI o4-mini / o3**
  - Highlights: Reasoning-focused models with tool access; strong on difficult benchmarks per vendor [7].
  - Evidence: OpenAI reports top AIME 2024/2025 results; positioned for math/coding/tool use [7].
  - Use for: Reasoning-heavy chat, multi-step guidance.
- **Gemini 2.5 Pro**
  - Highlights: Long-context, multimodal strengths; good for large input discussions.
  - Evidence: Google reports state-of-the-art reasoning; improved coding focus [8].
  - Use for: Summarizing long docs/code, broad technical Q&A.

## Planning (long-horizon reasoning, orchestration)
- **Claude 3.7 Sonnet (Thinking)**
  - Highlights: Deliberate variants excel at stepwise planning and breakdowns.
  - Evidence: Vendor updates highlight planning improvements over 3.5 [2].
  - Use for: Complex plans, risk analysis, staged refactors.
- **OpenAI o3 / o4-mini**
  - Highlights: Reasoning models with tool access; good for orchestration prompts.
  - Evidence: OpenAI reports strong performance on reasoning benchmarks [7].
  - Use for: Multi-phase work, dependency mapping, agentic workflows.
- **Qwen 3 (large or MoE variants)**
  - Highlights: Competitive reasoning in open-source; flexible sizes.
  - Evidence: Community and leaderboard results (e.g., LiveCodeBench) [5].
  - Use for: Open-source-first planning pipelines.

## Design & Documentation (APIs, READMEs, specs)
- **Claude 3.5/3.7 Sonnet**
  - Highlights: Clear structure and rationale; excels at design tradeoffs.
  - Evidence: Strong coding+reasoning pairing; broad practitioner reports [2].
  - Use for: API design notes, ADRs, review summaries.
- **Gemini 2.5 Pro**
  - Highlights: Handles long inputs and varied formats well; strong summarization.
  - Evidence: Long-context and reasoning claims in official posts [8].
  - Use for: Comprehensive docs, design briefs, long-context edits.
- **Qwen 2.5/3 (medium reasoning)**
  - Highlights: Balanced drafting/iteration; good option in OSS stacks.
  - Evidence: Technical reports and community evaluations [4][5].
  - Use for: READMEs, migration guides, change logs.

---

## Tips
- **Match model to task stage**: Plan → Implement → Review may benefit from switching models.
- **Benchmark fit**: Prefer SWE-bench Verified and LiveCodeBench for real-world coding signal; use HumanEval+/MBPP+ for function-level generation.
- **Tool use**: For Cascade tasks, favor models with strong agentic coding/tool-calling reports.

---

## Sources
- [1] Anthropic: Claude 3.5 Sonnet — 49% on SWE-bench Verified (post) — https://www.anthropic.com/research/swe-bench-sonnet
- [2] Anthropic: Claude 3.5 Sonnet (HumanEval 93.7%, coding improvements) — https://www.anthropic.com/news/github-copilot
- [3] xAI: Grok Code Fast 1 — 70.8% on SWE-bench Verified (internal harness) — https://x.ai/news/grok-code-fast-1
- [4] Qwen2.5-Coder Technical Report — https://arxiv.org/pdf/2409.12186
- [5] LiveCodeBench Leaderboard — https://livecodebench.github.io/leaderboard.html
- [6] EvalPlus HumanEval+ Leaderboard — https://evalplus.github.io/leaderboard.html
- [7] OpenAI: Introducing o3 and o4-mini (reasoning-focused; AIME) — https://openai.com/index/introducing-o3-and-o4-mini/
- [8] Google/DeepMind: Gemini 2.5 Pro (reasoning and coding focus) — https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
