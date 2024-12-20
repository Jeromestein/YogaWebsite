/**
 * Layout Component
 * 
 * A responsive website layout wrapper that provides:
 * - Bilingual support (English/Chinese) with language switcher
 * - Responsive navigation with hamburger menu for mobile
 * - Header with site title and navigation
 * - Main content area
 * - Footer with social media icons and copyright
 * 
 * Used as the main layout wrapper for all pages in the application.
 */
import localFont from "next/font/local";
import "@/app/globals.css";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { type Locale, locales } from "@/i18n.config";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

const geistSans = localFont({
  // use relative path, not @
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/*
 * We pull in the current locale
 * generated from `generateStaticParms`
 * or the current request route.
*/
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex flex-col md:flex-row justify-between items-center p-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
