import Link from 'next/link';
import { slug } from 'github-slugger';

interface TagProps {
  tag: string;
  count?: number;
}

export function Tag({ tag, count }: TagProps) {
  const tagSlug = slug(tag);
  return (
    <span className="rounded-md border border-transparent px-1 py-0.5 text-sm font-medium hover:border-blue dark:hover:border-white">
      <Link href={`/tags/${tagSlug}`}>
        <span className="text-blue">#</span>
        {tag} {count ? <span className="text-blue">({count})</span> : null}
      </Link>
    </span>
  );
}
