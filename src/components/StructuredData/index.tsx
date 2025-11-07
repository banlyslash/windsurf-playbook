import React from 'react';
import Head from '@docusaurus/Head';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'Article' | 'BreadcrumbList';
  data?: Record<string, any>;
}

/**
 * StructuredData component for adding JSON-LD schema markup to pages
 * Improves SEO by providing structured data to search engines
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'WebSite', data }) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  const schema = { ...baseSchema, ...data };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

/**
 * Organization schema for the homepage
 */
export const OrganizationSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Windsurf Playbook',
    url: 'https://windsurf-docs.example.com',
    logo: 'https://windsurf-docs.example.com/img/logo.svg',
    description: 'The AI-Powered Developer Guideline',
    sameAs: [
      'https://github.com/banlyslash/windsurf-playbook',
      'https://slash.co/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: 'https://github.com/banlyslash/windsurf-playbook/issues',
    },
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

/**
 * WebSite schema for search engine integration
 */
export const WebSiteSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Windsurf Playbook',
    url: 'https://windsurf-docs.example.com',
    description: 'The AI-Powered Developer Guideline',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://windsurf-docs.example.com/search?q={search_term_string}',
      },
      query_input: 'required name=search_term_string',
    },
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

/**
 * Article schema for documentation pages
 */
export const ArticleSchema: React.FC<{
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}> = ({ title, description, url, datePublished, dateModified, author = 'Windsurf Team', image }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    image: image || 'https://windsurf-docs.example.com/img/docusaurus-social-card.jpg',
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://windsurf-docs.example.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Windsurf Playbook',
      logo: {
        '@type': 'ImageObject',
        url: 'https://windsurf-docs.example.com/img/logo.svg',
      },
    },
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

/**
 * BreadcrumbList schema for navigation
 */
export const BreadcrumbSchema: React.FC<{
  items: Array<{ name: string; url: string }>;
}> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

export default StructuredData;
