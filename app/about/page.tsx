import { Card } from '@/components/card';
import Link from 'next/link';
import React from 'react';
import { HiExternalLink } from 'react-icons/hi';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { ButtonLink } from '@/components/button-link';
import { siteInfo } from '@/data/metadata';
import { getPageMetadata } from '@/libs/metadata-util';

const blogReasons = [
  {
    image: '/images/learning_and_share.svg',
    title: 'Learning and Sharing',
    text: 'I have a unique ability to visualize complex ideas and patterns. I hope to make complex concepts more understandable through my illustrations.',
  },
  {
    image: '/images/helping_others.svg',
    title: 'Helping Others',
    text: 'I share my findings and tips to make the programming journey easier for others.',
  },
  {
    image: '/images/small_steps.svg',
    title: 'Small Steps',
    text: 'I believe all big projects start with small steps. My blog is a small step towards something bigger.',
  },
];

const { socialLinks, email } = siteInfo;
const contactLinks = [
  {
    icon: <FaEnvelope />,
    url: `mailto:${email}`,
    title: 'Email',
  },
  {
    icon: <FaGithub />,
    url: socialLinks.github,
    title: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    url: socialLinks.linkedin,
    title: 'LinkedIn',
  },
];

export const metadata = getPageMetadata({ title: 'About' });

export default function AboutPage() {
  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-4xl font-bold">About me</h1>
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
        <div className="flex w-auto flex-col md:w-2/3">
          <p>
            I&apos;m Roman Skydan. I live in Kyiv, Ukraine, with my girlfriend
            and two cats.
          </p>
          <p>
            I consider myself a pretty good web developer and a bit of a
            designer. My IT career started about 10 years ago. Before that, I
            was positioning myself as a designer, dreaming of one day creating
            my own studio. During my last years at university, I even worked as
            an art director for an advertising agency. But fate led me to
            programming, and now I couldn&apos;t be happier. Today, I develop
            web application interfaces, striving to make them not only beautiful
            but also user-friendly.
          </p>
          <p>
            Currently, I work in front-end development using technologies like
            Angular and React, and anything related to JavaScript. However, my
            interest in technology doesn&apos;t stop there. By the way, my blog
            is written in Next.js.
          </p>
        </div>
        <div className="h-96 w-auto overflow-hidden rounded-xl md:w-1/3">
          <Image
            className="h-full object-cover object-top sm:object-right"
            src="/images/my-photo.jpg"
            alt="My photo"
            width={854}
            height={1280}
          />
        </div>
      </div>
      <h1 className="mt-3 text-4xl font-bold">Why do I run this blog?</h1>
      <div className="flex flex-col gap-4 md:flex-row">
        {blogReasons.map(({ title, text, image }) => (
          <Card title={title} key={title}>
            <div className="flex flex-col">
              <Image
                className="h-36 min-h-36 w-36 min-w-36 self-center"
                src={image}
                alt={title}
                priority={true}
                width="100"
                height="100"
              />
              {text}
            </div>
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
      <h1 className="mt-3 text-4xl font-bold">How contact me?</h1>
      <div className="flex flex-col gap-3 text-white md:flex-row">
        {contactLinks.map(({ icon, url, title }) => (
          <ButtonLink href={url} className="flex-1" key={title}>
            <div className="flex items-center gap-3">
              {icon}
              {title}
            </div>
          </ButtonLink>
        ))}
      </div>
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
