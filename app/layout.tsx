import "@/css/prism.css";
import "@/css/tailwind.css";

import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogRocket from "@/components/LogRocket";
import LenisProvider from "@/components/Providers/LenisProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geniuskingsley.dev/"),
  title: {
    default: `${siteMetadata.title}`,
    template: `%s | ${siteMetadata.title}`,
  },
  description:
    "Explore my UI refactoring skills & intuitive problem-solving experiences with JavaScript.",
  verification: {
    google: "google-site-verification=sQQwR0g7vJR_SoOwiGlRmYPPgZApAJWJlAuyKuaAYYI",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
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
