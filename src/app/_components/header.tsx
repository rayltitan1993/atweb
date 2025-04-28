//import Link from "next/link";

//const Header = () => {
//  return (
//    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
//      <Link href="/" className="hover:underline">
//        Blog
//      </Link>
//      .
//    </h2>
//  );
//};

//export default Header;

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline flex items-center">
        <Image
          src="/assets/logo.png"  // 图片路径，需要将图片放在public/assets目录下
          alt="Blog Logo"
          width={80}  // 根据你的图片和设计需求调整宽度
          height={79}  // 根据你的图片和设计需求调整高度
          className="mr-2"  // 添加右侧边距，使布局美观
        />
        <span className="hidden md:inline">| Home</span>
      </Link>
    </h2>
  )
}
