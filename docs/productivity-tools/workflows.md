---
description: "Learn how to create and use Workflows in Windsurf for automating repetitive development tasks and improving productivity."
keywords: ["Workflows", "automation", "Windsurf", "Cascade", "task automation", "productivity", "repetitive tasks"]
image: "/img/docusaurus-social-card.jpg"
---

# Workflows

## Introduction
Workflows in Windsurf are structured sequences of steps that guide Cascade through repetitive tasks, enhancing productivity and ensuring consistency. Unlike Rules (which provide context at the prompt level), Workflows operate at the trajectory level, orchestrating a series of interconnected actions. They're particularly valuable for standardizing complex processes like addressing PR comments, dependency management, or deployment procedures.

## Feature Settings
- **Creation**: Access via the `Customizations` icon > `Workflows` panel > `+ Workflow` button
- **Storage**: Saved as markdown files in `.windsurf/workflows/` directories
- **Execution**: Invoke with slash command `/[workflow-name]` in Cascade
- **Discovery**: Automatically finds workflows in current workspace, sub-directories, and up to git root
- **Nesting**: Call other workflows from within a workflow using `/workflow-name` syntax
- **Generation**: Ask Cascade to generate workflows for you, especially for CLI-based tasks

## Do's for Code Quality
- Create workflows for repetitive multi-step processes to ensure consistency
- Document each step clearly with specific instructions
- Break complex tasks into smaller, manageable steps
- Include error handling instructions for common failure points
- Use workflows for standardized code review processes
- Incorporate quality checks (linting, testing) in your workflows
- Maintain workflows as your processes evolve

## Don'ts for Code Quality
- Don't create overly complex workflows that are hard to maintain
- Avoid hardcoding sensitive information in workflows
- Don't skip validation steps in critical workflows
- Avoid creating workflows for one-time tasks
- Don't duplicate functionality across multiple workflows
- Avoid creating workflows without clear documentation
- Don't neglect to update workflows when processes change

## Tips
- Generate workflows with Cascade for common CLI operations
- Nest workflows to create modular, reusable components
- Use workflows for onboarding to standardize setup processes
- Create team-specific workflows for shared responsibilities
- Review and refine workflows periodically to improve efficiency
- Share successful workflows with your team
- Limit workflow files to 12,000 characters for optimal performance

## Suggested Workflow Topics for Developers

1. **Code Review Process**
   - PR comment handling
   - Code quality verification
   - Documentation checks

2. **Development Environment Setup**
   - Project initialization
   - Dependency installation
   - Configuration setup

3. **Testing Automation**
   - Unit test execution
   - Integration test runs
   - Test coverage reporting

4. **Deployment Pipeline**
   - Build process
   - Environment configuration
   - Deployment verification

5. **Code Quality Enforcement**
   - Linting execution
   - Formatting standardization
   - Static analysis

6. **Documentation Generation**
   - API documentation updates
   - README maintenance
   - Change log generation

7. **Dependency Management**
   - Dependency updates
   - Vulnerability scanning
   - Compatibility verification

8. **Feature Development**
   - Branch creation
   - Implementation steps
   - Testing guidelines

9. **Bug Resolution**
   - Issue reproduction
   - Root cause analysis
   - Fix implementation and verification

10. **Performance Optimization**
    - Bottleneck identification
    - Benchmark execution
    - Optimization verification
