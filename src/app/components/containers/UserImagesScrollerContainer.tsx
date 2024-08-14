import { Avatar } from "@mui/material";
import { SwiperSlide, Swiper } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import SwiperButton from "../buttons/SwiperButton";

interface UserImagesScrollerProps {
  userImage: string;
  userName: string;
  children?: React.ReactNode;
  onClose: VoidFunction;
}

export default function UserImagesScrollerContainer({
  userImage,
  userName,
  children,
  onClose,
}: UserImagesScrollerProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [maxSlides, setMaxSlides] = useState<number>(1);

  return (
    <div>
      <div className="fixed top-4 right-0 left-0 flex items-center justify-end gap-4 z-50 text-white">
        <div className="flex items-center gap-3">
          <div className="font-roboto text-shadow text-lg w-full">
            {userName}
          </div>
          <Avatar src={userImage} alt="avatar" sx={{ width: 38, height: 38 }} />
        </div>
        <div
          className="flex place-items-center w-10 h-10 cursor-pointer lg:w-12 lg:h-12"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <FaArrowRightLong size={20} />
        </div>
      </div>
      <Swiper
        centeredSlides
        style={{ width: "100vw" }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        onAfterInit={(swiper) => {
          setMaxSlides(swiper.slides.length);
        }}
      >
        {children}
        {maxSlides > 1 && (
          <SwiperButton
            direction="next"
            className="mr-40 p-4 hidden lg:block"
          />
        )}
        {currentSlide > 1 && (
          <SwiperButton
            direction="prev"
            className="ml-40 p-4 hidden lg:block"
          />
        )}
      </Swiper>
    </div>
  );
}
