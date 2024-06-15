import { getTagsCountMap, sortTagsByCount } from '@/libs/tag-util';
import { posts } from '@/.velite';
import { PostList } from '@/components/post/post-list';
import { Tags } from '@/components/tag/tags';
import { sortPublicationByDate } from '@/libs/util';

export default function TagsPage() {
  const sortedPosts = sortPublicationByDate(posts);
  const tagCountsMap = getTagsCountMap(posts);
  const sortedTags = sortTagsByCount(tagCountsMap);

  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-4xl font-semibold">Tags</h1>
      <div className="flex flex-wrap gap-2 rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800">
        <Tags tags={sortedTags} tagCounts={tagCountsMap} className="mt-1" />
      </div>
      <PostList posts={sortedPosts} />
    </section>
  );
}
