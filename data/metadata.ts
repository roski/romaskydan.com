import { Metadata } from 'next';
import { getOpenGraphMetadata } from '@/libs/metadata-util';
import { GiscusProps } from '@giscus/react';

/** Blog information */
export const siteInfo = {
  url: 'https://romaskydan.com',
  title: 'Roman Skydan',
  mobileTittle: 'R. Skydan',
  author: 'Roman Skydan',
  email: 'roman@romaskydan.com',
  description: 'Developer, writer, and creator.',
  socialCardUrl: '/images/social-card.png',
  language: 'en-Us',
  theme: 'system',
  logo: {
    url: '/images/logo.svg',
    alt: 'Logo',
    width: 100,
    height: 50,
  },
  introImage: {
    url: '/images/intro.svg',
    alt: 'Intro image',
    width: 300,
    height: 260,
  },
  notFound: {
    url: '/images/not-found.svg',
    alt: '404 - Page not found',
    width: 248,
    height: 115,
  },
  navigation: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/blog',
      name: 'Blog',
    },
    {
      link: '/projects',
      name: 'Projects',
    },
    {
      link: '/about',
      name: 'About',
    },
  ],
  pageTitles: {
    blog: 'Blog',
    projects: 'Projects',
    about: 'About',
    tags: 'Tags',
  },
  socialLinks: {
    order: ['linkedin', 'github'],
    github: 'https://github.com/roski',
    linkedin: 'https://www.linkedin.com/in/roman-skydan',
    facebook: '',
    x: '',
    instagram: '',
    youtube: '',
  },
};

export const giscusInfo: GiscusProps = {
  id: 'comments',
  repo: 'roski/romaskydan.com',
  repoId: 'R_kgDOLyzzBw',
  category: 'Show and tell',
  categoryId: 'DIC_kwDOLyzzB84CgyD7',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '1',
  inputPosition: 'top',
  theme: 'preferred_color_scheme',
  lang: 'en',
};

/** Base site metadata */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: siteInfo.title,
    template: `%s | ${siteInfo.title}`,
  },
  description: siteInfo.description,
  openGraph: getOpenGraphMetadata({}, true),
  alternates: {
    types: {
      'application/rss+xml': `${siteInfo.url}/feed.xml`,
      'application/atom+xml': `${siteInfo.url}/atom.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
