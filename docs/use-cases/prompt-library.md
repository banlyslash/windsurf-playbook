---
description: "A comprehensive collection of reusable prompts for Windsurf Cascade, organized by category for quick reference and maximum productivity."
keywords: ["prompt library", "Windsurf prompts", "Cascade prompts", "prompt templates", "coding prompts", "AI prompts", "development prompts"]
image: "/img/docusaurus-social-card.jpg"
---

# Prompt Library

## Introduction

This prompt library is a curated collection of reusable prompts extracted from across the Windsurf documentation. These prompts are battle-tested and designed to help you get the most out of Cascade AI. Use them as-is or adapt them to your specific needs.

**How to use this library:**
- Copy prompts and replace placeholders like `[PLACEHOLDER]` with your specific values
- Combine prompts for complex workflows
- Save frequently used prompts as Workflows in `.windsurf/workflows/`
- Share effective prompts with your team

---

## Project Setup & Initialization

### Configure Development Tools
```
Configure ESLint, Prettier, husky, and lint-staged with recommended
best practices for [framework].
```

### Generate Project README
```
Analyze this project and create a professional README.md file with
usage, commands, and folder structure.
```

### Create Convention File
```
Based on the README.md, eslint config, and folder structure, create a
convention.md documenting coding rules, naming standards, and project
structure.
```

### Setup Project for Team
```
@project-conventions.md Help me set up this project for a new team member.
Include installation steps, environment setup, and common commands.
```

---

## Feature Development

### Add New Feature
```
@project-conventions.md I need to add [feature description]. 
Please analyze the existing code and implement this following our patterns.
```

### Create Component
```
@project-conventions.md Create a new [ComponentName] component that:
- Accepts [props list]
- Handles [functionality]
- Follows our component structure
```

### Create Reusable Component
```
@convention.md help me create a reusable component under
modules/common/component called [ComponentName] which use [libraries].
The component should accept: [props] as props
```

### API Integration
```
@project-conventions.md Create a service function to call the [endpoint-name] API:
- Method: POST/GET/PUT/DELETE
- Request payload: [describe]
- Response handling: [describe]
- Error handling per our standards
```

### Implement Feature from Plan
```
Follow the plan @[PLAN_FILE] and implement accurately. Just this nothing else
```

---

## MCP Workflow Integration

### Phase 1: Initial Planning with Jira
```
I want to work on this task [JIRA_TICKET_URL], use @atlassian to get task 
description and acceptance criteria. Think deeply and create a plan in markdown 
at [LOCATION] and don't code anything. This plan is to be given to a coding 
agent to then implement the story.
```

### Phase 2: Refine Plan with Codebase Context
```
This is an extended feature for [FEATURE_AREA], check the existing implementation 
in backend and frontend and update the plan accordingly.
```

### Phase 3: Debugging with Precise Location
```
[COMPONENT] [FILE_PATH] line [LINE_NUMBER], [ERROR_MESSAGE]
```

**Example:**
```
frontend src/components/leave/LeaveBalanceCardWithAPI.tsx line 133, 
Cannot read properties of undefined (reading 'border')
```

### Phase 4: Create Pull Requests
```
checkout a new branch and create pull request for [REPOSITORIES]
```

**Example:**
```
checkout a new branch and create pull request for both backend and frontend
```

### Phase 5: Address Review Comments
```
Fetch review comments from PR #[NUMBER] and help me address them
```

```
Implement the changes suggested by [REVIEWER] in PR #[NUMBER]
```

### Phase 6: Merge and Update Jira
```
Merge PR #[NUMBER] using [MERGE_METHOD]
```

```
Update [TICKET-ID] status to "[STATUS]" and add comment with PR links
```

---

## Jira Revo AI + Windsurf Workflow

### Requirement Analysis
```
Analyze this feature requirement and break it down into technical components
```

```
What are the key technical challenges in implementing this feature?
```

### Complexity Assessment
```
Estimate the complexity and effort required for this feature
```

### Identify Dependencies
```
What existing systems or components will this feature interact with?
```

### Gather Technical Context
```
What technical documentation should I review before implementing this feature?
```

### Find Similar Features
```
Are there any similar features already implemented that I can reference?
```

### Understand Architecture
```
How does this feature fit into our current architecture?
```

