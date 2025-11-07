# SEO Implementation Guide for Windsurf Playbook

This document outlines the SEO enhancements implemented for the Windsurf Playbook documentation site.

## Overview

The following SEO improvements have been implemented:

1. **Meta Tags & Open Graph** - Enhanced metadata for search engines and social media
2. **Structured Data (JSON-LD)** - Schema markup for better search engine understanding
3. **Sitemap** - Automatic sitemap generation for search engine crawling
4. **Robots.txt** - Search engine crawling directives
5. **SEO Utilities** - Helper functions for SEO best practices
6. **Canonical URLs** - Prevent duplicate content issues
7. **Mobile Optimization** - Responsive viewport configuration

## Implementation Details

### 1. Docusaurus Configuration (`docusaurus.config.ts`)

#### Global Meta Tags
- **Description**: Comprehensive site description for search engines
- **Keywords**: Relevant keywords for the documentation
- **Author**: Attribution to Windsurf Team
- **Viewport**: Mobile-responsive configuration
- **Theme Color**: Visual branding in browser UI

#### Open Graph Tags
- **og:title**: Title for social media sharing
- **og:description**: Description for social media sharing
- **og:type**: Content type (website)
- **og:url**: Canonical URL
- **og:image**: Social media preview image

#### Twitter Card Tags
- **twitter:card**: Card type (summary_large_image)
- **twitter:title**: Title for Twitter
- **twitter:description**: Description for Twitter
- **twitter:image**: Image for Twitter preview

#### Sitemap Plugin
- Automatically generates `sitemap.xml` at build time
- Update frequency: weekly
- Priority: 0.5 (default)
- Excludes test directories

### 2. Structured Data Components (`src/components/StructuredData/`)

#### Available Components

**OrganizationSchema**
```tsx
import { OrganizationSchema } from '@site/src/components/StructuredData';

export default function MyPage() {
  return (
    <>
      <OrganizationSchema />
      {/* Page content */}
    </>
  );
}
```

**WebSiteSchema**
```tsx
import { WebSiteSchema } from '@site/src/components/StructuredData';

export default function MyPage() {
  return (
    <>
      <WebSiteSchema />
      {/* Page content */}
    </>
  );
}
```

**ArticleSchema**
```tsx
import { ArticleSchema } from '@site/src/components/StructuredData';

export default function MyPage() {
  return (
    <>
      <ArticleSchema 
        title="Page Title"
        description="Page description"
        url="https://windsurf-docs.example.com/docs/page"
        datePublished="2024-01-01"
        dateModified="2024-01-15"
        author="Windsurf Team"
        image="https://windsurf-docs.example.com/img/page-image.jpg"
      />
      {/* Page content */}
    </>
  );
}
```

**BreadcrumbSchema**
```tsx
import { BreadcrumbSchema } from '@site/src/components/StructuredData';

export default function MyPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://windsurf-docs.example.com' },
          { name: 'Docs', url: 'https://windsurf-docs.example.com/docs' },
          { name: 'Current Page', url: 'https://windsurf-docs.example.com/docs/page' }
        ]}
      />
      {/* Page content */}
    </>
  );
}
```

### 3. SEO Utilities (`src/utils/seo.ts`)

Helper functions for SEO best practices:

```tsx
import {
  generateMetaTags,
  truncateText,
  generateSlug,
  extractKeywords,
  formatCanonicalUrl,
  generateBreadcrumbs,
  isValidMetaDescription,
  isValidTitle,
} from '@site/src/utils/seo';

// Generate meta tags
const tags = generateMetaTags({
  title: 'Page Title',
  description: 'Page description',
  url: 'https://windsurf-docs.example.com/docs/page',
  keywords: ['keyword1', 'keyword2'],
});

// Truncate text to meta description length
const description = truncateText(longText, 160);

// Generate URL slug
const slug = generateSlug('My Page Title'); // 'my-page-title'

// Format canonical URL
const canonical = formatCanonicalUrl('/docs/page');

// Validate meta description length (50-160 characters)
if (isValidMetaDescription(description)) {
  console.log('Valid description length');
}

// Validate title length (30-60 characters)
if (isValidTitle(title)) {
  console.log('Valid title length');
}
```

### 4. Robots.txt (`static/robots.txt`)

- Allows all search engines to crawl the site
- Excludes build and node_modules directories
- Sets crawl delay to 1 second
- Points to sitemap location

### 5. Homepage Optimization (`src/pages/index.tsx`)

- Updated with comprehensive meta description
- Improved title for search engine visibility
- Structured layout for better crawlability

## Best Practices for Documentation Pages

### 1. Page Titles
- Keep between 30-60 characters
- Include primary keyword
- Make it descriptive and unique
- Example: "Cascade: AI-Powered Code Agent for Windsurf"

### 2. Meta Descriptions
- Keep between 50-160 characters
- Include primary keyword naturally
- Write compelling copy to improve CTR
- Example: "Learn how to use Cascade, Windsurf's AI agent, for intelligent code generation and refactoring."

### 3. Headings Structure
- Use H1 for main page title (only one per page)
- Use H2 for major sections
- Use H3 for subsections
- Ensure logical hierarchy

### 4. Content Optimization
- Include target keywords naturally (2-3% density)
- Write for users first, search engines second
- Use descriptive link text (avoid "click here")
- Include internal links to related content
- Add alt text to images

### 5. URL Structure
- Use descriptive, lowercase URLs
- Separate words with hyphens
- Keep URLs short and meaningful
- Example: `/docs/essentials/cascade` instead of `/docs/page123`

### 6. Markdown Front Matter (for future use)

For MDX pages, add front matter with SEO metadata:

```markdown
---
title: "Page Title"
description: "Meta description for search engines"
keywords: ["keyword1", "keyword2", "keyword3"]
image: "/img/page-image.jpg"
---
```

## Monitoring & Maintenance

### 1. Search Console
- Submit sitemap to Google Search Console
- Monitor search performance
- Fix crawl errors and warnings
- Check indexation status

### 2. Analytics
- Track organic search traffic
- Monitor keyword rankings
- Analyze user behavior
- Identify high-performing content

### 3. Regular Audits
- Check for broken links
- Validate meta tags
- Review heading structure
- Update outdated content

## Configuration Updates Needed

Before deploying, update the following in `docusaurus.config.ts`:

1. **URL**: Replace `https://windsurf-docs.example.com` with actual domain
2. **Social Card Image**: Ensure `img/docusaurus-social-card.jpg` exists
3. **Logo**: Verify `img/logo.svg` is present
4. **Organization Name**: Update if needed

## Files Modified/Created

- ✅ `docusaurus.config.ts` - Added SEO plugins and metadata
- ✅ `src/pages/index.tsx` - Enhanced homepage description
- ✅ `src/components/StructuredData/index.tsx` - JSON-LD schema components
- ✅ `src/utils/seo.ts` - SEO utility functions
- ✅ `static/robots.txt` - Search engine crawling directives

## Next Steps

1. Update the production URL in configuration
2. Generate and submit sitemap to search engines
3. Add structured data to key documentation pages
4. Monitor search console for indexation
5. Implement analytics tracking
6. Regularly audit and update content

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Docusaurus SEO Documentation](https://docusaurus.io/docs/seo)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
