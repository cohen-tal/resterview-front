import React from "react";
import { SearchResults } from "../../../../d";
import Link from "next/link";
import Image from "next/image";

export default function RestaurantSearchResult({
  id,
  address,
  name,
  image,
  onClick,
}: SearchResults & { onClick?: VoidFunction }) {
  return (
    <Link
      href={`/restaurants/${id}`}
      className="flex items-center w-full gap-3 py-2 px-1 border border-transparent transition duration-200 ease-in-out lg:hover:bg-slate-400/60 lg:hover:shadow-lg"
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-lg overflow-hidden relative">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-slate-800 text-xl font-bold">N/A</span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow min-w-0">
        <span className="text-light-gray text-lg font-roboto font-normal truncate">
          {name}
        </span>
        <span className="text-gray-500 text-sm overflow-hidden break-words">
          {address}
        </span>
      </div>
    </Link>
  );
}
