import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { siteInfo } from '@/data/metadata';
import { Metadata } from 'next';

/** Get Open Graph metadata */
export function getOpenGraphMetadata(
  { title, description, images, ...rest }: Partial<OpenGraph>,
  home?: boolean
): OpenGraph {
  const safeTitle = typeof title === 'string' ? title : '';
  return {
    title: home || !title ? siteInfo.title : `${safeTitle} | ${siteInfo.title}`,
    description: description || siteInfo.description,
    url: './',
    siteName: siteInfo.title,
    images: images ? images : [siteInfo.socialCardUrl],
    locale: 'en_US',
    type: 'website',
    ...rest,
  };
}

export function getPageMetadata(
  { title, description, ...rest }: Partial<Metadata>,
  image?: string
): Metadata {
  const safeTitle = title || siteInfo.title;
  const safeDescription = description || siteInfo.description;
  return {
    title,
    openGraph: getOpenGraphMetadata({
      title: safeTitle,
      description: safeDescription,
      images: image,
    }),
    ...rest,
  };
}
