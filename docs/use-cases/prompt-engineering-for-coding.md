---
description: "A comprehensive guide to prompt engineering for coding tasks in Windsurf, with examples of good and bad prompts for different use cases."
keywords: ["prompt engineering", "Windsurf", "coding", "AI assistance", "best practices", "examples", "debugging", "refactoring", "feature development"]
image: "/img/docusaurus-social-card.jpg"
---

# Prompt Engineering for Coding

## Introduction

Prompt engineering is the art and science of crafting effective instructions for AI systems like Cascade in Windsurf. For developers, mastering prompt engineering can dramatically improve the quality, accuracy, and usefulness of AI-generated code and assistance.

This guide provides practical examples of effective prompt engineering specifically for coding tasks, with side-by-side comparisons of ineffective and effective prompts across common development scenarios.

## Prompt Engineering Fundamentals

### Core Principles

1. **Provide Rich Context** - Include programming language, frameworks, libraries, and project details
2. **Be Specific** - Clearly state your goal or question with precise requirements
3. **Break Down Complex Tasks** - Split large tasks into manageable chunks
4. **Include Examples** - Provide sample inputs/outputs or expected behavior
5. **Leverage Roles** - Ask the AI to "act as" a specific type of developer or expert

### The Anatomy of an Effective Coding Prompt

An effective coding prompt typically includes:

```
1. Context: What are you working on? (language, framework, project)
2. Goal: What are you trying to achieve?
3. Current State: What code do you have now? (if applicable)
4. Specific Request: What exactly do you need help with?
5. Constraints/Requirements: Any specific limitations or requirements?
6. Examples: Sample inputs/outputs or expected behavior (if applicable)
```

## Debugging Code

### Bad vs. Good Examples

#### ❌ Poor Debugging Prompt

```
Why isn't my function working?

function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}
```

**Why it's ineffective:** This prompt lacks context, doesn't specify the error, and doesn't explain what the function should do. The AI has to guess what "not working" means.

#### ✅ Effective Debugging Prompt

```
I have a JavaScript function that calculates the total price of items in a shopping cart. 
When I run it with the array [{price: 10}, {price: 20}], I get the error:
"TypeError: Cannot read property 'price' of undefined"

Here's my function:

function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}

It should return 30 for the example input. What's causing the error and how can I fix it?
```

