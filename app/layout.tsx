import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { baseMetadata, siteInfo } from '@/data/metadata';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteInfo.language} className={montserrat.className}>
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#ff6734' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/icons/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
      <body>{children}</body>
    </html>
  );
}
