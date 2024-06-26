'use client';
import Image from 'next/image';
import { siteInfo } from '@/data/metadata';

export function Intro() {
  const {
    introImage: { url, alt, width, height },
  } = siteInfo;

  return (
    <section className="flex w-full flex-col-reverse items-center gap-5 rounded-xl bg-slate-100 px-10 py-8 dark:bg-slate-800 lg:flex-row">
      <div className="flex flex-col justify-center">
        <h1 className="mb-5 text-4xl font-bold">
          Hey, I&apos;m Roman. Welcome to my world!
        </h1>
        <div className="text-xl">
          I&apos;m a software developer who explores the ever-evolving world of
          coding and loves sharing insights along the way. Dive into my little
          digital universe and let&apos;s learn together!
        </div>
      </div>
      <Image
        className="h-64 min-h-64 w-80 min-w-80"
        src={url}
        alt={alt}
        priority={true}
        width={width}
        height={height}
      />
    </section>
  );
}
