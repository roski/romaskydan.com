import { getPost } from '@/libs/blog-util';
import { posts } from '#site/content';
import { notFound } from 'next/navigation';
import { MdxContent } from '@/components/mdx';
import { Tag } from '@/components/tag';

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
    <article className="prose w-full max-w-4xl dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      <div className="mb-2 flex gap-2">
        {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
      </div>
      {post.description ? (
        <p className="text-muted-foreground mt-0 text-xl">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MdxContent code={post.content} />
    </article>
  );
}