**Why it's effective:** This prompt:
- Specifies the language (JavaScript)
- Explains the function's purpose (calculate total price)
- Includes the exact error message
- Provides a sample input and expected output
- Asks a specific question (what's causing the error)

### Advanced Debugging Techniques

#### Trace Through Execution

```
I'm trying to understand why this recursive function isn't working correctly.
Can you trace through its execution step by step with the input [1, 2, 3]?

function sumArray(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] + sumArray(arr, index++);
}
```

#### Request Multiple Solutions

```
My authentication middleware is failing with "JWT malformed" errors sometimes but not always.
Here's the code:

[code snippet]

What are 3 possible causes of this intermittent issue, and how would you fix each one?
```

## Refactoring Code

### Bad vs. Good Examples

#### ❌ Poor Refactoring Prompt

```
Can you make this code better?

function processData(data) {
  var result = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (item.active == true) {
      var processed = {
        id: item.id,
        name: item.name,
        value: item.value * 2
      };
      result.push(processed);
    }
  }
  return result;
}
```

**Why it's ineffective:** "Better" is subjective and vague. The prompt doesn't specify what aspects of the code need improvement.

#### ✅ Effective Refactoring Prompt

```
I have a JavaScript function that processes an array of data objects. I'd like to refactor it to:
1. Use modern ES6+ syntax (arrow functions, const/let, etc.)
2. Make it more concise using array methods instead of for loops
3. Improve variable naming for better readability

Here's the current function:

function processData(data) {
  var result = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (item.active == true) {
      var processed = {
        id: item.id,
        name: item.name,
        value: item.value * 2
      };
      result.push(processed);
    }
  }
  return result;
}

Please explain your changes and why they improve the code.
```

**Why it's effective:** This prompt:
- Specifies the language (JavaScript)
- Lists specific refactoring goals (ES6+, array methods, naming)
- Provides the complete function to refactor
- Asks for explanations of the improvements

### Advanced Refactoring Techniques

#### Performance Optimization

```
This React component is causing performance issues when the list has more than 100 items.
Can you refactor it to be more efficient, possibly using memoization, virtualization, or other optimization techniques?

[component code]
```

#### Architecture Improvement

```
I'm refactoring this monolithic function that handles user registration, email verification, and profile creation.
Please split it into separate functions following the Single Responsibility Principle, and show how they would interact.

[function code]
```

## Implementing Features

### Bad vs. Good Examples

#### ❌ Poor Feature Implementation Prompt

```
Create a login form in React.
```

**Why it's ineffective:** This prompt is extremely vague with no specifications about requirements, styling, validation, or how the form should handle submissions.

#### ✅ Effective Feature Implementation Prompt

```
I need to create a React login form component with the following requirements:

1. Fields: Email and password with appropriate validation
   - Email: Required, must be valid email format
   - Password: Required, minimum 8 characters

2. UI/UX:
   - Show validation errors inline under each field
   - Disable submit button until form is valid
   - Show loading state during submission

3. Functionality:
   - On submit, call a login function that returns a Promise
   - Handle success by redirecting to dashboard
   - Handle errors by displaying error message

4. Tech stack:
   - React 18 with hooks
   - Styled with Tailwind CSS
   - Form validation with Formik and Yup

Please include comments explaining key parts of the implementation.
```

**Why it's effective:** This prompt:
- Specifies the framework (React 18)
- Lists detailed requirements for fields, validation, UI/UX, and functionality
- Mentions the tech stack to use
- Requests explanatory comments

### Advanced Feature Implementation Techniques

#### Incremental Development

```
I'm building a file upload feature for my React application. Let's break this down into steps:

1. First, create the basic UI component for file selection and upload button
2. Next, we'll add drag-and-drop functionality
3. Then, implement the upload logic with progress indication
4. Finally, add error handling and retry capability

Let's start with step 1. Here's my current component structure:
[component structure]
```

#### Integration with Existing Code

```
I need to add a new "export to CSV" feature to my existing data table component.
Here's the current component:

[component code]

Please implement the export functionality while maintaining the current component structure and styling.
The CSV should include all visible columns and respect any current filters applied to the data.
```

## Testing and Validation

### Bad vs. Good Examples

#### ❌ Poor Testing Prompt

```
Write tests for this function.

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

**Why it's ineffective:** This prompt doesn't specify the testing framework, what kinds of tests are needed, or what edge cases to consider.

#### ✅ Effective Testing Prompt

```
I need unit tests for this email validation function using Jest.
Please write tests that cover:

1. Valid email formats (standard, with subdomains, with special characters)
2. Invalid formats (missing @, missing domain, spaces, empty string)
3. Edge cases (null, undefined inputs)

Here's the function:

function validateEmail(email) {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

Include a brief comment before each test explaining what it's checking.
```

**Why it's effective:** This prompt:
- Specifies the testing framework (Jest)
- Lists specific test cases to cover
- Provides the complete function to test
- Asks for explanatory comments

### Advanced Testing Techniques

#### Test-Driven Development

```
I'm implementing a shopping cart module with these requirements:
- Add items with quantity
- Remove items
- Update item quantity
- Calculate total price including discounts

Using a test-driven approach with Jest, please first write the tests that verify these requirements,
then implement the ShoppingCart class that passes all tests.
```

#### Integration Testing

```
I have these two components: a ProductList and a ShoppingCart.
When a user clicks "Add to Cart" in the ProductList, it should update the ShoppingCart state.

Here are both components:
[component code]

Please write React Testing Library tests that verify this integration works correctly,
including test cases for adding products, updating quantities, and removing products.
```

## Debugging Production Issues

### Bad vs. Good Examples

#### ❌ Poor Production Debugging Prompt

```
My website is slow. How can I fix it?
```

**Why it's ineffective:** This prompt provides no context about the website, what "slow" means, or any diagnostic information.

#### ✅ Effective Production Debugging Prompt

```
My Next.js e-commerce site is experiencing slow page loads (5+ seconds) on product listing pages.
Lighthouse reports show poor LCP (Largest Contentful Paint) metrics.

Key details:
- Next.js 13 with App Router
- Products are fetched from a REST API at build time with getStaticProps
- Images are served through next/image
- We have ~500 products with 5 images each
- The issue started after adding filtering functionality

Here's the main product listing component:
[component code]

What are the most likely causes of this performance issue, and how would you recommend addressing them?
```

**Why it's effective:** This prompt:
- Specifies the framework and architecture
- Provides specific performance metrics
- Includes details about when the issue started
- Shows the relevant code
- Asks for both causes and solutions

### Advanced Production Debugging Techniques

#### System-Level Investigation

```
Our Node.js API is experiencing intermittent 503 errors during peak traffic times.
The application is deployed on Kubernetes with 5 pods, and we're using MongoDB Atlas.

Logs show connection timeouts to the database, but MongoDB Atlas dashboard shows no issues.
CPU and memory usage on the pods stay below 70%.

Here's our database connection setup:
[code snippet]

What systematic approach would you take to diagnose this issue? What metrics should we collect,
and what are potential solutions based on the information provided?
```

#### Security Vulnerability Assessment

```
We recently discovered that our authentication system might be vulnerable to timing attacks.
Here's our current implementation for password verification:

[code snippet]

Please:
1. Explain if this code is indeed vulnerable
2. Describe how an attacker could exploit it
3. Provide a secure implementation that addresses the vulnerability
```

## Common Anti-Patterns to Avoid

### 1. The Vague Prompt

❌ **Bad**: "Fix my code."

✅ **Good**: "My React component is throwing this specific error when I click the submit button. Here's the component code and the full error message..."

### 2. The Overloaded Prompt

❌ **Bad**: "Create a full-stack application with user authentication, product management, payment processing, and admin dashboard."

✅ **Good**: "Let's start building a full-stack e-commerce application. First, I need help designing the user authentication system using Express and JWT. Here are my specific requirements..."

### 3. Missing the Question

❌ **Bad**: *Pastes 200 lines of code without any question*

✅ **Good**: "Here's my current implementation of a caching system. I'm specifically struggling with the cache invalidation logic on lines 45-60. How can I improve it to handle concurrent updates correctly?"

### 4. Vague Success Criteria

❌ **Bad**: "Make this code better."

✅ **Good**: "Refactor this code to reduce the time complexity from O(n²) to O(n) while maintaining the same functionality."

## Role-Based Prompting for Coding

Different development tasks benefit from different AI "personas." Here are effective roles to use:

### 1. The Code Reviewer

```
Act as a senior code reviewer with expertise in React and TypeScript.
Review this component for:
1. Potential bugs or edge cases
2. Performance issues
3. TypeScript type safety improvements
4. Adherence to React best practices

[component code]
```

### 2. The Architect

```
Act as a software architect specializing in microservices.
I'm designing a system that needs to process large volumes of user-generated content.
Help me design a scalable architecture addressing:

1. Service boundaries
2. Data consistency
3. Asynchronous processing
4. Failure handling

Current system context: [details]
```

### 3. The Security Expert

```
Act as a security expert with OWASP knowledge.
Review this authentication implementation for security vulnerabilities:

[code snippet]

Focus on potential issues like:
1. SQL injection
2. CSRF vulnerabilities
3. Improper session management
4. Password storage weaknesses
```

### 4. The Performance Optimizer

```
Act as a performance optimization specialist.
This database query is taking 30+ seconds to execute on a table with 1M records:

[SQL query]

Analyze the query and suggest optimizations, considering:
1. Indexing strategies
2. Query restructuring
3. Potential caching approaches
```

## Conclusion

Effective prompt engineering is a skill that develops with practice. By following the principles and examples in this guide, you can dramatically improve the quality and usefulness of AI-generated code and assistance in your development workflow.

Remember these key takeaways:

1. **Context is crucial** - The more relevant information you provide, the better the response
2. **Specificity yields precision** - Clear, detailed requests get targeted, useful answers
3. **Incremental development works best** - Break complex tasks into manageable steps
4. **Examples clarify intent** - Sample inputs/outputs remove ambiguity
5. **Role-based prompting enhances expertise** - Asking the AI to adopt a specific role can improve the quality of specialized advice

By mastering these techniques, you'll transform Windsurf from a helpful tool into an indispensable coding partner.
