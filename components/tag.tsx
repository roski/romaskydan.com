interface TagProps {
  tag: string;
}

interface TagsProps {
  tags: string[];
  className?: string;
}

export function Tag({ tag }: TagProps) {
  return (
    <div className="rounded-md border border-transparent px-1 py-0.5 text-sm font-medium hover:border-black/30 dark:hover:border-white/30">
      <span className="text-blue">#</span>
      {tag}
    </div>
  );
}

export function Tags({ tags, className }: TagsProps) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
    </div>
  );
}
