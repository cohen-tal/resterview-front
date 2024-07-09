import { ReactNode, useState } from "react";

interface SortReviewsButtonProps {
  text: string;
  selected?: boolean;
  onClick?: (event?: React.MouseEvent) => void;
  children?: ReactNode;
}

export default function SortReviewsButton({
  text,
  selected = false,
  onClick,
  children,
}: SortReviewsButtonProps) {
  return (
    <button
      className={`text-light-gray flex items-center text-nowrap justify-center border p-3 gap-2 rounded-3xl text-sm hover:text-white hover:bg-gray-500 duration-150 ${
        selected ? "border bg-gray-600 text-white" : ""
      }`}
      onClick={() => {
        onClick?.();
      }}
    >
      {text}
      {children}
    </button>
  );
}
