import Image from "next/image";
import Link from "next/link";
import { RestaurantCard as RestaurantCardProps } from "../../../../d";
import SwiperSliderContainer from "../containers/SwiperSliderContainer";
import { SwiperSlide } from "swiper/react";
import StarRatingInput from "../rating/StarRatingInput";

export default function RestaurantCard({
  id,
  name,
  address,
  categories,
  images,
  rating,
}: RestaurantCardProps) {
  return (
    <Link
      className="flex flex-col items-center justify-center border rounded-xl w-full max-w-[398px] max-h-[440px] shadow-md md:hover:scale-110 ease-in-out duration-300"
      href={`/restaurants/${id}`}
    >
      <div className="w-full h-48">
        <SwiperSliderContainer>
          {images.length > 0 ? (
            images.map((image, index) => (
              <SwiperSlide key={name + index}>
                <Image
                  src={image}
                  alt="image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <Image
                src="/stubimage.png"
                alt="image"
                fill
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          )}
        </SwiperSliderContainer>
        {/* <Image
          src="/landing4.png"
          alt="Restaurant"
          fill
          objectFit="cover"
          className="rounded-t-md"
        /> */}
      </div>
      <div className="flex flex-col items-start p-3 gap-2 w-full max-h-40">
        <p className="text-light-gray font-roboto font-bold text-md">{name}</p>
        <div className="flex flex-wrap gap-3 w-full">
          {categories.map((category) => (
            <div
              key={category}
              className="px-2 py-0.5 border rounded-md text-white bg-slate-400 text-xs flex-grow-0"
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
    </Link>
  );
}
