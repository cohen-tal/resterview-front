"use client";
import { ReactNode } from "react";
import BurgerMenu from "../menus/BurgerMenu";
import Image from "next/image";
import SearchBox from "./SearchBox";

interface NavBarProps {
  layout?: "mobile" | "desktop";
  children?: ReactNode;
}

export default function NavBar({ layout, children }: NavBarProps) {
  return (
    <div className="flex flex-col items-center bg-transparent">
      <div className="flex items-center justify-between w-full border p-5 z-50 mb-6">
        {/* <Image src="/logo.png" alt="logo" width={64} height={64} /> */}
        {/* <BurgerMenu>test test</BurgerMenu> */}
        <SearchBox />
      </div>
    </div>
  );
}
