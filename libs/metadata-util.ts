import { siteInfo } from '@/data/metadata';
import { Metadata } from 'next';

// Generate metadata for a page
export const getPageMetadata = (
  { title, description, ...rest }: Partial<Metadata>,
  image?: string
): Metadata => {
  const safeTitle = typeof title === 'string' ? title : '';
  return {
    title,
    openGraph: {
      title: safeTitle ? `${safeTitle} | ${siteInfo.title}` : siteInfo.title,
      description: description || siteInfo.description,
      url: './',
      siteName: siteInfo.title,
      images: image ? [image] : [siteInfo.socialCardUrl],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: safeTitle ? `${safeTitle} | ${siteInfo.title}` : siteInfo.title,
      card: 'summary_large_image',
      images: image ? [image] : [siteInfo.socialCardUrl],
    },
    ...rest,
  };
};
