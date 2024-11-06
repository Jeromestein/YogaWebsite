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

import Header from './Header';
import Footer from './Footer';
import { FaGlobe, FaTiktok, FaYoutube, FaWeixin } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* 主要内容 */}
      <main className="flex-grow flex flex-col md:flex-row justify-between items-center p-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
