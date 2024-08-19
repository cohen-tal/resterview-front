"use client";
import fetchAPI from "@/utils/fetchUtil";
import { debounce } from "lodash";
import { useState, useCallback, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { SearchResults } from "../../../../d";
import { ClickAwayListener } from "@mui/material";
import RestaurantSearchResult from "./RestaurantSearchResult";

export default function SearchBox() {
  const [params, setParams] = useState("");
  const [results, setResults] = useState<SearchResults[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
    debounce((value: string) => {
      setParams(value);
    }, 300),
    []
  );

  useEffect(() => {
    async function search(params: string) {
      return fetchAPI<SearchResults[]>(`/search?q=${params}`);
    }

    if (params !== "") {
      search(params).then((results) => {
        setResults(results);
      });
    } else {
      setResults([]);
    }
  }, [params]);

  console.log(isOpen, results);

  return (
    <div className="hidden relative lg:flex flex-col border items-center min-w-48 w-54 lg:w-[40%] lg:rounded-md rounded-full">
      <div className="flex items-center w-full rounded-md h-12 shadow-lg">
        <IoMdSearch size={24} className="text-light-gray ml-2" />
        <input
          className="text-gray-600 w-full p-2 h-full text-lg focus:outline-none lg:rounded-md rounded-full border-none"
          placeholder="Search restaurants..."
          onChange={(e) => {
            handleChange(e.currentTarget.value);
          }}
          onClick={(e) => {
            setIsOpen(true);
          }}
        />
      </div>
      {isOpen && results.length > 0 ? (
        <ClickAwayListener
          onClickAway={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
        >
          <div className="absolute flex flex-col top-full mt-1 w-full max-h-96 overflow-y-auto overflow-x-hidden bg-white border rounded-md">
            {results.map((result) => (
              <RestaurantSearchResult
                key={result.id}
                {...result}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            ))}
          </div>
        </ClickAwayListener>
      ) : null}
    </div>
  );
}
