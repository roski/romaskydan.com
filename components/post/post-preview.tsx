import Link from 'next/link';
import { Post } from '#site/content';
import { formatDate } from '@/libs/util';
import { HiOutlineBookOpen } from 'react-icons/hi';
import classNames from 'classnames';
import { Tags } from '@/components/tag/tags';

interface PostPreviewProps {
  post: Post;
  isPostHeader?: boolean;
}

export function PostPreview({ post, isPostHeader }: PostPreviewProps) {
  const {
    title,
    description,
    slugAsParams,
    created,
    tags = [],
    metadata: { readingTime },
  } = post;
  return (
    <article
      className={classNames(
        'flex flex-col gap-1 border-b py-5 last:border-b-0 dark:border-slate-900',
        {
          'first:border-t': !isPostHeader,
        }
      )}>
      <div className="flex gap-2 text-gray-500">
        <time dateTime={created}>{formatDate(created)}</time>
        <div>•</div>
        <div className="flex items-center gap-1">
          <HiOutlineBookOpen />
          {readingTime}min read
        </div>
      </div>
      <h2
        className={classNames('font-semibold', {
          'text-4xl': isPostHeader,
          'text-xl md:text-2xl': !isPostHeader,
        })}>
        {isPostHeader ? (
          title
        ) : (
          <Link href={`/blog/${slugAsParams}`} className="hover:text-blue">
            {title}
          </Link>
        )}
      </h2>
      <div>{description}</div>
      <Tags tags={tags} className="mt-1" />
    </article>
  );
}
