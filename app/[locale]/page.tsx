/*
 * The Sino Yoga website, primarily targeting overseas users, 
 * offers both Chinese and English versions. It includes features such as an online store, 
 * an introduction to the founder, and links to social media accounts.
 */

import Image from "next/image";
import Link from 'next/link';
import { RainbowButton } from '@/app/components/ui/rainbow-button';
import Ripple from '@/app/components/ui/ripple';
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <div className="w-full md:w-1/3 text-center md:text-left order-3 md:order-1">
        {/**
           * Introduction section with bullet points.
           * Each introduction line is prefixed with a dot and uses grid layout
           * to ensure proper text wrapping and alignment with the bullet point.
           */}
        <p className="mb-4">
          {['introduction-1', 'introduction-2', 'introduction-3'].map((key) => (
            <div key={key} className="grid grid-cols-[12px_1fr] gap-1 mb-2">
              <span>·</span>
              <span>{t(key)}</span>
            </div>
          ))}
        </p>
        <Link href="/inner-page">
          <RainbowButton>{t("moreButton")}</RainbowButton>
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
          {t("slogan-1")}<br />{t("slogan-2")}
        </h1>
      </div>
    </>
  );
}
