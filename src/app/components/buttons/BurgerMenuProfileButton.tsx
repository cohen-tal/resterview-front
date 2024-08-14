import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

interface BurgerMenuProfileButtonProps {
  src: string;
  name: string;
  onClick: VoidFunction;
}

export default function BurgerMenuProfileButton({
  src,
  name,
  onClick,
}: BurgerMenuProfileButtonProps) {
  return (
    <div className="self-center w-[85%]">
      <Link
        href="/profile"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div className="relative flex justify-center items-center gap-4 p-4 border rounded-lg shadow-lg">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src={src}
              alt="profile-icon"
              fill
              style={{ objectFit: "contain", borderRadius: 9999 }}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-md font-figtree font-normal text-light-gray">
              {name}
            </p>
            <p className="text-sm font-thin font-figtree text-gray-400">
              Show profile
            </p>
          </div>
          <MdArrowForwardIos className="ml-4" />
        </div>
      </Link>
    </div>
  );
}
