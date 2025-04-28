import { CMS_NAME } from "@/lib/constants";
import Image from 'next/image'
import Link from 'next/link'

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/" className="hover:underline flex items-center">
        <Image
          src="/assets/logobig.png"  // 图片路径，需要将图片放在public/assets目录下
          alt="Blog Logo"
          width={315}  // 根据你的图片和设计需求调整宽度
          height={60}  // 根据你的图片和设计需求调整高度
          className="mr-2"  // 添加右侧边距，使布局美观
        />
      </Link>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Professional | Passion 
      </h4>
    </section>
  );
}
