/*
 * The Inner Page
 * Introducing Sino Yoga and related courses
 */
import Image from "next/image";
import Link from 'next/link';
import Layout from '@/components/Layout';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Ripple from '@/components/ui/ripple';

export default function InnerPage() {
  return (
    <Layout>
      {/* Main container */}
      <div className="w-full flex flex-col items-center">
        {/* Title section - Reduced top margin, increased bottom margin */}
        <div className="w-full text-center mb-20 mt-4">
          <h1 className="text-3xl md:text-4xl font-bold">五行经络瑜伽全科系</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* Main content container */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
          {/* Left side: Introduction text */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <p className="mb-4">
              五行经络瑜伽:正位瑜伽、五行功、气道•智慧呼吸、情志疗愈和氧气厨房五大板块<br />
              <br />
              · 40多种呼吸法<br />
              · 150多个木火土金水的序列练习<br />
              · 五行功36式 ——适合全家人练习<br />
              · 24节气养生与食疗<br />
              · 朴素智慧、唱诵冥想<br />
              ......<br />
              <br />
              适合初级练习者和瑜伽老师用于私教和小班课教学。
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
              src="/qy-3.1.png"
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
