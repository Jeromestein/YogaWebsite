/*
The About Us Page
Introducing the founder, Qi Yang
*/

import Image from "next/image";
import Link from 'next/link';
import Layout from '@/components/Layout';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Ripple from '@/components/ui/ripple';

export default function About() {
  return (
    <Layout>
      {/* 整体内容容器 */}
      <div className="w-full flex flex-col items-center">
        {/* 标题部分 - 减小上边距，增加下边距 */}
        <div className="w-full text-center mb-20 mt-4">
          <h1 className="text-3xl md:text-4xl font-bold">杨淇</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* 主内容容器 */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-4">
          {/* 左侧：介绍文字 */}
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

          {/* 右侧：人物和呼吸效果的黄色圆形 */}
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
