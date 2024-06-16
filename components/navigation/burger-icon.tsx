import { motion } from 'framer-motion';
import classNames from 'classnames';

export interface BurgerProps {
  /** A callback which receives a single boolean argument, indicating if the icon is toggled. */
  onToggle: (toggled: boolean) => void;
  /** A way to provide your own state value. Can be used together with a state action (the `toggle` prop). */
  toggled: boolean;
}

export default function BurgerIcon({ onToggle, toggled = false }: BurgerProps) {
  const isToggled = toggled ? 'cross' : 'burger';
  const topVariants = {
    burger: {
      rotate: 0,
    },
    cross: {
      rotate: 45,
    },
  };
  const centerVariants = {
    burger: {
      opacity: 1,
    },
    cross: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    burger: {
      rotate: 0,
    },
    cross: {
      rotate: -45,
    },
  };

  const defaultDivClasses = 'h-0.5 w-5 origin-left rounded';
  const bgColorClass = toggled ? 'bg-white' : 'bg-black dark:bg-white';

  return (
    <button
      className="relative z-50 flex h-4 w-5 flex-col justify-between"
      onClick={() => onToggle(!toggled)}
      aria-label={toggled ? 'Close  menu' : 'Open menu'}>
      <motion.div
        variants={topVariants}
        animate={isToggled}
        initial="initial"
        className={classNames(defaultDivClasses, bgColorClass)}></motion.div>
      <motion.div
        variants={centerVariants}
        animate={isToggled}
        initial="initial"
        className={classNames(defaultDivClasses, bgColorClass)}></motion.div>
      <motion.div
        variants={bottomVariants}
        animate={isToggled}
        initial="initial"
        className={classNames(defaultDivClasses, bgColorClass)}></motion.div>
    </button>
  );
}