### Design Pattern Suggestion
```
Can you suggest a design pattern or approach for implementing this feature?
```

### Create Implementation Plan
```
Let's create a detailed implementation plan for this feature based on the requirements and context
```

### Explore Existing Code
```
Show me how similar functionality is implemented elsewhere in our codebase
```

### Implementation Assistance
```
Help me implement [specific component] according to our plan
```

---

## Debugging & Bug Fixes

### Fix Bug
```
@project-conventions.md There's a bug in [file] where [description]. 
Please fix it without changing other functionality.
```

### Fix Bug with Context
```
@project-conventions.md Fix the issue in @[file-path] where [describe bug].
Maintain all existing functionality and add tests.
```

### Trace Execution
```
I'm trying to understand why this recursive function isn't working correctly.
Can you trace through its execution step by step with the input [example]?

[code snippet]
```

### Request Multiple Solutions
```
My [component] is failing with "[error]" errors sometimes but not always.
Here's the code:

[code snippet]

What are 3 possible causes of this intermittent issue, and how would you fix each one?
```

### Debug with Full Context
```
I have a [language] function that [purpose]. 
When I run it with [input], I get the error:
"[error message]"

Here's my function:

[code snippet]

It should return [expected output] for the example input. What's causing the error and how can I fix it?
```

---

## Code Review & Quality

### Code Review Request
```
Review this code for potential issues and suggest improvements 
based on our project conventions.
```

### Self-Review with Windsurf
```
Review this implementation against our requirements and best practices
```

### Check Code Quality
```
Identify any potential performance, security, or maintainability issues in this code
```

### Verify Test Coverage
```
Are there any edge cases or scenarios we haven't tested?
```

### Documentation Review
```
Review our documentation for completeness and clarity
```

---

## Refactoring

### Refactor Code
```
@project-conventions.md Refactor @[file-path] to:
- Improve readability
- Extract reusable logic
- Maintain current behavior
- Add proper TypeScript types
```

### Extract Reusable Logic
```
Analyze @[file-path] and identify opportunities to extract reusable functions or components.
Implement the refactoring while maintaining all existing functionality.
```

### Improve Code Structure
```
Review the structure of @[file-path] and suggest improvements for:
- Separation of concerns
- Code organization
- Naming conventions
- Design patterns
```

---

## Testing

### Generate Unit Tests
```
@project-conventions.md Generate unit tests for @[file-path] covering:
- Happy path scenarios
- Edge cases
- Error handling
```

### Create Test Plan
```
Create a comprehensive test plan for [feature] that includes:
- Unit tests
- Integration tests
- Edge cases
- Performance considerations
```

### Test Coverage Analysis
```
Analyze the test coverage for @[file-path] and identify:
- Untested code paths
- Missing edge cases
- Areas needing additional tests
```

---

## Documentation

### Add JSDoc Comments
```
@project-conventions.md Add JSDoc comments to @[file-path] explaining:
- Function purpose
- Parameters
- Return values
- Usage examples
```

### Generate API Documentation
```
Generate comprehensive API documentation for @[file-path] including:
- Endpoint descriptions
- Request/response formats
- Authentication requirements
- Error codes and handling
- Usage examples
```

### Update README
```
Update the README.md to reflect recent changes in:
- [feature/component]
- Installation steps
- Configuration options
- Usage examples
```

---

## Planning Mode Prompts

### Feature Implementation Planning
```
/planning

Create a detailed plan to implement [feature] including:
- Component breakdown
- Dependency identification
- Implementation sequence
- Testing strategy
```

### Code Refactoring Strategy
```
/planning

Plan a refactoring strategy for [component/module] that addresses:
- Technical debt identification
- Incremental improvement steps
- Backward compatibility considerations
- Regression testing approach
```

### Performance Optimization
```
/planning

Create an optimization plan for [component] covering:
- Bottleneck identification
- Optimization prioritization
- Measurement methodology
- Verification approach
```

### Database Schema Migration
```
/planning

Plan a database schema migration for [changes] including:
- Current schema analysis
- Target schema design
- Data migration steps
- Rollback strategy
```

---

## Architecture & Design

### Architecture Assessment
```
Analyze the current architecture of [component/module] and provide:
- Strengths and weaknesses
- Scalability considerations
- Maintainability concerns
- Improvement recommendations
```

