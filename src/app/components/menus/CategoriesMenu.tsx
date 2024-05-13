import CategoryItem from "./CategoryItem";

export default function CategoriesMenu() {
  return (
    <div className="grid grid-cols-4 justify-center gap-4 lg:gap-16 p-2">
      <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/officel/80/pizza.png"
        alt="pizza"
        title="Pizza"
      />
      <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/officel/80/sushi.png"
        alt="sushi"
        title="Sushi"
      />
      <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/officel/80/spaghetti.png"
        alt="spaghetti"
        title="Spaghetti"
      />
      <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/officel/80/hamburger.png"
        alt="hamburger"
        title="Hamburger"
      />
      <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/officel/80/whole-fish.png"
        alt="fish"
        title="Fish"
      />
      <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/officel/80/steak-rare.png"
        alt="steak"
        title="Meat"
      />
      {/* <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/dusk/64/hummus.png"
        alt="hummus"
        title="Hummus"
      /> */}
      <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/officel/80/sunny-side-up-eggs.png"
        alt="breakfast"
        title="Breakfast"
      />
      <CategoryItem
        width="64"
        height="64"
        src="https://img.icons8.com/officel/80/banana-split.png"
        alt="desserts"
        title="Desserts"
      />
    </div>
  );
}
