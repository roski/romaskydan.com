import { MetadataRoute } from 'next';
import { siteInfo } from '@/data/metadata';
import { sortPublicationByDate } from '@/libs/util';
import { posts, projects } from '#site/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const { url: siteUrl } = siteInfo;
  const generatedDate = new Date();
  const links = [
    {
      url: siteUrl,
      lastModified: generatedDate,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: generatedDate,
    },
  ];

  const blogPosts = sortPublicationByDate(posts);
  blogPosts.forEach(({ slugAsParams, created, updated }, index) => {
    if (index === 0) {
      links.push({
        url: `${siteUrl}/blog`,
        lastModified: new Date(updated || created),
      });
    }
    links.push({
      url: `${siteUrl}/blog/${slugAsParams}`,
      lastModified: new Date(updated || created),
    });
  });

  const projectsPosts = sortPublicationByDate(projects);
  projectsPosts.forEach(({ slugAsParams, created, updated }, index) => {
    if (index === 0) {
      links.push({
        url: `${siteUrl}/projects`,
        lastModified: new Date(updated || created),
      });
    }
    links.push({
      url: `${siteUrl}/projects/${slugAsParams}`,
      lastModified: new Date(updated || created),
    });
  });

  return links;
}
