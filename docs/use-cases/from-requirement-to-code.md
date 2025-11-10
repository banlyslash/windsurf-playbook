---
description: "A comprehensive workflow for building features using Jira Revo AI and Windsurf, from requirement analysis to implementation and review."
keywords: ["Jira Revo AI", "Windsurf", "feature development", "workflow", "requirements", "planning", "implementation", "review", "best practices"]
image: "/img/docusaurus-social-card.jpg"
---

# From Requirement to Code: Jira Revo AI + Windsurf Workflow

## Introduction

This document outlines a standardized workflow for developing features using Jira Revo AI and Windsurf. This approach streamlines the development process from initial requirements to final implementation, ensuring consistency, quality, and efficiency in your journey from requirement to code.

The workflow follows six key phases:
1. **Requirement** - Understanding the feature request
2. **Analysis** - Breaking down the requirement with Jira Revo AI
3. **Context** - Gathering necessary information
4. **Planning** - Creating a detailed implementation plan with Windsurf
5. **Implementation** - Writing and testing code
6. **Review** - Ensuring quality and completeness

## Workflow Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│ Requirement │────>│  Analysis   │────>│   Context   │────>│  Planning   │────>│Implementation│────>│   Review    │
│  (Jira)     │     │ (Revo AI)   │     │ (Revo AI)   │     │ (Windsurf)  │     │ (Windsurf)   │     │ (Windsurf)  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘     └──────────────┘     └─────────────┘
```

## Detailed Workflow

### Phase 1: Requirement

**Tool: Jira**

1. **Access the Jira ticket** containing the feature request
2. **Read the requirement thoroughly** to understand:
   - What functionality is needed
   - Who the end users are
   - Expected behavior and outcomes
   - Any constraints or dependencies
3. **Clarify any ambiguities** with stakeholders if necessary
4. **Note acceptance criteria** that will determine when the feature is complete

### Phase 2: Analysis

**Tool: Jira Revo AI**

1. **Open the Jira ticket** and locate the Revo AI panel
2. **Ask Revo AI to analyze the requirement** with prompts like:
   ```
   "Analyze this feature requirement and break it down into technical components"
   ```
   or
   ```
   "What are the key technical challenges in implementing this feature?"
   ```
3. **Request a complexity assessment** to understand the scope:
   ```
   "Estimate the complexity and effort required for this feature"
   ```
4. **Identify dependencies** by asking:
   ```
   "What existing systems or components will this feature interact with?"
   ```
5. **Document the analysis** in the Jira ticket for reference

### Phase 3: Context

**Tool: Jira Revo AI**

1. **Gather technical context** by asking Revo AI:
   ```
   "What technical documentation should I review before implementing this feature?"
   ```
2. **Identify similar features** for reference:
   ```
   "Are there any similar features already implemented that I can reference?"
   ```
3. **Understand architectural implications**:
   ```
   "How does this feature fit into our current architecture?"
   ```
4. **Generate code examples or patterns** if applicable:
   ```
   "Can you suggest a design pattern or approach for implementing this feature?"
   ```
5. **Export the context** to share with Windsurf in the next phase

### Phase 4: Planning

**Tool: Windsurf**

1. **Open Windsurf** and create a new conversation
2. **Share the context** from Jira Revo AI by pasting it or summarizing key points
3. **Request a planning session**:
   ```
   "Let's create a detailed implementation plan for this feature based on the requirements and context"
   ```
4. **Use Windsurf's planning mode** to break down the implementation:
   ```
   "/planning"
   ```
5. **Define tasks and subtasks** with Windsurf's assistance
6. **Identify potential challenges** and mitigation strategies
7. **Create a test plan** for verifying the feature works correctly
8. **Review and refine the plan** until it's comprehensive and actionable

### Phase 5: Implementation

**Tool: Windsurf**

1. **Begin implementation** following the plan created in Phase 4
2. **Use Windsurf for code generation** by providing clear instructions:
   ```
   "Help me implement [specific component] according to our plan"
   ```
3. **Leverage Windsurf's code exploration** to understand existing codebase:
   ```
   "Show me how similar functionality is implemented elsewhere in our codebase"
   ```
4. **Implement incrementally** with frequent feedback from Windsurf
5. **Address edge cases** identified during planning
6. **Write unit tests** with Windsurf's assistance
7. **Debug issues** collaboratively with Windsurf
8. **Document the code** as you implement

### Phase 6: Review

**Tool: Windsurf**

1. **Conduct a self-review** with Windsurf:
   ```
   "Review this implementation against our requirements and best practices"
   ```
2. **Check for code quality issues**:
   ```
   "Identify any potential performance, security, or maintainability issues in this code"
   ```
3. **Verify test coverage**:
   ```
   "Are there any edge cases or scenarios we haven't tested?"
   ```
4. **Ensure documentation is complete**:
   ```
   "Review our documentation for completeness and clarity"
   ```
5. **Prepare for code review** by addressing any issues found
6. **Create a pull request** with a comprehensive description
7. **Update the Jira ticket** with implementation details and status

## Best Practices

### General Tips

- **Maintain continuity** between tools by documenting key decisions and insights
- **Be specific with prompts** to get the most useful responses from AI tools
- **Validate AI suggestions** against your domain knowledge and project requirements
- **Iterate frequently** rather than attempting to complete everything in one go
- **Document as you go** to ensure knowledge transfer and future maintainability

### Jira Revo AI Tips

- **Start with broad questions** then narrow down to specifics
- **Use follow-up questions** to dive deeper into important aspects
- **Save useful responses** directly in Jira for future reference
- **Ask for examples** when concepts are unclear
- **Request prioritization** of tasks when breaking down complex features

### Windsurf Tips

- **Provide sufficient context** when starting a new conversation
- **Use code search** to explore relevant parts of the codebase
- **Leverage planning mode** for complex features
- **Create todo lists** to track implementation progress
- **Use @mentions** to reference documentation or other resources
- **Ask for explanations** when you don't understand generated code
- **Request alternative approaches** to evaluate different solutions

## Example Workflow

### Feature: Add user activity tracking to dashboard

#### Phase 1: Requirement (Jira)
- Jira ticket describes need for user activity tracking on dashboard
- Acceptance criteria: display last login time, recent actions, and session duration

#### Phase 2: Analysis (Jira Revo AI)
- Revo AI identifies components: user service, activity logger, dashboard UI
- Complexity assessment: Medium (3-5 days)
- Dependencies: Authentication system, Activity logging service

#### Phase 3: Context (Jira Revo AI)
- Revo AI suggests reviewing: Activity logging API docs, Dashboard component structure
- Similar features: User notification system uses similar data retrieval patterns
- Architecture: Will require new API endpoint and dashboard widget

#### Phase 4: Planning (Windsurf)
- Share context from Revo AI with Windsurf
- Use planning mode to create implementation steps:
  1. Create activity data retrieval service
  2. Implement API endpoint for activity data
  3. Develop dashboard widget component
  4. Connect widget to data source
  5. Add styling and user experience enhancements
  6. Implement caching for performance

#### Phase 5: Implementation (Windsurf)
- Implement each component following the plan
- Use Windsurf to generate code for the API endpoint
- Explore existing dashboard widgets for consistent patterns
- Develop and test incrementally

#### Phase 6: Review (Windsurf)
- Review implementation against requirements
- Check for performance issues with activity data loading
- Ensure error handling for users with no activity
- Verify responsive design works on all screen sizes
- Prepare pull request with implementation details

## Conclusion

This workflow combines the strengths of Jira Revo AI for requirement analysis and context gathering with Windsurf's capabilities for planning and implementation. By following this structured approach, development teams can build features more efficiently, with higher quality, and greater consistency.

Adopt this workflow as a starting point and adapt it to your team's specific needs and processes. The key to success is maintaining a smooth flow of information between tools and phases while ensuring each step adds value to the development process.
