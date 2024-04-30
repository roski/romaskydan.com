import { getPost } from '@/libs/blog-util';
import { posts } from '#site/content';
import { notFound } from 'next/navigation';
import { MdxContent } from '@/components/mdx';
import { Tags } from '@/components/tag';
import { formatDate } from '@/libs/util';

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

  const { title, description, date, tags = [], content } = post;

  return (
    <article className="prose w-full max-w-4xl dark:prose-invert">
      <time dateTime={date}>{formatDate(date)}</time>
      <h1 className="mb-1">{title}</h1>
      {description && (
        <p className="text-muted-foreground mb-1 mt-0 text-xl">{description}</p>
      )}
      <Tags tags={tags} className="mb-2" />
      <hr className="my-6" />
      <MdxContent code={content} />
    </article>
  );
}
