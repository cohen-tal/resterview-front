import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface BurgerMenuItemProps {
  text: string;
  src: string;
  alt: string;
  href: string;
}

export default function BurgerMenuItem({
  text,
  src,
  alt,
  href,
}: BurgerMenuItemProps) {
  return (
    <div className="relative flex items-center justify-center p-2 pl-5 gap-2 w-fit">
      <div className="relative w-[28px] h-[28px]">
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
      </div>
      <Link href={href}>{text}</Link>
    </div>
  );
}
