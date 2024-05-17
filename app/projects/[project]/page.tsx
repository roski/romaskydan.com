import { getProject } from '@/libs/project-util';
import { projects } from '#site/content';
import { notFound } from 'next/navigation';
import ProjectPreview from '@/components/project/project-preview';
import { MdxContent } from '@/components/post/mdx';
import { Metadata } from 'next';
import { getPageMetadata } from '@/libs/metadata-util';
import { siteInfo } from '@/data/metadata';

interface ProjectPageProps {
  params: {
    project: string;
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string[] };
}): Promise<Metadata | undefined> {
  const postSlug = slug.join('/');
  const project = getProject(postSlug, projects);

  if (!project) {
    return;
  }

  const { title, description, date } = project;
  const publishedTime = new Date(date).toISOString();
  return getPageMetadata({
    title,
    description,
    openGraph: {
      description,
      type: 'article',
      publishedTime,
      url: './',
      authors: [siteInfo.author],
    },
  });
}

// eslint-disable-next-line @typescript-eslint/require-await
export const generateStaticParams = async () => {
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
