/*
 * The Sino Yoga website, primarily targeting overseas users, 
 * offers both Chinese and English versions. It includes features such as an online store, 
 * an introduction to the founder, and links to social media accounts.
 */

import Image from "next/image";
import Link from 'next/link';
import { RainbowButton } from '@/app/components/ui/rainbow-button';
import Ripple from '@/app/components/ui/ripple';

export default function Home() {
  return (
    <>
      <div className="w-full md:w-1/3 text-center md:text-left order-3 md:order-1">
        <p className="mb-4">
          传播中国式瑜伽<br />
          以东方智慧与传统医学诠释瑜伽<br />
          五行经络瑜伽改善人类生活方式
        </p>
        <Link href="/inner-page">
          <RainbowButton>Read More</RainbowButton>
        </Link>
      </div>
      {/* Right side: Profile photo with yellow breathing effect circle */}
      <div className="w-full md:w-1/3 relative flex justify-center items-center mb-8 md:mb-0 order-1 md:order-2">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full absolute overflow-hidden">
          <Ripple
            mainCircleSize={320}
            numCircles={3}
            startColor="rgba(255, 255, 0, 0.2)"
            endColor="rgba(255, 200, 0, 0.8)"
          />
        </div>
        <Image
          src="/person1.png"
          alt="Profile"
          width={240}
          height={240}
          className="relative z-10"
        />
      </div>

      <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end mb-8 md:mb-0 order-2 md:order-3">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-right">
          less is<br />more.
        </h1>
      </div>
    </>
  );
}
