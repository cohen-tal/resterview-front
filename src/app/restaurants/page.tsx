"use client";
import RestaurantCard from "../components/cards/RestaurantCard";
import RestaurantCategoriesMenu from "../components/menus/RestaurantCategoriesMenu";
import { useEffect, useState } from "react";
import fetchAPI from "@/utils/fetchUtil";
import { RestaurantCardType } from "../../../d";
import { PiTimerBold } from "react-icons/pi";
import FilterByRatingButtonGroup from "../components/buttons/FilterByRatingButtonGroup";
import SortReviewsButton from "../components/buttons/SortReviewsButton";
import FilterMenu from "../components/menus/FilterMenu";
import FilterMenuSection from "../components/menus/menu-sections/FilterMenuSection";
import FilterByDistanceButtonGroup from "../components/buttons/FilterByDistanceButtonGroup";
import RestaurantCardSkeleton from "../components/loading/RestaurantCardSkeleton";
import useSWR from "swr";
import NotFoundAfterLoading from "../components/loading/NotFoundAfterLoading";

export default function RestaurantsPage() {
  const [restaurantCards, setRestaurantCards] =
    useState<RestaurantCardType[]>();
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [selected, setSelected] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const { data, error, isLoading } = useSWR<RestaurantCardType[]>(
    "/restaurants",
    fetchAPI
  );

  useEffect(() => {
    if (data) {
      setRestaurantCards(data);
    }
  }, [data]);

  function handleClick(value: string) {
    setSelected(value);
  }

  function handleCategoryClick(category: string) {
    const sortedByCategory = data?.filter((restaurant) =>
      restaurant.categories.includes(category)
    );
    setRestaurantCards(sortedByCategory ?? []);
  }

  async function fetchRestaurantsInRadius(radius: number) {
    navigator.geolocation.getCurrentPosition(async (userPosition) => {
      const { latitude, longitude } = userPosition.coords;
      const filteredRestaurants = await fetchAPI<RestaurantCardType[]>(
        `/restaurants?loc=${longitude}&loc=${latitude}&radius=${radius}`
      );
      setRestaurantCards(filteredRestaurants ?? []);
    });
  }

  return (
    <div className="flex flex-col items-center p-2 gap-2 w-full">
      <RestaurantCategoriesMenu
        onCategoryClick={handleCategoryClick}
        onFilterButtonClick={() => {
          document.body.style.overflow = "hidden";
          setIsFilterOpened(true);
        }}
      />
      {!isLoading && restaurantCards && restaurantCards?.length < 1 && (
        <NotFoundAfterLoading href="/restaurants/new" />
      )}
      {
        <div className="grid grid-flow-row place-items-center pl-2 pr-2 gap-8 lg:grid-cols-3 lg:pl-16 lg:pr-16 2xl:grid-cols-4 w-full">
          {isLoading && <RestaurantCardSkeleton />}
          {restaurantCards &&
            restaurantCards.length > 0 &&
            restaurantCards.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
        </div>
      }
      <FilterMenu
        open={isFilterOpened}
        onClickExit={() => {
          document.body.style.overflow = "auto";
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
        <FilterMenuSection sectionTitle="Filter by distance">
          <FilterByDistanceButtonGroup
            onButtonClick={fetchRestaurantsInRadius}
          />
        </FilterMenuSection>
      </FilterMenu>
    </div>
  );
}
