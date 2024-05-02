import { Project } from '#site/content';
import ProjectPreview from '@/components/project/project-preview';

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-5">
      {projects.map((project) => (
        <ProjectPreview project={project} key={project.slug} />
      ))}
    </div>
  );
}
