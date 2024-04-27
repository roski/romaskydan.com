import { Metadata } from 'next';
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

/** Blog information */
export const siteInfo = {
  url: 'https://romaskydan.com',
  title: 'Roman Skydan',
  author: 'Roman Skydan',
  description: 'Developer, writer, and creator.',
  socialCardUrl: '/images/social-card.png',
  language: 'en-us',
  theme: 'system',
  logo: {
    url: '/images/logo.svg',
    alt: 'Logo',
    width: 100,
    height: 50,
  },
  navigation: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/work',
      name: 'Work',
    },
    {
      link: '/blog',
      name: 'Blog',
    },
  ],
  socialLinks: {
    github: 'https://github.com/roski',
    linkedin: 'https://www.linkedin.com/in/roman-skydan',
    facebook: '',
    x: '',
    instagram: '',
    youtube: '',
  },
};

/** Open Graph metadata */
const openGraphMetadata: OpenGraph = {
  title: siteInfo.title,
  description: siteInfo.description,
  url: siteInfo.url,
  siteName: siteInfo.title,
  images: [siteInfo.socialCardUrl],
  locale: 'en_US',
  type: 'website',
};

/** Base site metadata */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: siteInfo.title,
    template: `%s | ${siteInfo.title}`,
  },
  description: siteInfo.description,
  openGraph: openGraphMetadata,
};
