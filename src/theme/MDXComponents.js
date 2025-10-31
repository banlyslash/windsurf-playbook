import React from 'react';
// Import the original MDX components
import MDXComponents from '@theme-original/MDXComponents';
// Import our custom MDX components
import CustomMDXComponents from '../components/MDXComponents';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add our custom components
  ...CustomMDXComponents,
};
