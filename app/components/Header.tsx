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

"use client";
import { FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [language, setLanguage] = useState('en');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 relative">
      <div className="text-2xl font-bold">
        <Link href="/">五行经络瑜伽</Link>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="block">
          <ul className="flex space-x-4">
            <li className="p-0 hover:bg-gray-100">
              <Link href="/about-us">{language === 'en' ? 'ABOUT US' : '关于我们'}</Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={toggleLanguageMenu}
          className="p-2 relative cursor-pointer"
        >
          <FaGlobe className="text-black" size={20} />
          <div className={`${isLanguageMenuOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-lg`}>
            <button
              onClick={() => {
                setLanguage('en');
                setIsLanguageMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'en' ? 'bg-gray-100' : ''}`}
            >
              English
            </button>
            <button
              onClick={() => {
                setLanguage('zh');
                setIsLanguageMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'zh' ? 'bg-gray-100' : ''}`}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
