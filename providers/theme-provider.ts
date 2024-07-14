import { useTheme as useNextTheme } from 'next-themes';

export type Theme = SystemTheme | 'system';
export type SystemTheme = 'dark' | 'light';

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();

  return {
    theme: theme as Theme,
    setTheme,
    resolvedTheme: resolvedTheme as SystemTheme,
  };
}
