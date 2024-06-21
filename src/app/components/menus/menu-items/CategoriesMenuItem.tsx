import Image from "next/image";

interface CategoriesMenuItemProps {
  name: string;
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

export default function CategoriesMenuItem({
  name,
  src,
  alt,
  width = 24,
  height = 24,
}: CategoriesMenuItemProps) {
  return (
    <div className="group flex flex-col items-center gap-2 p-3 pt-4 m-0 w-full first:pl-0">
      <Image src={src} alt={alt} width={width} height={height} />
      <p className="text-gray-500 text-xs group-hover:text-gray-800 whitespace-nowrap">
        {name}
      </p>
    </div>
  );
}
