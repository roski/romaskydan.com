import { Post } from '#site/content';
import { sortPublicationByDate } from '@/libs/util';

/** Get post by slug */
export function getPost(slug: string, posts: Post[]): Post | undefined {
  return posts.find((post) => post.slugAsParams === slug);
}

/** Get all posts by tag */
export function getPostByTag(tag: string, posts: Post[]) {
  return sortPublicationByDate(posts).filter((post) =>
    post.tags?.includes(tag)
  );
}
