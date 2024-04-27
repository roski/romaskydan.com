import React from 'react';
import SocialIcons from './social-icons';
import ThemeSwitcher from './theme-switcher';

export default function NavIcons() {
  return (
    <div className="flex items-center space-x-4">
      <SocialIcons />
      <ThemeSwitcher />
    </div>
  );
}
