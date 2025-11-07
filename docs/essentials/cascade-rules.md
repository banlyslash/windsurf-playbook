---
description: "Learn how to create and manage Cascade Rules to enforce coding standards and project conventions. Guide Cascade AI with custom rules."
keywords: ["Rules", "Cascade", "code standards", "conventions", "Windsurf", "customization", "guidelines"]
image: "/img/docusaurus-social-card.jpg"
---

# Rules

## Introduction
Cascade Rules are persistent, developer‑defined guidelines that steer Cascade’s behavior across conversations and workspaces. Use rules to encode coding standards, review gates, and safety constraints so every action stays high‑quality and consistent.

## Setup (Where Rules Live)
- **Open**: Cascade → `Customizations` (top‑right slider) → `Rules` panel
- **Scope**:
  - `global_rules.md` → applies across all workspaces
  - `.windsurf/rules/` → workspace or subdirectory‑specific rules
- **Discovery**: Windsurf auto‑discovers `.windsurf/rules/` in the current workspace, subfolders, and up to the Git root. Duplicates are de‑duped.

## Do’s and Don’ts (Quality First)
- **Do** keep rules short, concrete, and action‑oriented
- **Do** use bullets/numbered lists or simple XML‑style tags to group related rules
- **Do** scope rules by folder when practices differ by module/service
- **Do** periodically prune outdated/duplicative rules
- **Don’t** write vague truisms (e.g., “write good code”); prefer enforceable guidance
- **Don’t** overload a single rule file with unrelated concerns; split by topic or layer
- **Don’t** include secrets, credentials, or environment‑specific values

## Tips (Productivity)
- **Pin + Rules**: Pin critical files/specs and add rules so Cascade always prioritizes them
- **Atomicity**: Ask Cascade for small, reviewable diffs; rules should reinforce atomic changes
- **Refactor safety**: Include “no behavior change” and test requirements in rules for refactors
- **Performance guardrails**: Encode complexity limits, memory thresholds, or API latency budgets
- **Formatting**: Let rules point to your formatter/linter; keep style debates out of prompts

## Suggested Rule Topics (Copy/Paste & Adapt)
- **Coding style & types**: language version, strict typing, naming, immutability, early‑returns
- **Testing**: unit test coverage targets, test structure, fixtures, fast vs. slow test gates
- **Error handling & logging**: no silent failures, structured logs, error boundaries, retries
- **Security**: input validation, secrets policy, dependency allow/deny lists, auth/ACL checks
- **API contracts**: DTO/schema ownership, backward compatibility, versioning, deprecation policy
- **Performance**: Big‑O expectations, pagination/streaming, caching policy, DB query limits
- **Database**: migration order, rollback plan, seed data rules, foreign keys/indexing policy
- **Frontend**: component boundaries, state management, accessibility, i18n, perf budgets
- **Backend**: service boundaries, idempotency, timeouts, circuit breakers, observability
- **CI/CD & PRs**: required checks, small PRs, commit message conventions, changelog requirements
- **Docs**: mandatory docstrings, README updates for public APIs, ADRs for major changes

---
Use rules with **@‑mentions**, **Pinned Context**, and **Planning Mode** to make Cascade both fast and reliably aligned to your standards.
