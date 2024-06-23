import BurgerMenu from "../menus/BurgerMenu";
import Image from "next/image";
import SearchBox from "./SearchBox";
import DesktopMenu from "../menus/DesktopMenu";

export default function NavBar() {
  return (
    <nav className="sticky top-0 left-0 right-0 w-full bg-white shadow-sm z-[9999]">
      <div className="flex items-center justify-center flex-1 gap-4 border-b h-20 p-1">
        <Image
          className="ml-4 mr-6 self-start"
          src="/logo.png"
          alt="logo"
          width={100}
          height={20}
          style={{ objectFit: "contain" }}
        />
        <SearchBox />
        <BurgerMenu />
        <DesktopMenu />
      </div>
    </nav>
  );
}
