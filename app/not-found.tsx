import Image from 'next/image';
import { siteInfo } from '@/data/metadata';
import Link from 'next/link';

export default function NotFound() {
  const {
    notFound: { url, alt, width, height },
  } = siteInfo;
  return (
    <div className="section flex flex-1 flex-col items-center justify-center rounded-xl bg-slate-100 p-10  dark:bg-slate-800">
      <h1 className="text-center text-8xl font-extrabold text-blue">404</h1>
      <div className="text-center text-lg font-semibold">
        Page Lost in the Universe
      </div>
      <Image
        className="mt-10 w-96 dark:invert"
        src={url}
        alt={alt}
        priority={true}
        width={width}
        height={height}
      />
      <div className="mt-10 p-10 text-center text-gray-500">
        It looks like the page you were trying to visit has vanished into the
        universe. Click{' '}
        <Link href="/" className="font-bold text-blue">
          here
        </Link>{' '}
        to return to the homepage or check out our{' '}
        <Link href="/blog" className="font-bold text-blue">
          latest posts
        </Link>
        .
      </div>
    </div>
  );
}
