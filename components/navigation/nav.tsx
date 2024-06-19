'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavMenu from './nav-menu';
import NavIcons from './nav-icons';
import BurgerIcon from './burger-icon';
import { useScrollLock } from '@/providers/scroll-provider';

const MOBILE_MENU_ITEMS_ANIMATION = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

export default function Navbar() {
  const { lockScroll, unlockScroll } = useScrollLock();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [open, lockScroll, unlockScroll]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="flex h-full">
      <div className="hidden basis-1/2 lg:flex">
        <NavMenu />
      </div>
      <div className="flex basis-full items-center justify-end space-x-4 lg:basis-1/2">
        <NavIcons />
        <div className="flex lg:hidden">
          <BurgerIcon onToggle={setOpen} toggled={open} />
        </div>
      </div>
      {open && (
        <motion.div
          variants={MOBILE_MENU_ITEMS_ANIMATION}
          initial="closed"
          animate="opened"
          className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-8 bg-blue text-4xl text-white lg:hidden">
          <NavMenu isMobile={true} />
        </motion.div>
      )}
    </div>
  );
}
