import { useEffect, useState, useRef, ChangeEvent } from "react";

interface FilterByDistanceButtonGroupProps {
  onButtonClick: (value: number) => void;
}

export default function FilterByDistanceButtonGroup({
  onButtonClick,
}: FilterByDistanceButtonGroupProps) {
  const [range, setRange] = useState(2);

  useEffect(() => {
    const rangeInput = document.getElementById("range-bar");
    const percentage = ((range - 2) / (100 - 2)) * 100;
    if (rangeInput) {
      rangeInput.style.background = `linear-gradient(to right, #4CAF50 ${percentage}%, #ddd ${percentage}%)`;
    }
  }, [range]);

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.valueAsNumber;
    setRange(value);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <input
        className="range-input hover:cursor-pointer w-full"
        type="range"
        id="range-bar"
        min={2}
        max={100}
        defaultValue={2}
        onChange={handleRangeChange}
      />
      <div className="flex-shrink-0 w-20 text-center">
        <button
          className={`border border-transparent text-light-gray lg:hover:border lg:hover:border-[#4CAF50]/60 lg:hover:bg-transparent duration-300 ease-in-out rounded-full p-1 w-full ${
            range > 2 ? "bg-[#4CAF50]/60" : ""
          }`}
          disabled={range <= 2}
          onClick={() => {
            onButtonClick(range);
          }}
        >
          <span>{range + " KM"}</span>
        </button>
      </div>
    </div>
  );
}
