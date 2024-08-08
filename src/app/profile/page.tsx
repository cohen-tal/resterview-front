"use client";
import ProfileSection from "../components/profile/ProfileSection";
import ProfileItem from "../components/profile/ProfileItem";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ProfileHistoryTab from "../components/profile/ProfileHistoryTab";
import FullReviewCard from "../components/reviews/FullReviewCard";
import RestaurantCard from "../components/cards/RestaurantCard";
import { RestaurantCardType, ReviewAPI, UserProfileData } from "../../../d";
import { useEffect, useState } from "react";
import fetchAPI from "@/utils/fetchUtil";

export default function Page() {
  const { data: session } = useSession();
  const [reviewsHistory, setReviewsHistory] = useState<ReviewAPI[]>([]);
  const [restaurantsHistory, setRestaurantsHistory] = useState<
    RestaurantCardType[]
  >([]);
  const [showReviews, setShowReviews] = useState(true);
  const [firstName, lastName] = (session?.user?.name ?? "").split(" ", 2);

  useEffect(() => {
    if (session?.accessToken?.token) {
      const profile = fetchAPI<UserProfileData>("/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${session?.accessToken?.token}` },
      })
        .then((data) => {
          setRestaurantsHistory(data.restaurants);

          return data.reviews;
        })
        .then((review) => {
          setReviewsHistory((_) => {
            return review.map((rev) => {
              const reviewAPI: ReviewAPI = {
                ...rev,
                author: { id: session.id!, image: "", name: "" },
              };
              return reviewAPI;
            });
          });
        });
    }
  }, [session?.accessToken?.token, session?.id]);

  function onDelete(reviewId: string) {
    const updatedReviews: ReviewAPI[] = reviewsHistory.filter(
      (review) => review.id !== reviewId
    );
    setReviewsHistory(updatedReviews);
  }

  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 h-full lg:grid-cols-2 lg:px-44 2xl:px-96 p-4 font-figtree overflow-hidden">
      <div className="flex flex-col place-items-center gap-2">
        <div className="flex items-center border rounded-lg p-4 w-full gap-4">
          <Image
            className="border rounded-full"
            src={session?.user?.image ?? ""}
            alt="avatar"
            width={90}
            height={90}
          />
          <h2 className="text-lg font-medium">{session?.user?.name}</h2>
        </div>
        <ProfileSection title="Personal Information">
          <div className="grid grid-cols-2 gap-4 pr-2 pl-2 lg:pr-12 lg:pl-4">
            <ProfileItem
              className="justify-self-start"
              content={firstName}
              title="First Name"
            />
            <ProfileItem
              className="justify-self-end"
              content={lastName}
              title="Last Name"
            />
            <ProfileItem
              className="justify-self-start"
              content={session?.user?.email}
              title="Email Address"
            />
            <ProfileItem
              className="justify-self-end"
              content="5 days ago"
              title="Joined"
            />
          </div>
        </ProfileSection>
      </div>
      <ProfileHistoryTab
        onClickRestaurants={() => {
          setShowReviews(false);
        }}
        onClickReviews={() => {
          setShowReviews(true);
        }}
      >
        {showReviews &&
          reviewsHistory.map((review) => (
            <FullReviewCard
              key={review.id}
              isHistoryCard
              review={review}
              onDelete={onDelete}
            />
          ))}

        {!showReviews &&
          restaurantsHistory.map((rest) => (
            <RestaurantCard key={rest.id} {...rest} />
          ))}
      </ProfileHistoryTab>
    </div>
  );
}
