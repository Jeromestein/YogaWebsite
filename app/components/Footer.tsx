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

"use client";

import { FaGlobe, FaTiktok, FaYoutube, FaWeixin } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [language, setLanguage] = useState('en');

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 space-y-12 md:space-y-0">
      <div className="flex space-x-4 order-1">
        {/* <a href="https://www.tiktok.com/@youraccount" target="_blank" rel="noopener noreferrer"> */}
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <FaTiktok className="text-white" size={16} />
        </div>
        {/* </a> */}
        {/* <a href="https://example.com/wechat" target="_blank" rel="noopener noreferrer"> */}
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <FaWeixin className="text-white" size={16} />
        </div>
        {/* </a> */}
        {/* <a href="https://youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer"> */}
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <FaYoutube className="text-white" size={16} />
        </div>
        {/* </a> */}
      </div>
      <div className="order-2">
        &copy; {new Date().getFullYear()} {language === 'en' ? 'Your Company Name' : '您的公司名称'}.
        {language === 'en' ? 'All rights reserved.' : '版权所有。'}
      </div>
    </footer>
  );
}
