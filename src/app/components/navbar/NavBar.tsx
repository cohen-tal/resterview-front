import BurgerMenu from "../menus/BurgerMenu";
import Image from "next/image";
import SearchBox from "./SearchBox";
import DesktopMenu from "../menus/DesktopMenu";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 left-0 right-0 w-full bg-white shadow-md z-[9999]">
      <div className="flex items-center justify-center flex-1 gap-4 border-b h-16 p-1">
        <Link href={"/"} className="mr-6 mb-3">
          <Image
            className="ml-4"
            src="/logo.png"
            alt="logo"
            width={100}
            height={20}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <SearchBox />
        <BurgerMenu />
        <DesktopMenu />
      </div>
    </nav>
  );
}
