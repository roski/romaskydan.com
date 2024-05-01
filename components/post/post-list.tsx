import { Post } from '#site/content';
import { PostPreview } from '@/components/post/post-preview';

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post: Post) => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </div>
  );
}
