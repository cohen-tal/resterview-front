import "swiper/css";
import { Swiper } from "swiper/react";
import { ReactNode, useState } from "react";
import SwiperButton from "../buttons/SwiperButton";

interface SwiperSliderContainerProps {
  children?: ReactNode;
}

export default function SwiperSliderContainer({
  children,
}: SwiperSliderContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [maxSlides, setMaxSlides] = useState<number>(1);

  return (
    <div className="relative w-full h-full">
      <Swiper
        className="flex justify-center w-full h-full"
        spaceBetween={50}
        slidesPerView={"auto"}
        centeredSlides={true}
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
