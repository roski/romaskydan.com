import { getPost } from '@/libs/blog-util';
import { posts } from '#site/content';
import { notFound } from 'next/navigation';
import { MdxContent } from '@/components/post/mdx';
import { PostPreview } from '@/components/post/post-preview';

export const generateStaticParams = () => {
  return posts.map((p) => ({ slug: p.slug.split('/') }));
};

export default function PostPage({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const postSlug = slug.join('/');
  const post = getPost(postSlug, posts);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="flex w-full flex-col gap-4">
      <PostPreview post={post} isPostHeader={true} />
      <div className="prose mt-4 w-full max-w-4xl dark:prose-invert">
        <MdxContent code={post.content} />
      </div>
    </article>
  );
}
