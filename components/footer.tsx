import { siteInfo } from '@/data/metadata';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="section flex justify-center gap-x-2 p-5">
      <Link href="/">{siteInfo.author}</Link>
      <div>{` • `}</div>
      <div>{`© ${new Date().getFullYear()}`}</div>
    </footer>
  );
};

export default Footer;
