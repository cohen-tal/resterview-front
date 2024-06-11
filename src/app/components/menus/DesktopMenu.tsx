"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden sm:flex items-center justify-start gap-4">
      <Link
        className="text-light-gray font-roboto text-shadow hover:bg-gray-700 hover:text-white hover:ease-in-out duration-200 px-3 py-2 rounded-full font-medium"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-light-gray font-roboto text-shadow hover:bg-gray-700 hover:text-white hover:ease-in-out duration-200 px-3 py-2 rounded-full font-medium"
        href="/restaurants"
      >
        Restaurants
      </Link>
      <a
        href="#"
        className="text-light-gray  font-roboto hover:bg-gray-700 hover:text-white px-3 py-2 hover:ease-in-out duration-200 rounded-full font-medium"
      >
        Contact
      </a>
    </div>
  );
}
