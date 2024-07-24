"use client";
import { ReactNode } from "react";

const foodCategories = [
  "Pizza",
  "Hamburger",
  "Ice Cream",
  "Sushi",
  "Pasta",
  "Salad",
  "Tacos",
  "Steak",
  "Sandwiches",
  "Seafood",
  "Barbecue",
  "Curry",
  "Soup",
  "Burritos",
  "Desserts",
  "Breakfast",
  "Vegan",
  "Indian",
  "Chinese",
];

interface FoodCategoriesInputProps {
  children?: ReactNode;
}

function renderCategories(categories: string[]): ReactNode[] {
  return categories.map((item) => (
    <div key={item + "_div"}>
      <label key={item + "_label"} htmlFor={item}>
        {item}
      </label>
      <input
        key={item}
        type="checkbox"
        value={item}
        onChange={(e) => {
          console.log(e.currentTarget.value);
        }}
        className="text-light-gray border rounded-full shadow active:bg-green-300 hover:bg-green-200"
      />
    </div>
  ));
}

export default function FoodCategoriesInput({
  children,
}: FoodCategoriesInputProps) {
  return (
    <select className="w-full" multiple={true}>
      {foodCategories.map((category) => (
        <option
          key={category}
          onClick={(e) => {
            console.log(e.currentTarget.value);
          }}
        >
          {category}
        </option>
      ))}
    </select>
  );
}
