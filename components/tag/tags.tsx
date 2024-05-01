import { Tag } from '@/components/tag/tag';

interface TagsProps {
  tags: string[];
  tagCounts?: Record<string, number>;
  className?: string;
}

export function Tags({ tags, className, tagCounts }: TagsProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {tags?.map((tag) => (
        <Tag tag={tag} key={tag} count={tagCounts?.[tag] ?? 0} />
      ))}
    </div>
  );
}
