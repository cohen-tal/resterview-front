"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { IoMdSearch } from "react-icons/io";
import fetchAPI from "@/utils/fetchUtil";
import { SearchResults } from "../../../../d";
import { IoClose } from "react-icons/io5";
import RestaurantSearchResult from "./RestaurantSearchResult";

// interface SearchBoxMobileProps {
//   open: boolean;
//   onClose: VoidFunction;
// }

export default function SearchBoxMobile() {
  const [params, setParams] = useState("");
  const [results, setResults] = useState<SearchResults[]>();
  const [isOpen, setIsOpen] = useState(false);
  const input = useRef<HTMLInputElement | null>(null);

  const handleChange = useCallback(
    debounce((value: string) => {
      setParams(value);
    }, 300),
    []
  );

  useEffect(() => {
    input.current?.focus();
  });

  useEffect(() => {
    async function search(params: string) {
      return fetchAPI<SearchResults[]>(`/search?q=${params}`);
    }

    if (params !== "") {
      search(params).then((results) => {
        setResults(results);
      });
    }
  }, [params]);

  if (!isOpen) {
    return (
      <div
        className="flex items-center justify-center h-full"
        onClick={() => {
          setIsOpen(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <IoMdSearch size={24} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col w-full h-full">
        <div className="bg-white h-[72px] flex-shrink-0 border-b">
          <div className="relative flex items-center w-full h-full mx-3">
            <div className="flex items-center justify-center h-full">
              <IoMdSearch size={24} />
            </div>
            <form>
              <input
                ref={input}
                className="text-gray-600 w-full p-2 h-full text-lg focus:outline-none"
                placeholder="Search restaurants..."
                onChange={(e) => {
                  handleChange(e.currentTarget.value);
                }}
              />
            </form>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-6"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>
        {results && (
          <div className="flex flex-col w-full h-full overflow-y-auto overflow-x-hidden bg-white gap-3">
            {results.length > 0
              ? results.map((result) => (
                  <RestaurantSearchResult
                    key={result.id}
                    onClick={() => {
                      setIsOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                    {...result}
                  />
                ))
              : null}
          </div>
        )}
      </div>
    </div>
  );
}
