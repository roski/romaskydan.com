'use client';
import Giscus from '@giscus/react';
import { giscusInfo } from '@/data/metadata';
import { SystemTheme, Theme, useTheme } from '@/providers/theme-provider';
import { Theme as GiscusTheme } from 'giscus';

function getGiscusTheme(theme: Theme, system: SystemTheme): GiscusTheme {
  if (theme === 'dark') return 'transparent_dark';
  if (theme === 'light') return 'light';
  if (theme === 'system') {
    return system === 'dark' ? 'transparent_dark' : 'light';
  }
  return 'transparent_dark';
}

export function Comments() {
  const { theme, resolvedTheme } = useTheme();
  const gistTheme = getGiscusTheme(theme, resolvedTheme);
  return <Giscus {...giscusInfo} theme={gistTheme} />;
}
