---
description: "Learn how to use Cascade Memories to persist context across conversations. Understand memory management, best practices, and limitations."
keywords: ["Memories", "Cascade", "context", "persistent", "Windsurf", "conversation", "knowledge base"]
image: "/img/docusaurus-social-card.jpg"
---

# Memories

## Introduction
Cascade Memories is a powerful system for sharing and persisting context across conversations in Windsurf. Unlike Rules (which are manually defined), Memories are automatically generated when Cascade encounters useful information or can be explicitly created by users. This feature ensures that important context about your codebase, preferences, and decisions is preserved and retrieved when relevant, enhancing code quality and productivity across multiple sessions.

## Feature Settings
- **Access**: Click the `Customizations` icon in the top right slider menu or via "Windsurf - Settings" in the bottom-right corner
- **Automatic Generation**: Cascade identifies and stores useful context during conversations
- **Manual Creation**: Prompt Cascade to "create a memory of..." for explicit memory creation
- **Workspace Association**: Memories are tied to the workspace they were created in
- **Credit Efficiency**: Creating and using memories does not consume credits

## Do's for Code Quality
- Create memories for complex architectural decisions to maintain consistency
- Store project-specific conventions and patterns for consistent code style
- Document non-obvious technical choices to prevent future regressions
- Capture environment setup details to streamline onboarding
- Use memories to record solutions to tricky bugs or edge cases
- Create memories for API usage patterns specific to your project
- Document performance optimization strategies you've implemented

## Don'ts for Code Quality
- Don't create memories for information already in documentation
- Avoid storing sensitive data like credentials or personal information
- Don't rely solely on memories for critical information (document it properly)
- Avoid creating overly verbose or unfocused memories
- Don't create duplicate memories for the same information
- Avoid creating memories for temporary workarounds
- Don't store outdated information without updating it

## Tips
- Review memories periodically to ensure they remain relevant
- Be specific when asking Cascade to create memories
- Use memories to maintain consistency across team members
- Create memories after solving complex problems to help future you
- Combine memories with rules for maximum effectiveness
- Use memories to track evolving design decisions
- Ask Cascade to retrieve specific memories when needed

## Suggested Memory Topics for Developers

1. **Project Architecture**
   - Overall system design
   - Component relationships
   - Data flow patterns

2. **Coding Standards**
   - Naming conventions
   - File organization
   - Error handling approaches

3. **Performance Considerations**
   - Optimization techniques
   - Resource management
   - Caching strategies

4. **Testing Strategy**
   - Test coverage requirements
   - Mocking approaches
   - Test data management

5. **API Integration Details**
   - Authentication methods
   - Request/response formats
   - Rate limiting considerations

6. **State Management**
   - Data flow patterns
   - State update conventions
   - Side effect handling

7. **Build and Deployment**
   - Environment configurations
   - CI/CD pipeline details
   - Release procedures

8. **Security Practices**
   - Input validation patterns
   - Authentication workflows
   - Data protection measures

9. **Accessibility Standards**
   - ARIA attribute usage
   - Keyboard navigation patterns
   - Screen reader considerations

10. **Technical Debt**
    - Known limitations
    - Planned refactorings
    - Legacy code handling
