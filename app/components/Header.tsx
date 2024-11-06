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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-4 relative">
      <div className="text-2xl font-bold">
        {/*
        - Simplified/Traditional: 行
        - Special Unicode variant: ⾏
        */}
        <Link href="/">五行经络瑜伽</Link>
      </div>
      <div className="flex items-center space-x-4">
        <nav className={`
          md:block
          ${isMenuOpen ? 'block' : 'hidden'}
          ${isMenuOpen ? 'absolute top-full right-0 bg-white shadow-lg z-50' : ''}
          md:relative md:shadow-none md:top-auto md:right-auto
        `}>
          <ul className={`
            md:flex md:space-x-4
            ${isMenuOpen ? 'flex flex-col space-y-2 p-4' : ''}
          `}>
            <li className="md:p-0 p-2 hover:bg-gray-100">
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
        <div className="space-y-1 cursor-pointer md:hidden" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>
    </header>
  );
}
