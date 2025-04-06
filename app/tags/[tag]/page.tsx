import React from 'react';
import { Tag } from '@/components/tag/tag';
import { getPostByTag } from '@/libs/blog-util';
import { posts } from '#site/content';
import { PostList } from '@/components/post/post-list';
import { getTagsCountMap } from '@/libs/tag-util';
import Link from 'next/link';
import { getPageMetadata } from '@/libs/metadata-util';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata(props: TagPageProps) {
  const params = await props.params;
  return getPageMetadata({
    title: `Posts with tag #${decodeURI(params.tag)}`,
  });
}

export default async function TagPage(props: TagPageProps) {
  const params = await props.params;
  const tag = params.tag.split('-').join(' ');
  const tagPosts = getPostByTag(tag, posts);
  const tagCountsMap = getTagsCountMap(tagPosts);

  return (
    <section className="flex w-full flex-col gap-5">
      <div className="flex items-center justify-between font-semibold">
        <h1 className="text-4xl">Tags</h1>
        <Link href={'/tags'} className="hover:text-blue transition-all">
          All tags →
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800">
        <Tag tag={tag} count={tagCountsMap[tag] ?? 0} />
      </div>
      <PostList posts={tagPosts} />
    </section>
  );
}
