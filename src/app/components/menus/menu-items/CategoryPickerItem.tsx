import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface CategoryPickerItemProps {
  text: string;
  value: string;
  onSelect: (value: string) => void;
  onDelete: (value: string) => void;
}

export default function CategoryPickerItem({
  onDelete,
  onSelect,
  text,
  value,
}: CategoryPickerItemProps) {
  const [isPicked, setIsPicked] = useState(false);
  return (
    <button
      value={value}
      className={`relative border rounded-md pt-1 pb-1 text-light-gray hover:bg-slate-300 ${
        isPicked ? "bg-emerald-200" : ""
      }`}
      onClick={() => {
        setIsPicked(true);
        onSelect(value);
      }}
    >
      {text}
      {isPicked && (
        <button
          className="absolute rounded-full top-1 right-1 translate-x-1/2 -translate-y-1/2 text-white bg-red-400"
          onClick={(e) => {
            e.stopPropagation();
            setIsPicked(false);
            onDelete(value);
          }}
        >
          <IoClose />
        </button>
      )}
    </button>
  );
}
