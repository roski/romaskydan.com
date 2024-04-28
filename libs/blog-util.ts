import { Post } from '#site/content';

/** Sorts blog by date in descending order */
export function sortPostsByDate(posts: Post[], descending = true) {
  return getPublishedPosts(posts).sort((a, b) => {
    if (a.date > b.date) return descending ? -1 : 1;
    if (a.date < b.date) return descending ? 1 : -1;
    return 0;
  });
}

export function paginatePosts(posts: Post[], page: number, perPage: number) {
  return sortPostsByDate(posts).slice(perPage * (page - 1), perPage * page);
}

export function getPublishedPosts(posts: Post[]) {
  return posts.filter((post) => post.published);
}
