import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Windsurf Playbook",
  tagline: "The AI-Powered Developer Guideline",
  favicon: "img/favicon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://windsurf-docs.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  
  // Add stylesheets (including Google Fonts)
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "banlyslash", // Usually your GitHub org/user name.
  projectName: "windsurf-playbook", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/windsurf/windsurf-docs/tree/main/docs/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/windsurf/windsurf-docs/tree/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      style: "primary",
      title: "Windsurf Playbook",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
        width: 128,
      },
      items: [
        {
          position: "left",
          label: "Get Started",
          to: "/docs/get-started",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/banlyslash/windsurf-playbook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Windsurf Playbook",
          items: [
            {
              label: "Get Started",
              to: "/docs/get-started",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/banlyslash/windsurf-playbook",
            },
            {
              label: "Contributing",
              href: "https://github.com/banlyslash/windsurf-playbook/tree/main/CONTRIBUTING.md",
            },
            {
              label: "License",
              href: "https://github.com/banlyslash/windsurf-playbook/tree/main/LICENSE.md",
            },
          ],
        },
        {
          title: "Sponsors",
          items: [
            {
              label: "Slash",
              href: "https://slash.co/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Windsurf Playbook. Supported by Slash.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
