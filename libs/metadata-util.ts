import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { siteInfo } from '@/data/metadata';
import { Metadata } from 'next';

/** Get Open Graph metadata */
export function getOpenGraphMetadata(
  { title, description, url, images, ...rest }: Partial<OpenGraph>,
  home?: boolean
): OpenGraph {
  if (!siteInfo) throw new Error('Site info is not defined');
  if (typeof title !== 'string') throw new Error('Title must be a string');
  return {
    title: home || !title ? siteInfo.title : `${title} | ${siteInfo.title}`,
    description: description || siteInfo.description,
    url: url || siteInfo.url,
    siteName: siteInfo.title,
    images: images ? images : [siteInfo.socialCardUrl],
    locale: 'en_US',
    type: 'website',
    ...rest,
  };
}

export function getPageMetadata({
  title,
  openGraph,
  ...rest
}: Partial<Metadata>): Metadata {
  return {
    title,
    openGraph: getOpenGraphMetadata({
      title: title ?? siteInfo.title,
      ...openGraph,
    }),
    ...rest,
  };
}
