import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { baseMetadata, siteInfo } from '@/data/metadata';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteInfo.language} className={montserrat.className} suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ff6734" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <body className="bg-white text-black transition duration-500 dark:bg-gray-950 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme={siteInfo.theme} enableSystem>
          <div className="flex h-screen flex-col justify-between">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
