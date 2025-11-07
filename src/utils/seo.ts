/**
 * SEO Utilities for the Windsurf Playbook documentation site
 */

export interface SEOMetadata {
  title: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  canonical?: string;
}

/**
 * Generate meta tags for a page
 */
export const generateMetaTags = (metadata: SEOMetadata) => {
  const tags: Array<Record<string, string>> = [
    {
      name: 'description',
      content: metadata.description,
    },
    {
      property: 'og:title',
      content: metadata.title,
    },
    {
      property: 'og:description',
      content: metadata.description,
    },
    {
      property: 'og:url',
      content: metadata.url,
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: metadata.title,
    },
    {
      name: 'twitter:description',
      content: metadata.description,
    },
  ];

  if (metadata.image) {
    tags.push({
      property: 'og:image',
      content: metadata.image,
    });
    tags.push({
      name: 'twitter:image',
      content: metadata.image,
    });
  }

  if (metadata.keywords && metadata.keywords.length > 0) {
    tags.push({
      name: 'keywords',
      content: metadata.keywords.join(', '),
    });
  }

  if (metadata.author) {
    tags.push({
      name: 'author',
      content: metadata.author,
    });
  }

  if (metadata.canonical) {
    tags.push({
      rel: 'canonical',
      href: metadata.canonical,
    });
  }

  return tags;
};

/**
 * Truncate text to a specified length
 */
export const truncateText = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Generate a slug from a title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Extract keywords from text
 */
export const extractKeywords = (text: string, limit: number = 5): string[] => {
  const words = text
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3);

  // Simple keyword extraction - in production, use a more sophisticated approach
  const uniqueWords = [...new Set(words)];
  return uniqueWords.slice(0, limit);
};

/**
 * Format URL for canonical tag
 */
export const formatCanonicalUrl = (path: string, baseUrl: string = 'https://windsurf-docs.example.com'): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Generate breadcrumb schema data
 */
export const generateBreadcrumbs = (
  segments: Array<{ name: string; path: string }>,
  baseUrl: string = 'https://windsurf-docs.example.com'
) => {
  return segments.map((segment, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: segment.name,
    item: `${baseUrl}${segment.path}`,
  }));
};

/**
 * Check if text is a good meta description length (50-160 characters)
 */
export const isValidMetaDescription = (description: string): boolean => {
  return description.length >= 50 && description.length <= 160;
};

/**
 * Check if title is a good length (30-60 characters)
 */
export const isValidTitle = (title: string): boolean => {
  return title.length >= 30 && title.length <= 60;
};

export default {
  generateMetaTags,
  truncateText,
  generateSlug,
  extractKeywords,
  formatCanonicalUrl,
  generateBreadcrumbs,
  isValidMetaDescription,
  isValidTitle,
};
