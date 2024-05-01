import { sortPostsByDate } from '@/libs/blog-util';
import { posts } from '#site/content';
import { PostList } from '@/components/post/post-list';

export default function BlogPage() {
  const blogPosts = sortPostsByDate(posts);
  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-4xl font-semibold">Blog</h1>
      <PostList posts={blogPosts} />
    </section>
  );
}
