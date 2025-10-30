# Project Initialization

## Using Windsurf Effectively for New Project Initialization

**Purpose:**
To ensure all new projects follow a consistent structure, best practices, and coding conventions by leveraging Windsurf for setup documentation, analysis, and rule creation after the initial manual framework setup.

## 1. Overview

Windsurf helps us:

1. Document our setup after the manual project initialization.

2. Apply best practices and configurations.

3. Automatically generate project documentation (README.md).

4. Analyze the codebase to create a project conventions file (convention.md).

5. Maintain consistent code quality and structure over time.

## 2. Step-by-Step Process

### Step 2.1-Manual Project Initialization (No Windsurf)

**Responsibility:** Tech Lead or Developer.

Read the latest official documentation for the chosen framework (React, Next.js, NestJS, etc.) carefully.
Initialize the project manually:

* Use the framework's official CLI or recommended method.

* Select TypeScript if available.

* Apply official starter templates or minimal setup as needed.

Ensure all default configurations match the latest recommended practices from the framework docs.

**▲ Important:**
Do not use Windsurf in this stage. This step requires careful human review and understanding of the framework updates.

### Step 2.2-Apply Best Practices and Configurations (With Windsurf Assistance)

* Configure ESLint & Prettier to enforce consistent coding styles.

* Setup folder structure:

  * `src/`

  * `components/`

  * `pages/` (or `views/`)

  * `services/`

  * `utils/`

  * `hooks/`

  * `assets/`

  * `styles/`

  * `tests/`

* Define naming conventions:

  * **Files:** Pascalcase for components, camelCase for utilities, kebab-case for config files.

  * **Variables:** camelCase for variables/functions, UPPER_CASE for constants.

  * **Folders:** kebab-case.

* Example Windsurf (Cascade) prompt:

  > **Prompt:**
  > Based on our project type, configure eslint, prettier, husky, and folder structure with best practices for maintainability and scalability.

### Step 2.3-Generate Initial README.md

* Ask Windsurf (Cascade) to scan the codebase

* Commit the generated README.md to the repository

  > **Prompt:**
  > Read through the current project and generate a README.md file including:
  >
  > * Project title
  >
  > * Description
  >
  > * Installation instructions
  >
  > * Development commands
  >
  > * Build & deployment instructions
  >
  > * Tech stack
  >
  > * Project structure overview

### Step 2.4-Create convention.md (Project Rules)

After the README.md is ready, request Windsurf (Cascade) to store `convention.md` in the project root as the single source of truth for coding standards.

> Analyze the current project, its folder structure, ESLint config, and README.md, then generate a 'convention.md' file containing:
>
> * Coding standards
>
> * Naming conventions
>
> * Folder structure rules
>
> * Testing requirements

### Step 2.5-Ongoing Maintenance with Windsurf

When conventions change:

* Update `convention.md`

* Ask Windsurf to re-analyze the project for compliance

## 3. Example Windsurf Prompt Library

Keep these prompts in a shared `windsurf-prompts.md` file for the team. This is to document how the team is using prompts to help in their project.

**Setup Configs Prompt:**

> Configure ESLint, Prettier, husky, and lint-staged with recommended
> best practices for \[framework\].

**Generate README Prompt:**

> Analyze this project and create a professional README.md file with
> usage, commands, and folder structure.

**Create Convention File Prompt:**

> Based on the README.md, eslint config, and folder structure, create a
> convention.md documenting coding rules, naming standards, and project
> structure.

**Create Autocomplete component Prompt:**

> @convention.md help me create a reusable component under
> modules/common/component called Autocomplete which use cmdk and shaden
> and tailwindess. The component should accept: value, options,
> className as props

\[Add your own project prompts\]

## 4. Config Windsurf Rules

1. Go to Cascade Panel
   *(Image: Screenshot of Windsurf Cascade Customization showing Rules tab)*

2. Click **+ Workspace**

3. Copy and paste the rule from `convention.md`

Now you can have a Windsurf rule you can trigger.

**Example usage:**

> @convention.md help me create a reusable component under modules/common/component called
> Autocomplete which use cmdk and shaden and tailwindcss. The component should accept: value, options,
> className as props
