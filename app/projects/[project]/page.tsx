import { getProject } from '@/libs/project-util';
import { projects } from '#site/content';
import { notFound } from 'next/navigation';
import ProjectPreview from '@/components/project/project-preview';
import { MdxContent } from '@/components/post/mdx';

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

  if (!project) {
    notFound();
  }

  return (
    <article className="flex w-full flex-col gap-4">
      <ProjectPreview project={project} isHeader={true} />
      <div className="prose mt-5 w-full max-w-4xl dark:prose-invert">
        <MdxContent code={project.content} />
      </div>
    </article>
  );
}
