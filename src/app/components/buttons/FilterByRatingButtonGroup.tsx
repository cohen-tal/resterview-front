interface FilterByRatingButtonProps {
  selected: number;
  onClick: (value: number) => void;
}

export default function FilterByRatingButtonGroup({
  onClick,
  selected,
}: FilterByRatingButtonProps) {
  return (
    <div className="grid grid-cols-5 w-full border shadow-md divide-x">
      <button
        onClick={() => {
          onClick(1);
        }}
        className={`${selected === 1 ? "bg-gray-500 text-white" : ""}`}
      >
        1
      </button>
      <button
        onClick={() => {
          onClick(2);
        }}
        className={`${selected === 2 ? "bg-gray-500 text-white" : ""}`}
      >
        2
      </button>
      <button
        onClick={() => {
          onClick(3);
        }}
        className={`${selected === 3 ? "bg-gray-500 text-white" : ""}`}
      >
        3
      </button>
      <button
        onClick={() => {
          onClick(4);
        }}
        className={`${selected === 4 ? "bg-gray-500 text-white" : ""}`}
      >
        4
      </button>
      <button
        onClick={() => {
          onClick(5);
        }}
        className={`${selected === 5 ? "bg-gray-500 text-white" : ""}`}
      >
        5
      </button>
    </div>
  );
}
