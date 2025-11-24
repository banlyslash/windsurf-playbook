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

## Common MCP Servers
Verify availability and requirements before enabling:

### Development & DevOps
- **GitHub MCP server**: Repository management and automation
  - Create, merge, and close pull requests
  - Manage issues, comments, and labels
  - Read and update files within repositories
  - Trigger and monitor CI/CD workflows
  - Requires: GitHub Personal Access Token with appropriate scopes

- **Git MCP server**: Local repository operations
  - Read, search, and manipulate Git repositories
  - View commit history and diffs
  - Manage branches and tags
  - Stage and commit changes

- **Docker MCP server**: Container lifecycle management
  - List, start, stop, and remove containers
  - Manage images and volumes
  - Access real‑time container logs
  - Inspect container runtime state

- **Sentry MCP server**: Error tracking and performance monitoring
  - Retrieve and analyze error reports and stack traces
  - Inspect performance metrics
  - Monitor application health and issue trends
  - Categorize and assign issues

### Documentation & Collaboration

- **Atlassian MCP server**: Complete Atlassian ecosystem integration
  - **Jira capabilities**:
    - Create, update, and search issues across all projects
    - Manage issue workflows and transitions (e.g., move from "In Progress" to "Done")
    - Add comments, attachments, and watchers to issues
    - Assign issues to team members and set priorities
    - Create and manage sub‑issues and epic hierarchies
    - Query issues using JQL (Jira Query Language) for advanced filtering
    - Access issue metadata, custom fields, and project configurations
    - Link issues and manage dependencies between tasks
    - Bulk update issues and automate repetitive workflows
  - **Confluence capabilities**:
    - Create and update pages with rich content (markdown support)
    - Search across all spaces using CQL (Confluence Query Language)
    - Manage page hierarchies and parent‑child relationships
    - Add inline and footer comments to pages
    - Attach files and images to documentation
    - Create and manage spaces for different teams or projects
    - Generate technical documentation from code or issue data
    - Track page versions and view change history
    - Collaborate on living documentation with real‑time updates
  - **Bitbucket capabilities** (if supported):
    - Browse repositories and file contents
    - Create and review pull requests
    - Manage branch permissions and workflows
    - Access commit history and diffs
    - Integrate code changes with Jira issues
  - **Cross‑product workflows**:
    - Link Jira issues to Confluence pages for full context
    - Reference code commits from Bitbucket in Jira tickets
    - Auto‑generate release notes from Jira issues in Confluence
    - Track development progress across all three platforms
    - Maintain single source of truth for project documentation
- **Notion MCP server**: Technical documentation and specs
  - Generate PRDs, tech specs, and release notes
  - Manage project documentation and databases
  - Search workspace content for quick answers
  - Track project progress automatically
### Data & Databases
- **MongoDB MCP server**: NoSQL database operations
  - Connect to MongoDB and Atlas instances
  - Execute structured queries
  - Perform data manipulation operations
  - Create and retrieve documents

- **Supabase MCP server**: PostgreSQL database and backend
  - Execute structured queries against database
  - Perform data manipulation
  - Retrieve real‑time data
  - Interact with serverless functions

- **Filesystem MCP server**: Local file operations
  - Secure file operations with configurable access controls
  - Read and write files
  - Directory traversal and management
  - File search capabilities

### AI & Search
- **Memory MCP server**: Persistent knowledge graph
  - Knowledge graph‑based persistent memory system
  - Store and retrieve contextual information
  - Build long‑term context for AI agents
  - Maintain relationships between concepts

- **Vectara MCP server**: Semantic search and RAG
  - Perform semantic searches on unstructured data
  - Retrieve contextual information for RAG
  - Manage and query private, proprietary data
  - Index documents and data sources

- **Pinecone MCP server**: Vector database for AI memory
  - Perform vector searches for semantic similarity
  - Store and retrieve contextual data
  - Build persistent memory layer for AI agents
  - Manage vector indexes

### Testing & Automation
- **Playwright MCP server**: Web browser automation
  - Navigate to specific URLs and interact with pages
  - Fill out forms and submit data
  - Take screenshots of web pages
  - Simulate user interactions like clicks and keystrokes
  - Automate end‑to‑end testing

### Utilities
- **Fetch MCP server**: Web content retrieval
  - Fetch web content and convert for efficient LLM usage
  - Extract structured data from web pages
  - Handle various content types

### Design & Assets
- **Figma Dev Mode MCP server**: Design specs and assets
  - Pull design specs and assets via the `/mcp` endpoint
  - Access component properties
  - Export design tokens

See the official MCP server reference and galleries to discover additional servers:
- Repository: https://github.com/modelcontextprotocol/servers
- Catalog: https://opentools.com/
