'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ScrollLockContext = createContext({
  lockScroll: () => {},
  unlockScroll: () => {},
});

export const useScrollLock = () => useContext(ScrollLockContext);

export const ScrollLockProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLocked, setIsLocked] = useState(false);

  const lockScroll = () => setIsLocked(true);
  const unlockScroll = () => setIsLocked(false);

  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLocked]);

  return (
    <ScrollLockContext.Provider value={{ lockScroll, unlockScroll }}>
      {children}
    </ScrollLockContext.Provider>
  );
};
