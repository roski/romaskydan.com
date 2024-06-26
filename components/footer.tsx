'use client';
import { siteInfo } from '@/data/metadata';
import Link from 'next/link';
import SocialIcons from '@/components/navigation/social-icons';
import { motion } from 'framer-motion';
import { navHoverTap } from '@/libs/animation-util';
import { FaRssSquare } from 'react-icons/fa';
import { NavMenuItem } from '@/components/navigation/nav-menu';

const NAVIGATIONS: NavMenuItem[] = siteInfo.navigation;

function SiteMap() {
  return (
    <div className="flex gap-4">
      {NAVIGATIONS.map(({ name, link, hidden }) => {
        if (hidden) return null;
        return (
          <Link key={link} href={link}>
            <motion.div
              initial="normal"
              variants={navHoverTap}
              whileHover="hover"
              whileTap="tap">
              {name}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}

function RssIcon() {
  const rssLink = `${siteInfo.url}/feed.xml`;
  return (
    <Link href={rssLink} aria-label="Rss link" target="_blank">
      <motion.div
        initial="normal"
        variants={navHoverTap}
        whileHover="hover"
        whileTap="tap">
        <FaRssSquare />
      </motion.div>
    </Link>
  );
}

const Footer = () => {
  return (
    <footer className="section mt-14 flex-col gap-14 border-t !py-14 dark:border-slate-900">
      <div className="gap grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-bold">{siteInfo.author}</div>
          <div>{siteInfo.description}</div>
          <div className="flex gap-4">
            <SocialIcons />
            <RssIcon />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-lg font-bold">Sitemap</div>
          <SiteMap />
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <Link href="/">{siteInfo.author}</Link>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
      </div>
    </footer>
  );
};

export default Footer;
