interface TagProps {
  tag: string;
}
export function Tag({ tag }: TagProps) {
  return <div className="rounded-md bg-blue px-2 py-1 text-sm text-white">{tag}</div>;
}
