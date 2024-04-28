import Link from 'next/link';
import Image from 'next/image';
import { siteInfo } from '@/data/metadata';
import React from 'react';
import Navbar from '@/components/navigation/nav';

const Logo = () => {
  const {
    title,
    mobileTittle,
    logo: { url, alt, width, height },
  } = siteInfo;
  return (
    <Link href={'/'} className="flex items-center space-x-2">
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        className="h-10 w-10"
        aria-label={alt}
        priority={true}
      />
      <span className="hidden font-semibold md:flex">{title}</span>
      <span className="font-semibold md:hidden">{mobileTittle}</span>
    </Link>
  );
};
const Header = () => {
  return (
    <header className="section mb-5 text-xl">
      <div className="basis-1/2 lg:basis-1/3">
        <Logo />
      </div>
      <div className="basis-1/2 lg:basis-2/3">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
