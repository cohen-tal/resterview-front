import Image from "next/image";
import { memo } from "react";

interface CategoriesMenuItemProps {
  name: string;
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  onClick?: () => void;
}

function CategoriesMenuItem({
  name,
  src,
  alt,
  width = 24,
  height = 24,
  onClick,
}: CategoriesMenuItemProps) {
  return (
    <div
      className="group flex flex-col items-center justify-start gap-2 p-3 pt-4 m-0 w-full first:pl-0 lg:hover:cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
      <p className="text-gray-500 text-xs group-hover:text-gray-800 whitespace-nowrap ">
        {name}
      </p>
    </div>
  );
}

export default memo(CategoriesMenuItem);
