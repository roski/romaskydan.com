import { getProject } from '@/libs/project-util';
import { Post, posts, projects } from '#site/content';
import { notFound } from 'next/navigation';
import ProjectPreview from '@/components/project/project-preview';
import { MdxContent } from '@/components/post/mdx';
import { getPostByTag } from '@/libs/blog-util';
import { PostList } from '@/components/post/post-list';
import { Metadata } from 'next';
import { getPageMetadata } from '@/libs/metadata-util';

interface ProjectPageProps {
  params: Promise<{
    project: string;
  }>;
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata(
  props: ProjectPageProps
): Promise<Metadata | undefined> {
  const params = await props.params;
  const projectSlug = decodeURI(params.project);
  const project = getProject(projectSlug, projects);
  if (!project) {
    return;
  }
  return getPageMetadata({
    title: project.title,
    description: project.description,
  });
}

export const generateStaticParams = () => {
  return projects.map((p) => ({ slug: p.slug.split('/') }));
};

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;

  const { project: projectSlug } = params;

  const project = getProject(projectSlug, projects);
  let projectPosts: Post[] = [];

  if (project?.tags) {
    project.tags.forEach((tag) => {
      projectPosts = [...projectPosts, ...getPostByTag(tag, posts)];
    });
  }

  if (!project) {
    notFound();
  }

  return (
    <article className="flex w-full flex-col gap-4">
      <ProjectPreview project={project} isHeader={true} />
      <div className="prose dark:prose-invert mt-5 w-full max-w-4xl">
        <MdxContent code={project.content} />
      </div>
      {projectPosts.length && (
        <div className="mt-20 flex w-full flex-col gap-5">
          <h1 className="text-4xl font-bold">Related posts</h1>
          <PostList posts={projectPosts} />
        </div>
      )}
    </article>
  );
}
