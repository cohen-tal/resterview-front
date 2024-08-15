import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface ProfileHistoryTabProps {
  onClickReviews: () => void;
  onClickRestaurants: () => void;
  children?: ReactNode;
}

export default function ProfileHistoryTab({
  children,
  onClickRestaurants,
  onClickReviews,
}: ProfileHistoryTabProps) {
  const [selected, setSelected] = useState("Reviews");

  return (
    <div className="flex flex-col place-items-center border rounded-lg flex-grow overflow-hidden h-full w-full">
      <div className="flex items-center w-full border-b rounded-t-lg cursor-pointer">
        {["Reviews", "Restaurants"].map((item) => (
          <div
            key={item}
            className={`relative w-full text-center text-lg ${
              selected === item ? "bg-slate-400/10" : ""
            }`}
            onClick={() => {
              setSelected(item);
              item === "Reviews" ? onClickReviews() : onClickRestaurants();
            }}
          >
            {item}
            {selected === item ? (
              <motion.div
                layoutId="underline"
                className="absolute w-full right-0 left-0 -bottom-[1px] h-[2px] bg-slate-600"
                transition={{
                  duration: 0.2,
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 p-3 w-full overflow-y-auto overflow-x-hidden place-items-center">
        {children}
      </div>
    </div>
  );
}
