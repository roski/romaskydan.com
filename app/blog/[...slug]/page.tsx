export default function PostPage({ params: { slug } }: { params: { slug: string[] } }) {
  return <article>{slug.join('/')}</article>;
}
