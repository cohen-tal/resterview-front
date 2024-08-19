"use client";
import Image from "next/image";
import { useState } from "react";
import Dialog from "../modal/Dialog";
import UserImagesScrollerContainer from "./UserImagesScrollerContainer";
import { SwiperSlide } from "swiper/react";

function renderRow(...images: string[]): React.JSX.Element[] {
  return images.map((image) => (
    <div key={image + Math.random()} className="relative w-full">
      <Image src={image} alt="user-added-image" fill />
    </div>
  ));
}

interface ImagesGridContainerProps {
  userName: string;
  userImage: string;
  images: string[];
}

export default function ImagesGridContainer({
  userImage,
  userName,
  images,
}: ImagesGridContainerProps) {
  const [showModal, setShowModal] = useState(false);

  const firstRow = images.length >= 2;
  const secondRow = images.length >= 4;
  const showMoreButton = images.length > 4;

  return (
    <>
      <div className="flex flex-col overflow-hidden w-full rounded-xl h-[248px]">
        {firstRow && (
          <div className="relative flex flex-1">
            {renderRow(images[0], images[1])}
          </div>
        )}
        {secondRow && (
          <div className="relative flex flex-1">
            {renderRow(images[2], images[3])}
            {showMoreButton && (
              <div
                className="absolute flex items-center justify-center cursor-pointer left-0 w-1/2 h-full bg-[#2021248c] text-white text-3xl z-50 font-roboto"
                onClick={() => setShowModal(true)}
              >
                <div>+{images.length - 4}</div>
              </div>
            )}
          </div>
        )}
      </div>
      {showModal && (
        <div
          onClick={() => {
            setShowModal(true);
            document.body.style.overflow = "hidden";
          }}
          className="fixed w-full h-full origin-center bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <Dialog open={showModal} onClose={() => setShowModal(false)}>
            <UserImagesScrollerContainer
              onClose={() => {
                setShowModal(false);
                document.body.style.overflow = "auto";
              }}
              userImage={userImage}
              userName={userName}
            >
              {images.map((value, index) => (
                <SwiperSlide key={value + index}>
                  <div className="relative w-full lg:h-[calc(100vh-112px)]">
                    <img
                      src={value}
                      alt="imgs"
                      style={{
                        height: "100%",
                        width: "100%",
                        //   margin: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </UserImagesScrollerContainer>
          </Dialog>
        </div>
      )}
    </>
  );
}
