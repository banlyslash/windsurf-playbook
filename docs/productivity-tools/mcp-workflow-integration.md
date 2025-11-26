---
description: "Master the ideal development workflow using multiple MCP servers (GitHub and Atlassian) in Windsurf for seamless task management, implementation, and deployment."
keywords: ["MCP workflow", "GitHub MCP", "Atlassian MCP", "Jira integration", "development workflow", "Windsurf", "Cascade", "task management", "pull requests"]
image: "/img/docusaurus-social-card.jpg"
---

# MCP Workflow Integration

## Introduction
Combining multiple MCP servers creates a powerful, end-to-end development workflow in Windsurf. By integrating Atlassian (Jira) and GitHub MCP servers, you can seamlessly move from task planning to deployment without leaving your IDE. This workflow eliminates context switching, reduces manual overhead, and ensures traceability from requirements to production.

**Why it matters**: 
- **Single source of truth**: Pull task context directly from Jira tickets
- **Automated workflows**: Create PRs, request reviews, and merge—all via Cascade
- **Full traceability**: Link commits and PRs back to Jira tickets automatically
- **Reduced friction**: No tab switching between Jira, GitHub, and your IDE

## Prerequisites

### Required MCP Servers
1. **Atlassian MCP Server** - For Jira ticket management
2. **GitHub MCP Server** - For repository operations and PR management

### Configuration Setup

#### Atlassian MCP Server Configuration

Add the Atlassian server to your `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "atlassian": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-atlassian"],
      "env": {
        "ATLASSIAN_API_TOKEN": "<YOUR_ATLASSIAN_API_TOKEN>",
        "ATLASSIAN_DOMAIN": "<YOUR_DOMAIN>.atlassian.net",
        "ATLASSIAN_EMAIL": "<YOUR_EMAIL>"
      }
    }
  }
}
```

#### GitHub MCP Server Configuration

Choose one of the following options:

##### Option 1: Remote GitHub MCP Server (Recommended)

The remote server does **not require Docker** and uses GitHub's hosted MCP service:

```json
{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer <YOUR_GITHUB_PAT>"
      }
    }
  }
}
```

##### Option 2: Local GitHub MCP Server (Requires Docker)

