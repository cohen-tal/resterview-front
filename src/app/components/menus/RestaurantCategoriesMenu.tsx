import { useRef, useState } from "react";
import CategoriesMenuItem from "./menu-items/CategoriesMenuItem";
import CategoriesFilterButton from "../buttons/CategoriesFilterButton";
import SliderNextPrevButton from "../buttons/SliderNextPrevButton";
import { useMotionValueEvent, useScroll } from "framer-motion";

const categories: string[][] = [
  ["Pizza", "https://img.icons8.com/ios/100/pizza.png"],
  ["Hamburger", "https://img.icons8.com/ios/50/hamburger.png"],
  ["Desserts", "https://img.icons8.com/ios/50/ice-cream-cone.png"],
  ["Sushi", "https://img.icons8.com/ios/50/salmon-sushi.png"],
  ["Pasta", "https://img.icons8.com/ios/50/spaghetti.png"],
  ["Salad", "https://img.icons8.com/ios/50/salad--v1.png"],
  ["Tacos", "https://img.icons8.com/ios/50/taco.png"],
  ["Steak", "https://img.icons8.com/ios/50/steak.png"],
  ["Sandwich", "https://img.icons8.com/ios/50/bitten-sandwich.png"],
  ["Seafood", "https://img.icons8.com/ios/50/fish-and-vegetables.png"],
  ["Curry", "https://img.icons8.com/ios/50/porridge--v1.png"],
  ["Soup", "https://img.icons8.com/ios/50/soup-plate.png"],
  ["Burritos", "https://img.icons8.com/ios/50/burrito.png"],
  ["Breakfast", "https://img.icons8.com/ios/50/sunny-side-up-eggs.png"],
  ["Vegan", "https://img.icons8.com/ios/50/vegan-food.png"],
];

interface RestaurantCategoriesMenuProps {
  onFilterButtonClick: () => void;
  onCategoryClick: (category: string) => void;
}

export default function RestaurantCategoriesMenu({
  onFilterButtonClick,
  onCategoryClick,
}: RestaurantCategoriesMenuProps) {
  const [isLeftButton, setIsLeftButton] = useState(false);
  const [isRightButton, setIsRightButton] = useState(true);
  const container = useRef<HTMLDivElement | null>(null);
  const scroll = useScroll({
    container: container,
  });

  useMotionValueEvent(scroll.scrollXProgress, "change", () => {
    if (scroll.scrollXProgress.get() > 0) {
      setIsLeftButton(true);
    } else {
      setIsLeftButton(false);
    }

    if (scroll.scrollXProgress.get() < 0.9999) {
      setIsRightButton(true);
    } else {
      setIsRightButton(false);
    }
  });

  function handleNext() {
    if (container.current) {
      container.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  }
  function handlePrev() {
    if (container.current) {
      container.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="flex justify-start items-center pl-2 pr-2 md:pl-16 md:pr-16 pt-4 pb-4 gap-4 w-full">
      <div className="relative overflow-hidden w-full">
        {isLeftButton && (
          <SliderNextPrevButton direction={"prev"} onClick={handlePrev} />
        )}
        <div
          ref={container}
          className="min-h-18 max-h-20 overflow-x-auto scrollbar-hidden"
        >
          <div className="grid grid-flow-col auto-cols-[calc(100%/5)] md:auto-cols-[calc(100%/12)] gap-4">
            {categories.map((keyValue) => (
              <CategoriesMenuItem
                key={keyValue[0]}
                name={keyValue[0]}
                src={keyValue[1]}
                alt={keyValue[0]}
                width="28"
                height="28"
                onClick={() => onCategoryClick(keyValue[0])}
              />
            ))}
          </div>
        </div>
        {isRightButton && (
          <SliderNextPrevButton direction={"next"} onClick={handleNext} />
        )}
      </div>
      <CategoriesFilterButton onClick={onFilterButtonClick} />
    </div>
  );
}
