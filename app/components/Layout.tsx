"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 导航栏 */}
      <header className="flex justify-between items-center p-4 relative">
        <div className="text-2xl font-bold">
          {/*
          - Simplified/Traditional: 行
          - Special Unicode variant: ⾏
          */}
          <Link href="/">五行经络瑜伽</Link>
        </div>
        <nav className={`
          md:block
          ${isMenuOpen ? 'block' : 'hidden'}
          ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white shadow-lg z-50' : ''}
          md:relative md:shadow-none md:top-auto md:left-auto md:right-auto
        `}>
          <ul className={`
            md:flex md:space-x-4
            ${isMenuOpen ? 'flex flex-col space-y-2 p-4' : ''}
          `}>
            <li className="md:p-0 p-2 hover:bg-gray-100">
              <Link href="/inner-page">{language === 'en' ? 'HOME' : '首页'}</Link>
            </li>
            <li className="md:p-0 p-2 hover:bg-gray-100">
              <Link href="/inner-page">{language === 'en' ? 'PRODUCT' : '产品'}</Link>
            </li>
            <li className="md:p-0 p-2 hover:bg-gray-100">
              <Link href="/inner-page">{language === 'en' ? 'STORE' : '商店'}</Link>
            </li>
            <li className="md:p-0 p-2 hover:bg-gray-100">
              <Link href="/inner-page">{language === 'en' ? 'ABOUT US' : '关于我们'}</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleLanguage} className="p-2">
            <FaGlobe className="text-black" size={20} />
          </button>
          <div className="space-y-1 cursor-pointer md:hidden" onClick={toggleMenu}>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="flex-grow flex flex-col md:flex-row justify-between items-center p-8">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="flex flex-col md:flex-row justify-between items-center p-4 space-y-12 md:space-y-0">
        <div className="flex space-x-4 order-1">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <FaFacebookF className="text-white" size={16} />
          </div>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <FaInstagram className="text-white" size={16} />
          </div>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <FaTwitter className="text-white" size={16} />
          </div>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <FaWhatsapp className="text-white" size={16} />
          </div>
        </div>
        <div className="order-2">
          &copy; {new Date().getFullYear()} {language === 'en' ? 'Your Company Name' : '您的公司名称'}.
          {language === 'en' ? 'All rights reserved.' : '版权所有。'}
        </div>
      </footer>
    </div>
  );
}
