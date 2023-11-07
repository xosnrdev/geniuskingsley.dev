import '@/css/prism.css';
import '@/css/tailwind.css';
import { GeistMono, GeistSans } from 'geist/font';

import Analytics from '@/components/Analytics';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LogRocket from '@/components/LogRocket';
import LenisProvider from '@/components/Providers/LenisProvider';
import ThemeProvider from '@/components/Providers/ThemeProvider';
import { Metadata } from 'next';
import siteMetadata from 'content/siteMetadata';

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),

  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
    creator: siteMetadata.twitterHandle,
  },
};
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <LenisProvider>
            <main>{children}</main>
          </LenisProvider>
          <Footer />
          <LogRocket />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
