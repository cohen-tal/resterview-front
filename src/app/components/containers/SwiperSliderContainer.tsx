import { Swiper, SwiperClass, SwiperRef, useSwiper } from "swiper/react";
import "swiper/css";
import { ReactNode, useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SwiperButton from "../buttons/SwiperButton";

interface SwiperSliderContainerProps {
  children?: ReactNode;
  roundedBottom?: boolean;
}

export default function SwiperSliderContainer({
  children,
  roundedBottom = false,
}: SwiperSliderContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [maxSlides, setMaxSlides] = useState<number>(1);
  const swiper = useSwiper();

  return (
    <div className="relative w-full h-full">
      <Swiper
        className={`flex items-center justify-center w-full h-full rounded-t-md ${
          roundedBottom ? "rounded-b-md" : ""
        }`}
        spaceBetween={50}
        slidesPerView={1}
        zoom={false}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        onAfterInit={(swiper) => {
          setMaxSlides(swiper.slides.length);
        }}
      >
        {children}
        {maxSlides > 1 && <SwiperButton direction="next" />}
        {currentSlide > 1 && <SwiperButton direction="prev" />}
      </Swiper>
      <div className="absolute right-0 bottom-0 z-50 p-0.5 border-t border-l shadow-lg bg-white/60 font-roboto">
        {`${currentSlide} / ${maxSlides}`}
      </div>
    </div>
  );
}
