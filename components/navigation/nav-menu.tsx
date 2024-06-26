import { usePathname } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import classNames from 'classnames';
import { navHoverTap } from '@/libs/animation-util';
import { siteInfo } from '@/data/metadata';

export interface NavMenuItem {
  name: string;
  link: string;
  hidden?: boolean;
}

interface NavMenuItemProps extends NavMenuItem {
  isActive: boolean;
}

const NAVIGATIONS: NavMenuItem[] = siteInfo.navigation;

const ANIMATION_DURATION = 0.2;

function NavMenuItem({ name, link, isActive = false }: NavMenuItemProps) {
  return (
    <motion.div
      key={link}
      initial="normal"
      variants={navHoverTap}
      transition={{ duration: ANIMATION_DURATION }}
      whileHover={isActive ? 'normal' : 'hover'}
      whileTap={isActive ? 'normal' : 'tap'}
      className="relative flex items-center justify-center pb-1 pl-3 pr-3 pt-1">
      <Link
        key={link}
        href={link}
        className={classNames('z-10', { 'text-white': isActive })}>
        {name}
      </Link>
      {isActive && (
        <motion.div
          layoutId="active"
          transition={{ ANIMATION_DURATION }}
          className="absolute h-full w-full rounded-lg bg-blue"
        />
      )}
    </motion.div>
  );
}

function NavMobileMenuItem({ link, name, isActive = false }: NavMenuItemProps) {
  return (
    <Link
      key={link}
      href={link}
      className={classNames('z-10', { 'text-white/50': !isActive })}>
      {name}
    </Link>
  );
}

export default function NavMenu({ isMobile }: { isMobile?: boolean }) {
  const pathname = usePathname();
  const Item = isMobile ? NavMobileMenuItem : NavMenuItem;
  return (
    <nav className="flex w-full flex-col items-center justify-center space-x-2 space-y-2 lg:flex-row lg:space-y-0">
      {NAVIGATIONS.map(({ name, link, hidden }) => {
        const isActive = pathname.split('/')[1] === link.split('/')[1];
        return hidden ?? Item({ name, link, isActive });
      })}
    </nav>
  );
}
