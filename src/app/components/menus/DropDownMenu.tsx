"use client";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { m, LazyMotion, domAnimation } from "framer-motion";

interface DropDownMenuProps {
  children?: React.ReactNode;
}

export default function DropDownMenu({ children }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute top-1 right-2">
      <button
        className="bg-transparent"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <HiOutlineDotsHorizontal size={24} />
      </button>
      {isOpen && (
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [0.5, 1] }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute text-nowrap flex flex-col items-start right-0 border bg-white text-gray-700 shadow-lg rounded"
          >
            {children}
          </m.div>
        </LazyMotion>
      )}
    </div>
  );
}
