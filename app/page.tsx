import { posts } from '#site/content';
import { paginatePosts } from '@/libs/blog-util';
import Link from 'next/link';
import { PostList } from '@/components/post/post-list';

export default function Home() {
  const latestPosts = paginatePosts(posts, 1, 5);

  return (
    <>
      <section className="flex w-full flex-col gap-5">
        <div className="flex items-center justify-between font-semibold">
          <h1 className="text-4xl">Latest Posts</h1>
          <Link href={'/blog'} className="transition-all hover:text-blue">
            All posts →
          </Link>
        </div>
        <PostList posts={latestPosts} />
      </section>
    </>
  );
}
