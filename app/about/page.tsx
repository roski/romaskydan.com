import { Card } from '@/components/card';
import Link from 'next/link';
import React from 'react';
import { HiExternalLink } from 'react-icons/hi';

const blogReasons = [
  {
    title: 'Learning and Sharing',
    text: 'I have a unique ability to visualize complex ideas and patterns. I hope to make complex concepts more understandable through my illustrations.',
  },
  {
    title: 'Personal Experience',
    text: 'I write about what I know and have applied in practice. My articles are based on real tasks and solutions, not just theory.',
  },
  {
    title: 'Openness',
    text: 'I am open to feedback and always happy to meet new people and engage in discussions.',
  },
];

export default function AboutPage() {
  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-4xl font-bold">About me</h1>
      <p>
        I&apos;m Roman Skydan. I live in Kyiv, Ukraine, with my girlfriend and
        two cats.
      </p>
      <p>
        I consider myself a pretty good web developer and a bit of a designer.
        My IT career started about 10 years ago. Before that, I was positioning
        myself as a designer, dreaming of one day creating my own studio. During
        my last years at university, I even worked as an art director for an
        advertising agency. But fate led me to programming, and now I
        couldn&apos;t be happier. Today, I develop web application interfaces,
        striving to make them not only beautiful but also user-friendly.
      </p>
      <p>
        Currently, I work in front-end development using technologies like
        Angular and React, and anything related to JavaScript. However, my
        interest in technology doesn&apos;t stop there. By the way, my blog is
        written in Next.js.
      </p>
      <h1 className="mt-3 text-4xl font-bold">Why do I run this blog?</h1>
      <div className="flex flex-col gap-4 md:flex-row">
        {blogReasons.map(({ title, text }) => (
          <Card title={title} key={title}>
            {text}
          </Card>
        ))}
      </div>
      <h1 className="mt-3 text-4xl font-bold">How I Spend My Free Time?</h1>
      <p>
        How I Spend My Free Time I spend my free time in various ways. I enjoy
        watching movies, particularly science fiction and comedies, and I often
        find myself immersed in a good book. Occasionally, I play computer
        games—not because I’m a gaming enthusiast, but because it’s a way to
        relax.
      </p>
      <p>
        When inspiration strikes, I might pick up some paints or pencils and
        start drawing. I also have an interest in electronics, although I’m
        still learning the ropes. Many evenings are spent soldering circuits,
        hoping they’ll work by the end of the night—though that’s not always the
        case!
      </p>
      <p>
        Additionally, I have a 3D printer, which means I occasionally get ideas
        for new projects. I model and print various items, from casings for my
        latest gadget to unique creations that pop into my mind.
      </p>
      <p>
        Walking is another activity I enjoy; it helps clear my mind and keeps me
        active.
      </p>
      <p>
        These are the activities that fill my free time, allowing me to unwind
        and explore my creativity.
      </p>
      <h1 className="mt-3 text-4xl font-bold">A Bit About Ukraine</h1>
      <Card>
        <p>
          Ukraine is my homeland, and I am proud to live here. We have our own
          culture, traditions, and history. Unfortunately, my country is
          currently at war, initiated by Russia&apos;s invasion of our
          territory. I hope my blog helps the world learn more about our country
          and our traditions, and I promise to occasionally share stories about
          life in Ukraine. If you want to learn more about the situation in
          Ukraine, I recommend visiting{' '}
          <Link
            href="https://war.ukraine.ua/"
            className="inline-flex items-center gap-1 font-bold hover:text-blue">
            this site
            <HiExternalLink />
          </Link>
          .
        </p>
      </Card>
    </section>
  );
}
