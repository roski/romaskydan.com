import { getTagsCountMap, sortTagsByCount } from '@/libs/tag-util';
import { posts } from '@/.velite';
import { PostList } from '@/components/post/post-list';
import { sortPostsByDate } from '@/libs/blog-util';
import { Tags } from '@/components/tag/tags';

export default function TagsPage() {
  const sortedPosts = sortPostsByDate(posts);
  const tagCountsMap = getTagsCountMap(posts);
  const sortedTags = sortTagsByCount(tagCountsMap);

  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-4xl font-semibold">Tags</h1>
      <div className="flex flex-wrap gap-2 rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-900">
        <Tags tags={sortedTags} tagCounts={tagCountsMap} className="mt-1" />
      </div>
      <PostList posts={sortedPosts} />
    </section>
  );
}
