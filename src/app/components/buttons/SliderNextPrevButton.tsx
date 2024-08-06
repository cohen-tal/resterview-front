import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface SliderNextPrevButtonProps {
  direction: "next" | "prev";
  onClick: () => void;
}

export default function SliderNextPrevButton({
  direction,
  onClick,
}: SliderNextPrevButtonProps) {
  const isPrev = direction === "prev";
  return (
    <div
      className={`absolute top-0 bottom-0 ${
        isPrev ? "left-0 lg:-left-1" : "-right-3 lg:-right-1"
      }`}
    >
      <div className="flex items-center justify-start h-full p-1">
        <button
          className="rounded-full lg:rounded-none lg:h-full p-0.5 sm:p-1 lg:bg-white lg:hover:scale-110 z-50"
          onClick={() => {
            onClick();
          }}
        >
          {isPrev ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </button>
      </div>
    </div>
  );
}
