import { siteInfo } from '@/data/metadata';
import { Feed } from 'feed';
import { sortPublicationByDate } from '@/libs/util';
import { posts } from '@/.velite';

const { url: siteUrl, description, title, language, author, email } = siteInfo;
export const feed = new Feed({
  title,
  description,
  id: siteUrl,
  link: siteUrl,
  language,
  image: `${siteUrl}/favicons/android-chrome-192x192.png`,
  favicon: `${siteUrl}/favicons/favicon.ico`,
  copyright: `© ${new Date().getFullYear()} ${title}`,
  feedLinks: {
    rss: `${siteUrl}/feed.xml`,
    json: `${siteUrl}/posts.json`,
  },
  author: {
    name: author,
    email,
    link: `${siteUrl}/about`,
  },
});

const blogPosts = sortPublicationByDate(posts);
blogPosts.forEach(({ slugAsParams, created, updated, title, description }) => {
  feed.addItem({
    title,
    id: `${siteUrl}/blog/${slugAsParams}`,
    link: `${siteUrl}/blog/${slugAsParams}`,
    description,
    author: [
      {
        name: author,
        email,
        link: `${siteUrl}/about`,
      },
    ],
    date: new Date(updated || created),
  });
});
