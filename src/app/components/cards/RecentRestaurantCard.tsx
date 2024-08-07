"use client";
import { Variants, motion } from "framer-motion";
import { RecentRestaurant } from "../../../../d";
import { SwiperSlide } from "swiper/react";
import SwiperSliderContainer from "../containers/SwiperSliderContainer";
import Image from "next/image";
import StarRatingInput from "../rating/StarRatingInput";
import Link from "next/link";

export default function RecentRestaurantCard({
  id,
  name,
  address,
  rating,
  categories,
  description,
  images,
  variants,
}: RecentRestaurant & { variants?: Variants }) {
  console.log(variants);

  return (
    <Link href={`/restaurants/${id}`} className="sticky lg:static top-24">
      <motion.div
        className="flex flex-col items-center border w-[340px] lg:w-[420px] 2xl:w-[520px] mx-auto h-[460px] bg-white rounded-[20px] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)]"
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        <div className="w-full h-72">
          <SwiperSliderContainer>
            {images.length > 0 &&
              images.map((image, index) => (
                <SwiperSlide key={name + index}>
                  <Image
                    className="rounded-t-md"
                    src={image}
                    alt="image"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </SwiperSlide>
              ))}
          </SwiperSliderContainer>
        </div>
        <div className="flex flex-col items-start p-3 gap-3 w-full max-h-40">
          <p className="text-light-gray font-roboto font-bold text-md">
            {name}
          </p>
          <div className="flex justify-between flex-wrap w-full">
            {[...categories, "sandwiches"].map((category) => (
              <div
                key={category}
                className="px-2 py-0.5 border rounded-full text-white bg-slate-400 text-xs flex-grow-0"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="flex gap-0.5 items-center justify-between w-full">
            <p className="text-gray-700 text-sm">{address}</p>
            <StarRatingInput
              readOnly
              defaultValue={rating}
              precision={0.1}
              ratingType="stars"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
