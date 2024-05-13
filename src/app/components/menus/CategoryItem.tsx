import Image from "next/image";

interface CategoryItemProps {
  width: number | `${number}`;
  height: number | `${number}`;
  src: string;
  alt: string;
  title: string;
}

export default function CategoryItem({
  width,
  height,
  src,
  alt,
  title,
}: CategoryItemProps) {
  return (
    <div className="flex flex-col items-center justify-center max-w-24 lg:max-w-64 max-h-24 lg:max-h-44 border rounded-lg p-2 lg:p-12">
      <Image width={width} height={height} src={src} alt={alt} />
      <text className="text-neutral-900/60 font-semibold mt-1">{title}</text>
    </div>
  );
}
