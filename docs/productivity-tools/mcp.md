---
description: "Learn how to use Model Context Protocol (MCP) to connect Cascade AI with external tools and services for enhanced productivity."
keywords: ["MCP", "Model Context Protocol", "Cascade", "external tools", "integration", "Windsurf", "context"]
image: "/img/docusaurus-social-card.jpg"
---

# MCP (Model Context Protocol)

Get productive by connecting Cascade to external tools and services via MCP.

## Introduction
- **What it is**: MCP lets Cascade call tools exposed by MCP servers (e.g., GitHub, Figma, or your own services) to read data or perform actions.
- **Why it matters**: Brings authoritative context and automations into your IDE (fewer tabs, faster decisions, higher code quality).
- **Scope**: Windsurf supports MCP server tools and resources (not prompts).

## Settings
- **Install servers**: Use the Plugin Store (Cascade panel → Plugins) or configure `~/.codeium/windsurf/mcp_config.json`.
- **Transports**: `stdio` and `http`. For HTTP, include `serverUrl` like `https://<your-server-url>/mcp`.
- **Examples**:
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "<TOKEN>" }
    },
    "figma": { "serverUrl": "https://<your-server-url>/mcp" }
  }
}
```
- **Enable/disable tools**: Per‑plugin tool toggles; curate to keep only what you need.
- **Limits**: Up to 100 MCP tools enabled at once; more tools can add noise/latency.
- **Teams/Admins**: Admin portal can enable MCP and whitelist allowed servers. Once any server is whitelisted, all non‑whitelisted servers are blocked.

## Do’s
- **Curate minimal toolsets**: Enable only tools needed for current work to improve accuracy and speed.
- **Use least‑privilege tokens**: Scope access tightly; prefer read‑only where possible.
- **Keep secrets in env**: Provide credentials via `env` in `mcp_config.json`, never in prompts.
- **Name servers clearly**: Use descriptive names to reduce misuse and review friction.
- **Test configs**: Verify server connectivity and auth in a safe repo before production work.
- **Document workflows**: Add short usage notes/checklists per server for your team.

## Don’ts
- **Don’t auto‑enable everything**: Large, unfocused toolsets slow Cascade and dilute results.
- **Don’t embed secrets in chat**: Use environment variables and secret stores.
- **Don’t ignore admin regex rules**: Whitelist patterns are case‑sensitive; invalid patterns deny access.
- **Don’t assume support for prompts**: Windsurf supports MCP tools/resources, not prompts.

## Tips
- **Refresh after install**: Press the refresh button after adding a plugin/server.
- **HTTP servers**: Ensure the `/mcp` path and CORS/network are correct; update to latest app versions when required (e.g., Figma Dev Mode).
- **Traceability**: Ask Cascade to summarize tool calls (what it read/changed) to speed reviews.
- **Cost/speed**: Fewer, focused tools and good naming improve retrieval quality and response time.
- **Team safety**: Use whitelisting for approved servers and audit logs when troubleshooting access.

## Suggested MCP servers for this project
Verify availability and requirements before enabling:
- **GitHub MCP server**: Interact with repositories (issues/PRs/content) with proper PAT scopes.
- **Figma Dev Mode MCP server**: Pull design specs/assets via the `/mcp` endpoint.
- **Custom internal HTTP MCP server**: Expose your project’s APIs (read‑only first) for specs, schemas, deploy metadata, or feature flags.

See the official MCP server reference and galleries to discover additional servers:
- Repository: https://github.com/modelcontextprotocol/servers
- Catalog: https://opentools.com/
