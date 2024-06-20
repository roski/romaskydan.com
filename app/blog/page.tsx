import { posts } from '#site/content';
import { PostList } from '@/components/post/post-list';
import { sortPublicationByDate } from '@/libs/util';

export default function BlogPage() {
  const blogPosts = sortPublicationByDate(posts);
  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-4xl font-bold">Blog</h1>
      <PostList posts={blogPosts} />
    </section>
  );
}
