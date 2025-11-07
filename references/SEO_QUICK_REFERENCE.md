# SEO Quick Reference

## Quick Start

### 1. Build & Deploy
```bash
npm run build
npm run serve  # Test locally
```

### 2. Verify Sitemap
- Check `/build/sitemap.xml` is generated
- Verify all pages are included

### 3. Submit to Search Engines
- **Google**: [Google Search Console](https://search.google.com/search-console)
- **Bing**: [Bing Webmaster Tools](https://www.bing.com/webmasters)

## Using Structured Data

### Add to Documentation Pages

```tsx
import { ArticleSchema } from '@site/src/components/StructuredData';

export default function MyDocPage() {
  return (
    <>
      <ArticleSchema
        title="Your Page Title"
        description="Your page description"
        url="https://windsurf-docs.example.com/docs/your-page"
        datePublished="2024-01-01"
        dateModified="2024-01-15"
      />
      {/* Your content */}
    </>
  );
}
```

### Add Breadcrumbs

```tsx
import { BreadcrumbSchema } from '@site/src/components/StructuredData';

<BreadcrumbSchema
  items={[
    { name: 'Home', url: 'https://windsurf-docs.example.com' },
    { name: 'Docs', url: 'https://windsurf-docs.example.com/docs' },
    { name: 'Current Page', url: 'https://windsurf-docs.example.com/docs/page' }
  ]}
/>
```

## SEO Utility Functions

### Validate Meta Description
```tsx
import { isValidMetaDescription, truncateText } from '@site/src/utils/seo';

const description = truncateText(longText, 160);
if (isValidMetaDescription(description)) {
  // Description is between 50-160 characters
}
```

### Format Canonical URL
```tsx
import { formatCanonicalUrl } from '@site/src/utils/seo';

const canonical = formatCanonicalUrl('/docs/page');
// Returns: https://windsurf-docs.example.com/docs/page
```

### Generate Slug
```tsx
import { generateSlug } from '@site/src/utils/seo';

const slug = generateSlug('My Page Title');
// Returns: 'my-page-title'
```

## Configuration Checklist

Before deploying to production:

- [ ] Update URL in `docusaurus.config.ts`
  - Replace `https://windsurf-docs.example.com` with actual domain
  - Update in robots.txt sitemap URL

- [ ] Verify images exist
  - [ ] `img/docusaurus-social-card.jpg` (social media preview)
  - [ ] `img/logo.svg` (organization logo)
  - [ ] `img/favicon.png` (browser tab icon)

- [ ] Test structured data
  - [ ] Use [Google Rich Results Test](https://search.google.com/test/rich-results)
  - [ ] Validate JSON-LD markup

- [ ] Submit to search engines
  - [ ] Google Search Console
  - [ ] Bing Webmaster Tools

## Files Reference

| File | Purpose |
|------|---------|
| `docusaurus.config.ts` | Global SEO configuration |
| `src/components/StructuredData/index.tsx` | JSON-LD schema components |
| `src/utils/seo.ts` | SEO utility functions |
| `static/robots.txt` | Search engine directives |
| `SEO_IMPLEMENTATION_GUIDE.md` | Detailed implementation guide |
| `SEO_IMPLEMENTATION_SUMMARY.md` | Implementation summary |

## Testing Tools

### SEO Validation
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Meta Tags Checker](https://www.metatags.io/)

### Performance
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Search Console
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## Common Tasks

### Add SEO to a New Page

1. Create your page component
2. Import ArticleSchema:
   ```tsx
   import { ArticleSchema } from '@site/src/components/StructuredData';
   ```
3. Add schema at top of component:
   ```tsx
   <ArticleSchema
     title="Your Title"
     description="Your description"
     url="https://windsurf-docs.example.com/docs/your-page"
   />
   ```

### Update Meta Tags Globally

Edit `docusaurus.config.ts` in the `metadata` array under `themeConfig`

### Monitor Search Performance

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Submit sitemap
4. Monitor:
   - Indexation status
   - Search performance
   - Coverage issues
   - Mobile usability

## Troubleshooting

### Sitemap Not Generated
- Ensure `@docusaurus/plugin-sitemap` is in `docusaurus.config.ts`
- Run `npm run build` to generate
- Check `/build/sitemap.xml`

### Structured Data Not Validating
- Use [Schema.org Validator](https://validator.schema.org/)
- Check component props are correct
- Ensure URL format is correct

### Pages Not Indexed
- Submit sitemap to Google Search Console
- Check robots.txt allows crawling
- Verify no noindex meta tags
- Check for crawl errors in Search Console

## Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before uploading
   - Add descriptive alt text

2. **Improve Load Speed**
   - Enable gzip compression
   - Use CDN for static assets
   - Minimize CSS/JS

3. **Mobile Optimization**
   - Ensure responsive design
   - Test on mobile devices
   - Check Core Web Vitals

## Resources

- [Docusaurus SEO Docs](https://docusaurus.io/docs/seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [SEO Checklist](https://www.semrush.com/blog/seo-checklist/)

---

**Last Updated**: 2024
**Status**: ✅ Ready for production