The local server requires [Docker](https://www.docker.com/) to be installed and running:

```json
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_GITHUB_PAT>"
      }
    }
  }
}
```

**Prerequisites for local server**:
1. Install [Docker](https://www.docker.com/)
2. Ensure Docker is running
3. If you encounter pull errors, run `docker logout ghcr.io` to clear expired tokens

#### Complete Configuration Example

Here's a complete `mcp_config.json` with both servers (using remote GitHub server):

```json
{
  "mcpServers": {
    "atlassian": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-atlassian"],
      "env": {
        "ATLASSIAN_API_TOKEN": "<YOUR_ATLASSIAN_API_TOKEN>",
        "ATLASSIAN_DOMAIN": "<YOUR_DOMAIN>.atlassian.net",
        "ATLASSIAN_EMAIL": "<YOUR_EMAIL>"
      }
    },
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer <YOUR_GITHUB_PAT>"
      }
    }
  }
}
```

### Required Permissions

#### Atlassian API Token
- API token with read access to Jira projects
- [How to create an Atlassian API token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

#### GitHub Personal Access Token
- Personal Access Token with `repo`, `workflow`, and `pull_request` scopes
- **Guide**: [Creating a GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

**Quick steps to create GitHub PAT**:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give your token a descriptive name (e.g., "Windsurf MCP Server")
4. Select scopes: `repo`, `workflow`, `pull_request`
5. Click "Generate token" and copy it immediately (you won't see it again)
6. Store it securely in your `mcp_config.json`

## The Ideal Workflow

### Phase 1: Initial Planning with Jira Context

**Objective**: Import task requirements and acceptance criteria from Jira and create a comprehensive implementation plan.

**Prompt template**:
```
I want to work on this task [JIRA_TICKET_URL], use @atlassian to get task 
description and acceptance criteria. Think deeply and create a plan in markdown 
at [LOCATION] and don't code anything. This plan is to be given to a coding 
agent to then implement the story.
```

**What Cascade does**:
1. Fetches ticket details via Atlassian MCP (title, description, acceptance criteria)
2. Extracts technical requirements and dependencies
3. Analyzes the scope and complexity
4. Creates a comprehensive plan file (e.g., `TODO.md`) at specified location
5. Structures the plan with clear, actionable implementation steps

**Result**: A detailed implementation plan that serves as the single source of truth for the feature, ready to be handed off to implementation phase.

---

### Phase 2: Refining the Plan with Codebase Context

**Objective**: Update the plan based on existing codebase patterns and architecture to ensure consistency and reusability.

**Prompt template**:
```
This is an extended feature for [FEATURE_AREA], check the existing implementation 
in backend and frontend and update the plan accordingly.
```

**What Cascade does**:
1. Scans backend codebase for existing related code
2. Reviews frontend components and API integrations
3. Identifies reusable patterns, components, and utilities
4. Updates the plan with:
   - References to existing code that can be extended
   - Specific files that need modification
   - API endpoints to create or modify
   - Frontend components to update or create
   - Database schema changes if needed

**Key insight**: This step prevents reinventing the wheel and ensures consistency with existing architecture and coding patterns.

---

### Phase 3: Implementation Following the Plan

**Objective**: Execute the plan accurately without deviating from the agreed-upon approach.

**Prompt template**:
```
Follow the plan @[PLAN_FILE] and implement accurately. Just this nothing else
```

**What Cascade does**:
1. Reads the complete plan file (e.g., `@TODO.md`)
2. Implements changes step-by-step:
   - Backend API endpoints
   - Database models/migrations
   - Frontend components
   - API integration layer
   - Styling and UI updates
3. Follows existing code patterns and conventions
4. Adds appropriate error handling
5. Implements according to acceptance criteria

**Best practice**: Using `@[PLAN_FILE]` mention ensures Cascade has full context and implements exactly what was planned—nothing more, nothing less. This prevents scope creep and maintains focus.

---

### Phase 4: Debugging and Fixing Issues

**Objective**: Quickly identify and fix bugs with precise error information.

**Prompt template**:
```
[COMPONENT] [FILE_PATH] line [LINE_NUMBER], [ERROR_MESSAGE]
```

**Example**:
```
frontend src/components/leave/LeaveBalanceCardWithAPI.tsx line 133, 
Cannot read properties of undefined (reading 'border')
```

**What Cascade does**:
1. Navigates to the specific file and line
2. Analyzes the error context
3. Identifies the root cause (e.g., undefined object access)
4. Implements a fix with proper null checking or defensive programming
5. Verifies the fix doesn't break other parts of the component
6. Suggests adding similar checks to related code

**Tip**: Providing exact file paths and line numbers helps Cascade fix issues quickly and accurately. Include the full error message for better context.

---

### Phase 5: Creating Pull Requests

**Objective**: Create well-documented PRs for each repository with proper branching and commit messages.

**Prompt template**:
```
checkout a new branch and create pull request for [REPOSITORIES]
```

**Example**:
```
checkout a new branch and create pull request for both backend and frontend
```

**What Cascade does**:

**For each repository**:
1. Creates feature branch: `feature/[TICKET-ID]-[feature-name]-[repo]`
2. Commits all changes with semantic commit message:
   - Format: `feat([scope]): [description] for [TICKET-ID]`
   - Example: `feat(calendar): implement leave calendar API for SLM-2`
3. Pushes branch to remote
4. Creates PR via GitHub MCP with:
   - Title: `[TICKET-ID] [Feature Description]`
   - Description linking to Jira ticket
   - List of changes made
   - Testing notes
   - Dependencies (if applicable)

**Result**: Well-documented PRs ready for review, with clear traceability to the Jira ticket and proper branch naming conventions.

---

### Phase 6: Code Review and Iteration

**Objective**: Address review feedback and iterate on the implementation.

**Prompt templates**:
```
Fetch review comments from PR #[NUMBER] and help me address them
```

```
Implement the changes suggested by [REVIEWER] in PR #[NUMBER]
```

**What Cascade does**:
1. Fetches all review comments via GitHub MCP
2. Groups comments by file and priority
3. Implements suggested changes
4. Adds clarifying code comments where needed
5. Pushes additional commits to the PR
6. Optionally replies to review comments explaining the changes

**Best practice**: Keep review iterations focused and respond to all feedback systematically. Use Cascade to ensure consistency across multiple review rounds.

---

### Phase 7: Merge and Update Jira

**Objective**: Complete the development cycle by merging PRs and updating ticket status.

**Prompt templates**:
```
Merge PR #[NUMBER] using [MERGE_METHOD]
```

```
Update [TICKET-ID] status to "[STATUS]" and add comment with PR links
```

**What Cascade does**:
1. **Merge PRs** (after all checks pass):
   - Verifies CI/CD pipeline success
   - Confirms all review approvals
   - Merges using specified method (squash/merge/rebase)
   - Uses semantic commit message with ticket ID

2. **Update Jira ticket** via Atlassian MCP:
   - Changes status (e.g., "In Review" → "Done")
   - Adds comment with PR links
   - Includes deployment notes
   - Notifies ticket watchers

3. **Cleanup**:
   - Deletes feature branches
   - Updates related tickets if applicable

**Result**: Complete traceability from Jira ticket through implementation to production deployment.

---

## Complete Workflow Example

Here's a real-world example combining all phases:

```
Phase 1: Planning
> Using Atlassian MCP, fetch SHOP-789 and create a development plan

Phase 2: Review
> The plan looks good, but add a step for database indexing before the API changes

Phase 3: Implementation
> Create branch feature/SHOP-789-product-search from main
> [Implement features step by step]
> Commit with message: "feat(search): add Elasticsearch integration for SHOP-789"

Phase 4: Testing
> Run the test suite and check coverage
> [Fix any issues]
> Verify all acceptance criteria from SHOP-789 are met

Phase 5: Create PR
> Push feature/SHOP-789-product-search to origin
> Create PR from feature/SHOP-789-product-search to main with:
  - Title: "[SHOP-789] Implement product search with Elasticsearch"
  - Reviewers: @backend-team
  - Include link to Jira ticket and testing notes

Phase 6: Review
> Fetch review comments from PR #234 and help me address them
> [Make changes based on feedback]
> Reply to review comments explaining the changes

Phase 7: Merge
> Merge PR #234 using squash merge
> Update SHOP-789 to "Done" with comment: "Deployed in v2.3.0"
> Delete branch feature/SHOP-789-product-search
```

---

## Real-World Example: Leave Calendar Feature

This example demonstrates a complete workflow for implementing a leave calendar feature, from Jira ticket to production deployment.

### Context
- **Jira Ticket**: [SLM-2](https://slashdigital.atlassian.net/browse/SLM-2)
- **Project**: Siem Reap Docs (Full-stack application)
- **Scope**: Extended calendar feature with backend and frontend changes

### Ticket Description

The SLM-2 ticket requires implementing a leave calendar feature that displays employee leave and holiday information in a calendar view. The feature includes:

**Requirements**:
- Display holidays and leave events in a monthly calendar view
- Show different leave types with color-coded legends (Annual, Sick, Personal, Unpaid, Other, Holiday)
- Implement a "Holidays This Month" panel showing upcoming holidays with details
- Support navigation between months
- Integrate with existing leave balance API
- Ensure responsive design for mobile and desktop

**Acceptance Criteria**:
- Calendar displays current month with proper date grid
- Holidays are marked in red with event names
- Leave types are visually distinguishable using the legend
- Users can navigate to previous/next months
- Holiday details panel shows all holidays for the current month
- Calendar integrates with backend API for leave data
- UI matches existing design system and theme

**Visual Reference**:

![Leave Calendar Feature](/img/mcp-use-case.png)

*The calendar shows November 2025 with Water Festival holidays (Bon Om Touk) on Nov 4-6 and Independence Day on Nov 9. The bottom panel lists all holidays for the month with their dates and types.*

### Phase 1: Initial Planning with Jira Context

**Prompt used**:
```
I want to work on this task https://slashdigital.atlassian.net/browse/SLM-2, 
use @atlassian to get task description and acceptance criteria. Think deeply 
and create a plan in markdown at root of the siemreap-docs and don't code 
anything. This plan is to be given to a coding agent to then implement the story.
```

**What Cascade does**:
1. Fetches SLM-2 ticket details via Atlassian MCP
2. Extracts task description, acceptance criteria, and requirements
3. Analyzes the scope and technical requirements
4. Creates a comprehensive `TODO.md` file at the project root
5. Structures the plan with clear implementation steps

**Result**: A detailed implementation plan saved as `TODO.md` that serves as the single source of truth for the feature.

---

### Phase 2: Refining the Plan with Codebase Context

**Prompt used**:
```
This is an extended feature for calendar, check the existing implementation 
in backend and frontend and update the plan accordingly.
```

**What Cascade does**:
1. Scans backend codebase for existing calendar-related code
2. Reviews frontend calendar components and API integrations
3. Identifies reusable patterns and components
4. Updates `TODO.md` with:
   - References to existing code that can be extended
   - Specific files that need modification
   - API endpoints to create or modify
   - Frontend components to update or create
   - Database schema changes if needed

**Key insight**: This step prevents reinventing the wheel and ensures consistency with existing architecture.

---

### Phase 3: Implementation Following the Plan

**Prompt used**:
```
Follow the plan @TODO.md and implement accurately. Just this nothing else
```

**What Cascade does**:
1. Reads the complete `TODO.md` plan
2. Implements changes step-by-step:
   - Backend API endpoints
   - Database models/migrations
   - Frontend components
   - API integration layer
   - Styling and UI updates
3. Follows existing code patterns and conventions
4. Adds appropriate error handling
5. Implements according to acceptance criteria

**Best practice**: The `@TODO.md` mention ensures Cascade has full context and implements exactly what was planned, nothing more or less.

---

### Phase 4: Debugging and Fixing Issues

**Prompt used**:
```
frontend src/components/leave/LeaveBalanceCardWithAPI.tsx line 133, 
Cannot read properties of undefined (reading 'border')
```

**What Cascade does**:
1. Navigates to the specific file and line
2. Analyzes the error context
3. Identifies the root cause (undefined object access)
4. Implements a fix with proper null checking:
   ```typescript
   // Before: theme.palette.divider.border (error)
   // After: theme.palette?.divider?.border || 'default-value'
   ```
5. Verifies the fix doesn't break other parts of the component
6. Suggests adding similar null checks to related code

**Tip**: Providing exact file paths and line numbers helps Cascade fix issues quickly and accurately.

---

### Phase 5: Creating Pull Requests

**Prompt used**:
```
checkout a new branch and create pull request for both backend and frontend
```

**What Cascade does**:
1. **For Backend**:
   - Creates branch: `feature/SLM-2-leave-calendar-backend`
   - Commits all backend changes with message: `feat(calendar): implement leave calendar API for SLM-2`
   - Pushes to remote
   - Creates PR with:
     - Title: `[SLM-2] Implement Leave Calendar API`
     - Description linking to Jira ticket
     - List of API endpoints added
     - Testing notes

2. **For Frontend**:
   - Creates branch: `feature/SLM-2-leave-calendar-frontend`
   - Commits all frontend changes with message: `feat(calendar): add leave calendar UI for SLM-2`
   - Pushes to remote
   - Creates PR with:
     - Title: `[SLM-2] Add Leave Calendar UI`
     - Description linking to Jira ticket
     - Screenshots of new UI
     - Dependencies note (requires backend PR to be merged first)

**Result**: Two well-documented PRs ready for review, with clear traceability to the Jira ticket.

---

### Complete Prompt Sequence

Here's the full conversation flow for this feature:

```
1. Initial Planning (Planning Mode enabled)
   > I want to work on this task https://slashdigital.atlassian.net/browse/SLM-2, 
   > use @atlassian to get task description and acceptance criteria. Think deeply 
   > and create a plan in markdown at root of the siemreap-docs and don't code 
   > anything. This plan is to be given to a coding agent to then implement the story.

2. Plan Refinement
   > This is an extended feature for calendar, check the existing implementation 
   > in backend and frontend and update the plan accordingly.

3. Implementation
   > Follow the plan @TODO.md and implement accurately. Just this nothing else

4. Bug Fix
   > frontend src/components/leave/LeaveBalanceCardWithAPI.tsx line 133, 
   > Cannot read properties of undefined (reading 'border')

5. Pull Request Creation
   > checkout a new branch and create pull request for both backend and frontend

6. (Optional) Jira Update
   > Update SLM-2 status to "In Review" and add comment with PR links
```

---

### Key Takeaways from This Example

1. **Separation of concerns**: Planning phase is distinct from implementation phase
2. **Codebase awareness**: Checking existing implementation prevents duplication
3. **Single source of truth**: `TODO.md` serves as the contract between planning and implementation
4. **Precise debugging**: Specific file paths and line numbers lead to faster fixes
5. **Multi-repo coordination**: Handling backend and frontend PRs separately but cohesively
6. **Traceability**: Jira ticket ID (SLM-2) appears in branches, commits, and PRs

### Time Saved

**Traditional workflow**: 
- Manually read Jira ticket: 5 min
- Plan implementation: 20 min
- Context switch between Jira/IDE/GitHub: 10 min
- Create branches and PRs manually: 15 min
- **Total: ~50 minutes**

**MCP-powered workflow**:
- Automated planning with Jira context: 2 min
- Review and refine plan: 5 min
- Implementation (Cascade-assisted): Variable
- Automated PR creation: 2 min
- **Total: ~9 minutes overhead**

**Efficiency gain**: ~80% reduction in workflow overhead, allowing more focus on actual implementation.

---

## Do's for Code Quality

- **Link everything**: Always reference Jira ticket IDs in commits, PRs, and branch names
- **Validate requirements**: Cross-check implementation against Jira acceptance criteria
- **Automate quality gates**: Include linting, testing, and coverage checks in the workflow
- **Document decisions**: Use PR descriptions to explain technical choices
- **Test thoroughly**: Verify all acceptance criteria before creating PR
- **Review incrementally**: Address review comments promptly with clear explanations
- **Track progress**: Update Jira status as you move through workflow phases
- **Use semantic commits**: Follow conventional commit format with ticket references

## Don'ts for Code Quality

- **Don't skip planning**: Always pull Jira context before starting implementation
- **Avoid manual context switching**: Let MCP servers fetch information automatically
- **Don't merge without review**: Even with automated checks, human review is essential
- **Avoid vague PR descriptions**: Always include context, testing notes, and Jira links
- **Don't ignore CI failures**: Fix all pipeline issues before requesting review
- **Avoid force-pushing**: After PR creation, use additional commits for changes
- **Don't forget to update Jira**: Keep ticket status synchronized with PR state
- **Avoid hardcoding credentials**: Always use environment variables for API tokens

## Tips

- **Create workflow templates**: Save common prompts as Workflows (`.windsurf/workflows/`)
- **Use Planning Mode**: Enable it for complex tickets with multiple requirements
- **Batch operations**: Ask Cascade to perform multiple MCP operations in sequence
- **Leverage memories**: Store team conventions and PR templates as Cascade Rules
- **Automate repetitive tasks**: Create workflows for common operations (PR creation, status updates)
- **Monitor MCP limits**: Keep tool count under 100 for optimal performance
- **Use least-privilege tokens**: Scope API tokens to minimum required permissions
- **Document your workflow**: Share this process with your team for consistency

## Troubleshooting

### Common Issues

**Issue**: Atlassian MCP can't fetch Jira ticket
- **Solution**: Verify API token, domain, and email in `mcp_config.json`
- **Check**: Ensure you have read access to the Jira project

**Issue**: GitHub MCP fails to create PR
- **Solution**: Verify PAT has `repo` and `pull_request` scopes
- **Check**: Ensure branch is pushed to remote before creating PR

**Issue**: Planning Mode plan is too vague
- **Solution**: Ask Cascade to "break down step X into more detailed sub-steps"
- **Tip**: Provide additional context from Jira ticket comments

**Issue**: PR description missing key information
- **Solution**: Create a PR template in `.github/pull_request_template.md`
- **Tip**: Ask Cascade to "use the PR template and include testing notes"

## Advanced Patterns

### Multi-ticket Workflows
For epics spanning multiple tickets:
```
Using Atlassian MCP:
1. Fetch epic PROJ-100 and all linked tickets
2. Create a master plan showing dependencies
3. Prioritize tickets based on dependencies
4. Track progress across all tickets
```

### Automated Status Updates
Keep Jira synchronized with GitHub:
```
When PR #123 is merged:
1. Update PROJ-456 status to "In QA"
2. Add comment with PR link and deployment notes
3. Notify watchers of the ticket
```

### Cross-repository Changes
For changes spanning multiple repos:
```
1. Fetch PROJ-789 requirements
2. Create feature branches in repo-api and repo-frontend
3. Implement changes in both repos
4. Create linked PRs with cross-references
5. Merge in dependency order
```

## Related Documentation

- [MCP (Model Context Protocol)](./mcp.md) - MCP server setup and configuration
- [Planning Mode](./planning-mode.md) - Detailed planning mode usage
- [Workflows](./workflows.md) - Creating reusable workflow templates
- [Cascade Rules](../essentials/cascade-rules.md) - Storing team conventions

## Additional Resources

- [Atlassian MCP Server Documentation](https://github.com/atlassian/atlassian-mcp-server)
- [GitHub MCP Server Documentation](https://github.com/github/github-mcp-server) - Official GitHub MCP Server
- [GitHub MCP Server Guide](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server) - Official GitHub Docs
- [Model Context Protocol Official Site](https://modelcontextprotocol.io/)
- [MCP Servers Repository](https://github.com/modelcontextprotocol/servers)
- [MCP Example Servers](https://modelcontextprotocol.io/examples)
- [MCP Server Catalog](https://opentools.com/)
- [Conventional Commits](https://www.conventionalcommits.org/) - Commit message format
- [MCP Workflow Integration Video Tutorial](https://www.youtube.com/watch?v=HQJ3A8p6JBY) - Video walkthrough of MCP workflow integration
