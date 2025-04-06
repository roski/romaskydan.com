import { getPost } from '@/libs/blog-util';
import { posts } from '#site/content';
import { notFound } from 'next/navigation';
import { MdxContent } from '@/components/post/mdx';
import { PostPreview } from '@/components/post/post-preview';
import { Comments } from '@/components/comments';
import { Metadata } from 'next';
import { getPageMetadata } from '@/libs/metadata-util';
import { siteInfo } from '@/data/metadata';

interface BlogPostProps {
  params: Promise<{
    slug: string[];
  }>;
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata(
  props: BlogPostProps
): Promise<Metadata | undefined> {
  const params = await props.params;

  const { slug } = params;

  const postSlug = slug.join('/');
  const post = getPost(postSlug, posts);
  if (!post) {
    return;
  }
  const publishedAt = new Date(post.created).toISOString();
  const modifiedAt = new Date(post.updated || post.created).toISOString();
  return getPageMetadata({
    title: post.title ?? postSlug,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: siteInfo.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: [siteInfo.socialCardUrl],
      authors: [siteInfo.author],
    },
  });
}

export const generateStaticParams = () => {
  return posts.map((p) => ({ slug: p.slug.split('/') }));
};

export default async function PostPage(props: BlogPostProps) {
  const params = await props.params;

  const { slug } = params;

  const postSlug = slug.join('/');
  const post = getPost(postSlug, posts);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="flex w-full flex-col gap-4">
      <PostPreview post={post} isPostHeader={true} />
      <div className="prose dark:prose-invert mt-4 w-full max-w-4xl">
        <MdxContent code={post.content} />
      </div>
      <Comments />
    </article>
  );
}
