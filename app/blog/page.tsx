import { sortPostsByDate } from '@/libs/blog-util';
import { Post, posts } from '#site/content';
import { PostPreview } from '@/components/post/post-preview';

export default function BlogPage() {
  const blogPosts = sortPostsByDate(posts);
  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-4xl font-semibold">Blog</h1>
      <div>
        {blogPosts.map((post: Post) => (
          <PostPreview post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
}
