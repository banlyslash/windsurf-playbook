# @-Mention for Web Search

## Introduction
Web Search in Windsurf enables Cascade to intuitively parse through web pages and documentation, providing real-time context to the AI models. The feature works similar to how a human would browse the internet - searching for relevant information, skimming pages, and focusing on relevant sections. Web Search is designed to retrieve only necessary information, efficiently using your credits while providing valuable context for coding tasks.

## Setting Up Web Search

You can activate web search in your Windsurf Settings (bottom right corner of the editor) through several methods:

1. **Ask a question that likely requires internet access**  
   Example: "What's new in the latest version of React?"

2. **Use `@web` to force a web search**  
   Example: "@web react breaking changes"

3. **Use `@docs` for high-quality documentation search**  
   Example: "@docs:react-docs how do I use React hooks?"

4. **Paste a URL directly into your message**  
   Example: "https://github.com/vercel/next.js/README.md what are the key features?"

## How It Works

Web Search operates through three main components:

1. **Web Search**: Finds relevant articles online based on your query without reading page contents
2. **URL Reading**: Retrieves page contents and creates "chunks" for longer pages
3. **Chunk Viewing**: For longer pages, reads specific relevant sections

The page reads happen entirely on your device within your network, so VPN usage doesn't cause issues. For long pages, Windsurf breaks content into multiple chunks, similar to how a human would skim to find relevant sections.

## Do's and Don'ts

### Do's
- **Be specific with your queries** - Provide clear, targeted prompts rather than general statements
- **Specify domains when needed** - Direct Cascade to official documentation when appropriate
- **Use for real-time information needs** - Especially for documentation, API references, or recent updates
- **Leverage for complex research tasks** - When solving problems that require multiple sources

### Don'ts
- **Don't overuse `@web` for simple tasks** - For basic functions that don't need real-time data, let Cascade use its training data
- **Don't expect perfect parsing of all websites** - Some sites with heavy JavaScript, paywalls, or login requirements may not parse well
- **Don't use for sensitive or private information** - Remember that web searches involve external content
- **Don't waste credits on unnecessary searches** - Consider if the information is already in Cascade's knowledge

## Tips for Productivity

1. **Combine with local code context** - Let Cascade understand both your codebase and web documentation
2. **Use domain-specific searches** - For framework documentation, specify the official docs (e.g., "use the official NextJS docs")
3. **Refine your queries** - If results aren't helpful, try rephrasing or being more specific
4. **Check the parsed content** - You can click on URLs to view the markdown Cascade has read
5. **Prefer documentation sites** - Blog posts, documentation sites, StackOverflow, and GitHub files tend to parse more reliably

## Suggested Web Search Topics for Developers

1. **Framework updates and breaking changes**
   - "What's new in React 19?"
   - "@web TypeScript 5.0 breaking changes"

2. **API documentation and usage**
   - "@docs:node-api how to create an HTTPS server"
   - "@web best practices for REST API design 2025"

3. **Error troubleshooting**
   - "@web React hydration error solutions"
   - "How to fix webpack chunk load error"

4. **Performance optimization**
   - "@web React performance optimization techniques"
   - "@docs:nextjs-docs image optimization"

5. **Security best practices**
   - "@web OWASP top 10 2025"
   - "@web secure authentication in Express"

6. **Testing strategies**
   - "@web React component testing best practices"
   - "@docs:jest-docs how to mock API calls"

7. **Deployment workflows**
   - "@web CI/CD pipeline for NextJS applications"
   - "@docs:aws-docs deploying serverless functions"

8. **Accessibility standards**
   - "@web WCAG 2.2 compliance checklist"
   - "@docs:react-docs accessibility"

9. **Design patterns**
   - "@web modern JavaScript design patterns"
   - "@web microservices vs monolith architecture"

10. **Tooling and environment setup**
    - "@web Docker setup for Node.js development"
    - "@docs:vscode-docs debugging configuration"
