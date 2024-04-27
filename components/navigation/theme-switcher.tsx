import classnames from 'classnames';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { FaLaptop } from 'react-icons/fa';
import { useTheme as useNextTheme } from 'next-themes';
import { useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Theme = 'dark' | 'light' | 'system';

const iconAnimation = (theme: Theme) => {
  const x = theme === 'dark' ? 100 : -100;
  return {
    hidden: {
      y: theme === 'system' ? 100 : 0,
      x: theme === 'system' ? 0 : x,
    },
    visible: {
      y: 0,
      x: 0,
    },
  };
};

function useTheme() {
  const { theme, setTheme } = useNextTheme();
  return { theme: theme as Theme, setTheme };
}

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  function toggleTheme() {
    const themeMap: Record<Theme, Theme> = {
      light: 'dark',
      dark: 'system',
      system: 'light',
    };
    setTheme(themeMap[theme]);
  }

  return (
    <button
      onClick={toggleTheme}
      className={classnames('h-5 w-5 overflow-hidden bg-transparent', {
        'text-blue-500': mounted && theme === 'dark',
        'text-orange-500': mounted && theme === 'light',
        'text-orange-500 dark:text-blue-500': mounted && theme === 'system',
      })}
      aria-label="Toggle theme">
      <motion.div
        key={theme}
        variants={iconAnimation(theme)}
        initial="hidden"
        animate="visible"
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
        {mounted && (
          <>
            {theme === 'light' && <FaSun />}
            {theme === 'dark' && <FaMoon />}
            {theme === 'system' && <FaLaptop />}
          </>
        )}
      </motion.div>
    </button>
  );
}
