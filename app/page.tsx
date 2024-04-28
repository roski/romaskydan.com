import { posts, Post } from '#site/content';
import { paginatePosts } from '@/libs/blog-util';
import { PostPreview } from '@/components/post/post-preview';

export default function Home() {
  const latestPosts = paginatePosts(posts, 1, 5);

  return (
    <>
      <section className="flex w-full flex-col gap-5">
        <h1 className="text-3xl font-black">Latest Posts</h1>
        <div>{!latestPosts.length && 'No blog found.'}</div>
        <div>
          {latestPosts.map((post: Post) => (
            <PostPreview post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
