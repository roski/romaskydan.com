'use client';
import { Project } from '#site/content';
import { formatDate } from '@/libs/util';
import classNames from 'classnames';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  project: Project;
  isHeader?: boolean;
}

export default function ProjectPreview({
  project,
  isHeader,
}: ProjectCardProps) {
  const { title, description, created, source, slugAsParams, logo } = project;
  const router = useRouter();

  const handleClick = () => {
    if (!isHeader) {
      router.push(`/projects/${slugAsParams}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={classNames({
        'cursor-pointer': !isHeader,
      })}>
      <article
        className={classNames(
          'flex w-full gap-3 rounded-xl bg-slate-100 px-5 pb-5 pt-3 dark:bg-slate-800',
          {
            'hover:bg-slate-200 dark:hover:bg-slate-700': !isHeader,
          }
        )}>
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
            className={classNames('text-2xl font-semibold', {
              'md:text-4xl': isHeader,
            })}>
            {title}
          </h2>
          {description ?? <p>{description}</p>}
        </div>
      </article>
    </div>
  );
}
