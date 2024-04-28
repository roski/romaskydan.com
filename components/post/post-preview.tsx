import Link from 'next/link';
import { Post } from '#site/content';
import { formatDate } from '@/libs/util';
import { Tag } from '@/components/tag';

export function PostPreview({ post }: { post: Post }) {
  const { title, description, slugAsParams, date, tags } = post;
  return (
    <article className="flex flex-col border-b py-5 first:border-t">
      <time dateTime={date} className="text-gray-500">
        {formatDate(date)}
      </time>
      <h2 className="text-2xl font-bold leading-8 tracking-tight">
        <Link href={`/blog/${slugAsParams}`}>{title}</Link>
      </h2>
      <p>{description}</p>
      <div className="mt-2 flex gap-1">{tags?.map((tag) => <Tag tag={tag} key={tag} />)}</div>
    </article>
  );
}
