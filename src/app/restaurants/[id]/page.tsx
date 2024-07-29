"use client";
import RatingsChart from "@/app/components/rating/RatingsChart";
import Map from "@/app/components/map/Map";
import LocationMarker from "@/app/components/map/LocationMarker";
import ReviewCard from "@/app/components/reviews/ReviewCard";
import SwiperSliderContainer from "@/app/components/containers/SwiperSliderContainer";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useCallback, useEffect, useState } from "react";
import AllReviewsContainer from "@/app/components/containers/AllReviewsContainer";
import StarRatingInput from "@/app/components/rating/StarRatingInput";
import { Restaurant, RestaurantAPI, ReviewAPI } from "../../../../d";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import fetchAPI from "@/utils/fetchUtil";

async function fetchRestaurant(id: string, token: string): Promise<Restaurant> {
  const res = await fetchAPI(`/restaurants/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const restaurantApi: RestaurantAPI = await res.json();

  if (!res.ok) {
    throw new Error((restaurantApi as any).message);
  }

  /* TODO: add parsing method that will parse the dates and nested dates from string to date objects.
  Currently components using Restaurant as prop convert the string to new Date */
  const restaurant: Restaurant = {
    ...restaurantApi,
    ratingPercentages: getRatingPercentages(restaurantApi.reviews),
  };

  return restaurant;
}

function getRatingPercentages(reviews: ReviewAPI[]): number[] {
  const result = new Array(5).fill(0);

  if (reviews.length === 0) {
    // avoid division by 0
    return result;
  }

  reviews.forEach((review) => result[review.rating - 1]++);

  return result.map((ratingsCount) => ratingsCount / reviews.length);
}

export default function RestaurantPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const { id } = useParams();
  const { data: session } = useSession();

  const handleFetching = useCallback(() => {
    const restaurantId: string = id as string;
    if (session?.accessToken) {
      fetchRestaurant(restaurantId, session.accessToken.token)
        .then((res) => setRestaurant(res))
        .catch((reason) => console.log(reason));
    }
  }, [id, session?.accessToken]);

  useEffect(() => {
    handleFetching();
  }, [handleFetching]);

  if (!restaurant) {
    return <div>Loading restaurant</div>;
  }

  function renderImages() {
    return restaurant?.images.map((image, index) => (
      <SwiperSlide key={index}>
        <Image src={image} alt="image" fill style={{ objectFit: "cover" }} />
      </SwiperSlide>
    ));
  }

  const alreadyWroteReview: boolean = restaurant.reviews.some(
    (review) => review.author.id === session?.id
  );

  return (
    <>
      <div className="w-full h-[320px] 2xl:h-[500px] lg:h-[380px]">
        <SwiperSliderContainer>{renderImages()}</SwiperSliderContainer>
      </div>
      <div className="lg:p-40 2xl:p-80 2xl:pt-4 lg:pt-4">
        <div className="flex flex-col font-figtree self-center justify-center gap-2 p-6 pt-0 lg:p-0">
          <div className="pt-6 pb-6">
            <h2 className="text-4xl lg:text-7xl text-light-gray font-bold mb-4">
              {restaurant.name}
            </h2>
            <h2 className="text-xl flex items-center pl-0.5 text-light-gray/90">
              {restaurant.address}
            </h2>
          </div>
          <div className="w-full border-t pb-5 pt-8">
            <RatingsChart
              key={"ratings-chart-main"}
              amountOfReviews={restaurant.reviews.length}
              overallRating={restaurant.rating}
              ratingsPercentage={restaurant.ratingPercentages}
            />
          </div>

          <div className="w-full pb-5 pt-5 border-t">
            <h2 className="text-2xl font-semibold flex items-center text-light-gray mb-3">
              Location
            </h2>
            <Map center={[restaurant.lat, restaurant.lng]} height={320}>
              <LocationMarker
                title={"Restaurant Name"}
                content={"Restaurant Address"}
                position={[restaurant.lat, restaurant.lng]}
              />
            </Map>
          </div>
          <div className="flex flex-col w-full border-t pt-6 gap-10">
            <div className="w-fit grid grid-cols-1">
              <h2 className="text-2xl font-semibold flex items-center text-light-gray mb-3">
                Recommended Reviews
              </h2>
              {!alreadyWroteReview && (
                <Link
                  href={`/reviews/writereview/${restaurant.id}`}
                  className="flex place-items-center p-4 pr-0 gap-3 border rounded-lg font-figtree shadow-md text-md text-blue-600"
                >
                  Write a review
                  <StarRatingInput ratingType="stars" readOnly={false} />
                </Link>
              )}
            </div>
            <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-14">
              {restaurant.reviews.map((review) => (
                <ReviewCard key={review.id + review.rating} review={review} />
              ))}
            </div>
            <button
              className="p-1 border rounded-lg w-full shadow-md hover:scale-105 md:hover:bg-slate-600 hover:text-white duration-300"
              onClick={() => {
                document.body.style.overflow = "hidden";
                setIsOpen(true);
              }}
            >
              See all reviews
            </button>
          </div>
        </div>
        {restaurant && (
          <AllReviewsContainer
            restaurant={{
              id: restaurant.id,
              name: restaurant.name,
              rating: restaurant.rating,
              reviews: restaurant.reviews,
              ratingPercentages: restaurant.ratingPercentages,
            }}
            isOpen={isOpen}
            alreadyWrittenReview={alreadyWroteReview}
            onClose={() => {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }}
            onReviewEdit={() => {
              handleFetching();
            }}
          />
        )}
      </div>
    </>
  );
}
