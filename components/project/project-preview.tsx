import { Project } from '#site/content';
import { formatDate } from '@/libs/util';
import classNames from 'classnames';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  isHeader?: boolean;
}

export default function ProjectPreview({
  project,
  isHeader,
}: ProjectCardProps) {
  const { title, description, created, source, slugAsParams, logo } = project;
  return (
    <article className="flex w-full gap-3 rounded-xl bg-slate-100 px-5 py-3 dark:bg-slate-800">
      {logo && (
        <div className="flex w-1/12 items-center justify-center">
          <Image src={logo} alt={title} />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between">
          <time dateTime={created} className="text-gray-500">
            {formatDate(created, true)}
          </time>
          {source && (
            <Link
              href={source}
              aria-label="Project source"
              className="hover:text-blue">
              <FaGithub />
            </Link>
          )}
        </div>

        <h2
          className={classNames('font-semibold', {
            'text-4xl': isHeader,
            'text-2xl': !isHeader,
          })}>
          {isHeader ? (
            title
          ) : (
            <Link
              href={`/projects/${slugAsParams}`}
              className="hover:text-blue">
              {title}
            </Link>
          )}
        </h2>
        {description ?? <p>{description}</p>}
      </div>
    </article>
  );
}
