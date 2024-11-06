/**
 * Header Component
 * 
 * A responsive website header that provides:
 * - Bilingual support (English/Chinese) with language switcher
 * - Responsive navigation with hamburger menu for mobile
 * - Header with site title and navigation
 * 
 * Used as the main header for all pages in the application.
 */

import { Link, Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const t = useTranslations("Header");
  // Retrieves the active locale
  const locale = useLocale() as Locale;

  return (
    <header className="flex justify-between items-center p-4 relative">
      <div className="text-2xl font-bold">
        <Link href="/">{t("appTitle")}</Link>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="block">
          <ul className="flex space-x-4">
            <li className="p-0 hover:bg-gray-100">
              <Link href="/about-us">{t("navLinks.aboutUs")}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <LocaleSwitcher locale={locale} />
    </header>
  );
}
