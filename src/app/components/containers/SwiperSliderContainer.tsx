import { Swiper } from "swiper/react";
import "swiper/css";
import { ReactNode, useState, useRef } from "react";

interface SwiperSliderContainerProps {
  children?: ReactNode;
}

export default function SwiperSliderContainer({
  children,
}: SwiperSliderContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [maxSlides, setMaxSlides] = useState<number>();

  return (
    <div className="relative">
      <Swiper
        className="flex items-center justify-center w-full h-[320px] 2xl:h-[500px] lg:h-[380px]"
        spaceBetween={50}
        slidesPerView={1}
        zoom={true}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        onAfterInit={(swiper) => {
          setMaxSlides(swiper.slides.length);
        }}
      >
        {children}
      </Swiper>
      <div className="absolute right-0 bottom-0 z-50 p-0.5 border-t border-l shadow-lg bg-white/60 font-roboto lg:rounded-br-md lg:rounded-tl-md">
        {`${currentSlide} / ${maxSlides}`}
      </div>
    </div>
  );
}
