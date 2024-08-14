import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from "swiper/react";

interface SwiperButtonProps {
  direction: "next" | "prev";
  className?: string;
}

export default function SwiperButton({
  direction,
  className,
}: SwiperButtonProps) {
  const swiper = useSwiper();

  function handleNext(e: React.MouseEvent) {
    e.preventDefault();
    swiper.slideNext();
  }
  function handlePrev(e: React.MouseEvent) {
    e.preventDefault();
    swiper.slidePrev();
  }

  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 z-50 border rounded-full opacity-70 md:hover:opacity-100 bg-slate-50 shadow-md ${
        direction === "next" ? "right-2" : "left-2"
      } ${className}`}
      onClick={
        direction === "next"
          ? (e) => {
              handleNext(e);
            }
          : (e) => {
              handlePrev(e);
            }
      }
    >
      {direction === "next" ? (
        <IoIosArrowForward size={24} />
      ) : (
        <IoIosArrowBack size={24} />
      )}
    </button>
  );
}
