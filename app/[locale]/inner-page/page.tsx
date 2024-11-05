import Link from 'next/link';
import Layout from '@/components/Layout';
import { RainbowButton } from '@/components/ui/rainbow-button';

export default function About() {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-center mb-8 max-w-2xl">
          这是内页的占位符文本。您可以在这里添加任何您想要的内容。这个页面保留了主页的整体布局，但中间部分的内容已经被替换。
        </p>
        <Link href="/">
          <RainbowButton>返回主页</RainbowButton>
        </Link>
      </div>
    </Layout>
  );
}