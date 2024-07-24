import FormCircularIndex from "../forms/FormCircularIndex";
import CategoryPickerItem from "./menu-items/CategoryPickerItem";

const foodCategories = [
  "Pizza",
  "Hamburger",
  "Desserts",
  "Sushi",
  "Pasta",
  "Salad",
  "Tacos",
  "Steak",
  "Sandwich",
  "Seafood",
  "Curry",
  "Soup",
  "Burritos",
  "Breakfast",
  "Vegan",
];

interface CategoriesPickerMenuProps {
  index: number;
  valid?: boolean;
  onSelect: (value: string) => void;
  onDelete: (value: string) => void;
}

export default function CategoriesPickerMenu({
  index,
  valid,
  onDelete,
  onSelect,
}: CategoriesPickerMenuProps) {
  return (
    <div className="flex items-center gap-1 p-4">
      {index && <FormCircularIndex value={index} valid={valid} />}
      <div className="border rounded-lg grid grid-cols-3 gap-2 p-4 w-full">
        {foodCategories.map((category) => (
          <CategoryPickerItem
            key={category}
            value={category}
            text={category}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
