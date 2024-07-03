import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { IconContext } from "react-icons";

interface BurgerMenuItemProps {
  text: string;
  src?: string;
  alt?: string;
  href: string;
  onClick?: () => void;
  children?: ReactNode;
}

export default function BurgerMenuItem({
  text,
  src = "",
  alt = "",
  href,
  onClick,
  children,
}: BurgerMenuItemProps) {
  return (
    <div className="relative flex items-center text-gray-700 font-figtree text-lg justify-between p-2 pl-3 gap-2 w-full">
      <Link href={href} className="flex items-center" onClick={onClick}>
        {!children && (
          <div className="relative w-[28px] h-[28px]">
            <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
          </div>
        )}
        <div className="mr-2">{children}</div>
        {text}
      </Link>
      <IconContext.Provider value={{ size: "1rem" }}>
        <MdArrowForwardIos />
      </IconContext.Provider>
    </div>
  );
}
