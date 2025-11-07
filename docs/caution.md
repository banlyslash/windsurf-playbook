---
description: "Important warnings and best practices for using Windsurf IDE. Learn about credit management, code security, system resources, and AI limitations."
keywords: ["Windsurf", "caution", "warnings", "best practices", "security", "credits", "AI limitations"]
image: "/img/docusaurus-social-card.jpg"
---

# Caution

> ⚠️ **TL;DR**: Watch your credits, protect sensitive code, mind your system resources, and don't trust AI blindly.

## 💰 Save Your Money

- **Free vs. Paid**: Use the free Base Model (Llama 3.1 70B) for everyday tasks; save premium models for complex work
- **Credit Watch**: Each team member gets 500 credits/month—they go fast with premium models

## 🔒 Keep It Secure

- **Hide Sensitive Code**: Use `.codeiumignore` to keep private code private

## ⚡ Boost Performance

- **Indexing Eats Resources**: First-time indexing takes 5-10 minutes and ~300MB RAM per 5000 files
- **Big Codebase Warning**: With 10GB RAM, don't index more than 10,000 files
- **Speed vs. Quality**: Base Model = fast; Premier Model = better but slower
- **Sluggish IDE?** Try disabling some Windsurf features temporarily

## 🧠 Work Smarter

- **Be Specific**: "Fix the null pointer in the login function" beats "Fix this"
- **Trust But Verify**: Always review AI-generated code before accepting
- **Start Small**: Begin with non-critical components until you trust the system
- **Share Knowledge**: Tell teammates about your best prompts and workflows

## 🚫 Avoid These Mistakes

- **Don't Get Lazy**: Keep your coding skills sharp—don't over-rely on AI
- **Test Locally**: Windsurf can't fix all framework-specific build errors
- **Check Privacy**: Different features have different privacy guarantees—read the docs

Remember: Windsurf is a tool, not a replacement for your expertise. Use it wisely!
