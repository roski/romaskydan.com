import Link from 'next/link';
import { Post } from '#site/content';
import { formatDate } from '@/libs/util';
import { Tags } from '@/components/tag';

export function PostPreview({ post }: { post: Post }) {
  const {
    title,
    description,
    slugAsParams,
    date,
    tags = [],
    metadata: { readingTime },
  } = post;
  return (
    <article className="flex flex-col gap-1 border-b py-5 first:border-t">
      <div className="flex gap-2 text-gray-500">
        <time dateTime={date}>{formatDate(date)}</time>
        <div>•</div>
        <div>{readingTime}min read</div>
      </div>
      <h2 className="text-2xl font-bold leading-8 tracking-tight hover:text-blue">
        <Link href={`/blog/${slugAsParams}`}>{title}</Link>
      </h2>
      <div>{description}</div>
      <Tags tags={tags} className="mt-1" />
    </article>
  );
}
