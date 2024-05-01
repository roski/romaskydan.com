import { Post } from '#site/content';

interface Tags {
  [tag: string]: number;
}

export function getTagsCountMap(posts: Post[]) {
  return posts.reduce((tagsMap, post) => {
    post.tags?.forEach((tag) => {
      tagsMap[tag] = (tagsMap[tag] ?? 0) + 1;
    });
    return tagsMap;
  }, {} as Tags);
}

export function sortTagsByCount(tags: Tags) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}
