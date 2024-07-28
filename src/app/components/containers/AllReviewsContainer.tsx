"use client";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiTimerBold } from "react-icons/pi";
import CategoriesFilterButton from "../buttons/CategoriesFilterButton";
import FilterByRatingButtonGroup from "../buttons/FilterByRatingButtonGroup";
import SortReviewsButton from "../buttons/SortReviewsButton";
import FilterMenu from "../menus/FilterMenu";
import FilterMenuSection from "../menus/menu-sections/FilterMenuSection";
import RatingsChart from "../rating/RatingsChart";
import FullReviewCard from "../reviews/FullReviewCard";
import StarRatingInput from "../rating/StarRatingInput";
import Link from "next/link";
import { Restaurant } from "../../../../d";

interface AllReviewsContainerProps {
  restaurant: Pick<
    Restaurant,
    "id" | "name" | "rating" | "reviews" | "ratingPercentages"
  >;
  isOpen: boolean;
  alreadyWrittenReview?: boolean;
  onClose: () => void;
  onReviewEdit?: () => void;
}

export default function AllReviewsContainer({
  restaurant,
  isOpen,
  onClose,
  onReviewEdit,
  alreadyWrittenReview = false,
}: AllReviewsContainerProps) {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [selected, setSelected] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  function handleClick(value: string) {
    setSelected(value);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center w-full max-h-[80vh] p-2 lg:pt-8 overflow-hidden">
        <h1 className="text-3xl font-bold text-center mb-4 mt-8 lg:mt-0">
          Restaurant Name Reviews
        </h1>
        <div className="w-full max-w-[675px] p-4">
          <RatingsChart
            key={"rating-chart-reviews"}
            amountOfReviews={restaurant.reviews.length}
            overallRating={restaurant.rating}
            ratingsPercentage={restaurant.ratingPercentages}
          />
          <div className="max-h-[50vh] overflow-auto">
            <div className="flex border-t mt-6 gap-4 pt-4 pb-4">
              <CategoriesFilterButton
                onClick={() => {
                  setIsFilterOpened(true);
                }}
              />
              {!alreadyWrittenReview && (
                <Link
                  href={`reviews/writereview/${restaurant.id}`}
                  replace
                  className="flex flex-col lg:flex-row items-center w-full justify-between pl-4 pr-4 border rounded-lg font-figtree shadow-md text-md text-blue-600"
                >
                  Start writing a review
                  <StarRatingInput
                    ratingType="stars"
                    readOnly={true}
                    fontSize="2rem"
                  />
                </Link>
              )}
            </div>
            <div className="flex flex-col place-items-center gap-6 pb-5">
              {restaurant.reviews.map((review) => (
                <FullReviewCard
                  key={review.id + review.rating}
                  review={review}
                  onEdit={onReviewEdit}
                />
              ))}
            </div>
          </div>
        </div>
        <FilterMenu
          open={isFilterOpened}
          onClickExit={() => {
            setIsFilterOpened(false);
          }}
        >
          <FilterMenuSection sectionTitle="Sort by">
            <div className="grid grid-cols-2 gap-3">
              <SortReviewsButton
                text="Newest First"
                selected={selected === "new"}
                onClick={(e) => {
                  handleClick("new");
                }}
              >
                <PiTimerBold />
              </SortReviewsButton>
              <SortReviewsButton
                text="Oldest First"
                selected={selected === "old"}
                onClick={(e) => {
                  handleClick("old");
                }}
              >
                <PiTimerBold />
              </SortReviewsButton>
              <SortReviewsButton
                text="Most Helpful"
                selected={selected === "helpful"}
                onClick={(e) => {
                  handleClick("helpful");
                  setRatingFilter(1);
                }}
              >
                <AiOutlineLike />
              </SortReviewsButton>
              <SortReviewsButton
                text="Least Helpful"
                selected={selected === "least"}
                onClick={(e) => {
                  handleClick("least");
                }}
              >
                <AiOutlineDislike />
              </SortReviewsButton>
            </div>
          </FilterMenuSection>
          <FilterMenuSection sectionTitle="Filter by rating">
            <FilterByRatingButtonGroup
              selected={ratingFilter}
              onClick={(value) => {
                setRatingFilter(value);
              }}
            />
          </FilterMenuSection>
        </FilterMenu>
      </div>
    </Modal>
  );
}
