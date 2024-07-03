"use client";
import { useState, useRef } from "react";
import SortReviewsButton from "./SortReviewsButton";
import { PiTimerBold } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineSort } from "react-icons/md";

export default function SortButtonsGroup({
  onClick,
}: {
  onClick?: () => void;
}) {
  const [selected, setSelected] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleClick(value: string, e?: React.MouseEvent) {
    e?.stopPropagation();
    setSelected(value);
    onClick?.();
    dialogRef.current?.close();
  }

  return (
    <div
      className="relative flex items-center justify-center gap-4 w-1/2"
      onClick={() => {}}
    >
      <div className="flex items-center justify-center gap-2 p-3 border rounded-xl text-xl font-figtree w-full">
        <MdOutlineSort />
        Sort Reviews
      </div>
      <div className="absolute top-full left-0 p-2 w-full mt-2 flex flex-col items-center gap-2 border rounded-xl shadow-md">
        <div>
          <SortReviewsButton
            text="Most Helpful"
            selected={selected === "helpful"}
            onClick={(e) => {
              handleClick("helpful");
            }}
          >
            <AiOutlineLike />
          </SortReviewsButton>
        </div>
        <SortReviewsButton
          text="Newest First"
          selected={selected === "new"}
          onClick={(e) => {
            handleClick("new");
          }}
        >
          <PiTimerBold />
        </SortReviewsButton>
        <SortReviewsButton
          text="Oldest First"
          selected={selected === "old"}
          onClick={(e) => {
            handleClick("old");
          }}
        >
          <PiTimerBold />
        </SortReviewsButton>
      </div>
    </div>
  );
}
