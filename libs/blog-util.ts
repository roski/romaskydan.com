import { Post } from '#site/content';

/** Sorts blog by date in descending order */
export function sortPostsByDate(posts: Post[], descending = true) {
  return getPublishedPosts(posts).sort((a, b) => {
    if (a.date > b.date) return descending ? -1 : 1;
    if (a.date < b.date) return descending ? 1 : -1;
    return 0;
  });
}

/** Paginates blog posts */
export function paginatePosts(posts: Post[], page: number, perPage: number) {
  return sortPostsByDate(posts).slice(perPage * (page - 1), perPage * page);
}

/** Get all tags from blog posts */
export function getPublishedPosts(posts: Post[]) {
  return posts.filter((post) => post.published);
}

/** Get post by slug */
export function getPost(slug: string, posts: Post[]): Post | undefined {
  return posts.find((post) => post.slugAsParams === slug);
}
