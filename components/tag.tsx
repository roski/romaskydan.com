interface TagProps {
  tag: string;
}

export function Tag({ tag }: TagProps) {
  return (
    <div className="flex items-center rounded-md bg-blue px-2 py-1 text-sm text-white">
      {tag}
    </div>
  );
}