### Design Pattern Selection
```
What design pattern would be most appropriate for [use case]?
Consider:
- Current architecture
- Team expertise
- Maintenance requirements
- Performance implications
```

### API Design
```
Design a RESTful API for [feature] including:
- Endpoint specification
- Authentication/authorization design
- Error handling strategy
- Documentation approach
```

---

## Performance & Optimization

### Performance Analysis
```
Analyze the performance of @[file-path] and identify:
- Bottlenecks
- Memory leaks
- Inefficient algorithms
- Optimization opportunities
```

### Optimize Code
```
Optimize @[file-path] for:
- Execution speed
- Memory usage
- Network efficiency
- User experience

Maintain all existing functionality and add performance tests.
```

---

## Security

### Security Review
```
Review @[file-path] for security vulnerabilities including:
- Input validation
- Authentication/authorization
- Data sanitization
- SQL injection risks
- XSS vulnerabilities
```

### Implement Security Feature
```
Implement [security feature] following security best practices:
- Input validation
- Secure data handling
- Error handling without information leakage
- Logging for audit trails
```

---

## Team Collaboration

### Onboarding Documentation
```
Create onboarding documentation for new team members covering:
- Project setup
- Development workflow
- Coding standards
- Common tasks and prompts
- Troubleshooting guide
```

### Create Prompt Library for Team
```
Based on our project conventions and common tasks, create a prompt library
document that team members can reference for:
- Component creation
- API integration
- Bug fixes
- Testing
- Documentation
```

---

## Tips for Effective Prompts

### 1. Provide Context
Always include relevant context:
- Programming language and framework
- Project conventions (@project-conventions.md)
- Related files (@file-path)
- Expected behavior

### 2. Be Specific
Clearly state:
- What you want to achieve
- Any constraints or requirements
- Expected output format
- Success criteria

### 3. Use @-Mentions
Reference files and rules:
- `@file-path` - Reference specific files
- `@project-conventions.md` - Include project rules
- `@TODO.md` - Reference plan files

### 4. Break Down Complex Tasks
For complex tasks:
- Use Planning Mode (`/planning`)
- Create step-by-step plans
- Implement incrementally
- Test frequently

### 5. Iterate and Refine
- Start with a basic prompt
- Review the output
- Refine your prompt based on results
- Save successful prompts for reuse

---

## Creating Custom Prompts

### Template Structure
```
[Context] - What are you working on?
[Goal] - What do you want to achieve?
[Current State] - What exists now? (if applicable)
[Specific Request] - What exactly do you need?
[Constraints] - Any limitations or requirements?
[Examples] - Sample inputs/outputs (if applicable)
```

### Example Custom Prompt
```
Context: Working on a React TypeScript project with Material-UI
Goal: Create a reusable data table component
Current State: We have basic table components but no advanced features
Specific Request: Create a DataTable component with:
- Sorting
- Filtering
- Pagination
- Row selection
Constraints: Must follow our component structure in @project-conventions.md
Examples: Similar to the UserTable component but more generic
```

---

## Saving Prompts as Workflows

To save frequently used prompts as workflows:

1. Create a file in `.windsurf/workflows/[workflow-name].md`
2. Add your prompt template
3. Invoke with `/[workflow-name]` in Cascade

**Example Workflow File:**
```markdown
# Feature Implementation Workflow

## Steps:
1. Analyze requirements
2. Check existing implementation
3. Create implementation plan
4. Implement feature
5. Write tests
6. Create documentation

## Prompt:
@project-conventions.md Implement [feature] following these steps:
1. Analyze existing code for similar patterns
2. Create detailed implementation plan
3. Implement with proper error handling
4. Add comprehensive tests
5. Update documentation
```

---

## Related Documentation

- [Prompt Engineering for Coding](./prompt-engineering-for-coding.md) - Detailed guide on crafting effective prompts
- [Workflows](../productivity-tools/workflows.md) - Creating reusable workflow templates
- [Planning Mode](../productivity-tools/planning-mode.md) - Using Planning Mode effectively
- [MCP Workflow Integration](../productivity-tools/mcp-workflow-integration.md) - End-to-end development workflow
- [From Requirement to Code](./from-requirement-to-code.md) - Complete feature development workflow
