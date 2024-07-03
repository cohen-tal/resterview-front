"use client";
import RatingsChart from "@/app/components/rating/RatingsChart";
import Map from "@/app/components/map/Map";
import LocationMarker from "@/app/components/map/LocationMarker";
import Review from "@/app/components/reviews/Review";
import SwiperSliderContainer from "@/app/components/containers/SwiperSliderContainer";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

function renderImages() {
  const arr = Array(5)
    .fill(1)
    .map((_, index) => {
      return (
        <SwiperSlide key={index}>
          <Image
            src="/stubimage.png"
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
      );
    });
  return arr;
}

export default function RestaurantPage() {
  return (
    <>
      <SwiperSliderContainer>{renderImages()}</SwiperSliderContainer>
      <div className="lg:p-40 2xl:p-80 2xl:pt-4 lg:pt-4">
        <div className="flex flex-col font-figtree self-center justify-center gap-2 p-6 pt-0 lg:p-0">
          <div className="pt-6 pb-6">
            <h2 className="text-4xl lg:text-7xl text-light-gray font-bold mb-4">
              Restaurant Title
            </h2>
            <h2 className="text-xl flex items-center pl-0.5 text-light-gray/90">
              Restaurant Address
            </h2>
          </div>
          <div className="w-full border-t pb-5 pt-8">
            <RatingsChart />
          </div>

          <div className="w-full pb-5 pt-5 border-t">
            <h2 className="text-2xl font-semibold flex items-center text-light-gray mb-3">
              Location
            </h2>
            <Map center={[32.78670209480405, 34.998893182974044]} height={320}>
              <LocationMarker
                title={"Restaurant Name"}
                content={"Restaurant Address"}
                position={[32.78670209480405, 34.998893182974044]}
              />
            </Map>
          </div>
          <div className="flex flex-col w-full border-t pt-6 gap-10">
            <div className="flex flex-col justify-between lg:flex-row">
              <h2 className="text-2xl font-semibold flex items-center text-light-gray mb-3">
                Recommended Reviews
              </h2>
              {/* <button className="w-1/2 p-2 whitespace-nowrap lg:p-1 border rounded-lg font-figtree shadow-md bg-gradient-to-br from-floral_white/50 to-floral_white/20 hover:scale-105 duration-300 hover:from-floral_white/80 hover:to-floral_white/50">
                Write a review
              </button> */}
            </div>
            <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-14">
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
            <button className="p-1 border rounded-lg w-full bg-gradient-to-br from-floral_white/50 to-floral_white/20 shadow-md hover:scale-105 duration-300">
              See all reviews
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
