"use client";
import { ReactNode } from "react";
import BurgerMenu from "../menus/BurgerMenu";
import Image from "next/image";
import SearchBox from "./SearchBox";

interface NavBarProps {
  layout: "mobile" | "desktop";
  children?: ReactNode;
}

export default function NavBar({ layout, children }: NavBarProps) {
  return (
    <div className="flex flex-col items-center bg-jasper dark:bg-jasper-300">
      <div className="flex items-center justify-between w-full pl-4 pr-4 z-50 text-pale_dogwood ">
        <Image src="/logo.png" alt="logo" width={64} height={64} />
        <BurgerMenu>test test</BurgerMenu>
      </div>
      {/* <SearchBox /> */}
    </div>
  );
}
