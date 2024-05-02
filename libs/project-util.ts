import { Project } from '#site/content';

/** Get project by slug */
export function getProject(
  slug: string,
  projects: Project[]
): Project | undefined {
  return projects.find((project) => project.slugAsParams === slug);
}
