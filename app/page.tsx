import { posts, projects } from '#site/content';
import Link from 'next/link';
import { PostList } from '@/components/post/post-list';
import { paginatePublications } from '@/libs/util';
import ProjectList from '@/components/project/project-list';
import React from 'react';
import { Intro } from '@/components/intro';

export default function Home() {
  const latestPosts = paginatePublications(posts, 1, 3);
  const latestProjects = paginatePublications(projects, 1, 3);

  return (
    <>
      <Intro />
      <section className="mt-10 flex w-full flex-col gap-5">
        <div className="flex items-center justify-between font-semibold">
          <h1 className="text-4xl">Latest Posts</h1>
          <Link href={'/blog'} className="transition-all hover:text-blue">
            All posts →
          </Link>
        </div>
        <PostList posts={latestPosts} />
      </section>
      <section className="mt-10 flex w-full flex-col gap-10">
        <div className="flex items-center justify-between font-semibold">
          <h1 className="text-4xl">Latest projects</h1>
          <Link href={'/projects'} className="transition-all hover:text-blue">
            All projects →
          </Link>
        </div>
        <ProjectList projects={latestProjects} />
      </section>
    </>
  );
}
