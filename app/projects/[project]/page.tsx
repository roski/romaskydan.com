import { getProject } from '@/libs/project-util';
import { Post, posts, projects } from '#site/content';
import { notFound } from 'next/navigation';
import ProjectPreview from '@/components/project/project-preview';
import { MdxContent } from '@/components/post/mdx';
import { getPostByTag } from '@/libs/blog-util';
import { PostList } from '@/components/post/post-list';

interface ProjectPageProps {
  params: {
    project: string;
  };
}

export const generateStaticParams = () => {
  return projects.map((p) => ({ slug: p.slug.split('/') }));
};

export default function ProjectPage({
  params: { project: projectSlug },
}: ProjectPageProps) {
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
      <div className="prose mt-5 w-full max-w-4xl dark:prose-invert">
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
