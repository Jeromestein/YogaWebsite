/*
 * The About Us Page
 * Introducing the founder, Qi Yang
 */

import Image from "next/image";
import Link from 'next/link';
import Layout from '@/app/components/Layout';
import { RainbowButton } from '@/app/components/ui/rainbow-button';
import Ripple from '@/app/components/ui/ripple';

export default function AboutUs() {
  return (
    <Layout>
      {/* Main container */}
      <div className="w-full flex flex-col items-center">
        {/* Title section - Reduced top margin, increased bottom margin */}
        <div className="w-full text-center mb-20 mt-4">
          <h1 className="text-3xl md:text-4xl font-bold">杨淇</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* Main content container */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
          {/* Left side: Introduction text */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <p className="mb-4">
              · 五⾏经络瑜伽创始⼈<br />
              · 智慧呼吸 ——【⽓道】创始⼈<br />
              · 氧⽓悦汁⾃然疗法开创者<br />
              · 24年瑜伽教学资深经验<br />
              · 17年纯植物饮⻝实践经验<br />
              · 百万学员之瑜伽导师<br />
              · 誉为"中国式瑜伽第⼀⼈"
            </p>
          </div>

          {/* Right side: Profile photo with yellow breathing effect circle */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center mb-8 md:mb-0 order-1 md:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full absolute overflow-hidden">
              <Ripple
                mainCircleSize={320}
                numCircles={3}
                startColor="rgba(255, 255, 0, 0.2)"
                endColor="rgba(255, 200, 0, 0.8)"
              />
            </div>
            <Image
              src="/qy-2.1.png"
              alt="Profile"
              width={240}
              height={240}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
