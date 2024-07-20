import { projects } from '#site/content';
import { sortPublicationByDate } from '@/libs/util';
import ProjectList from '@/components/project/project-list';
import { getPageMetadata } from '@/libs/metadata-util';

export const metadata = getPageMetadata({
  title: 'Projects',
});

export default function ProjectsPage() {
  const sortedProjects = sortPublicationByDate(projects);
  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-4xl font-bold">Projects</h1>
      <ProjectList projects={sortedProjects} />
    </section>
  );
}
