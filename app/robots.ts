import { MetadataRoute } from 'next';
import { siteInfo } from '@/data/metadata';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/cv/',
    },
    sitemap: `${siteInfo.url}/sitemap.xml`,
  };
}
