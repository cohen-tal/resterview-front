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
      className={`${
        isPrev ? "left-0" : "right-0"
      } absolute top-0 bottom-0 w-12`}
    >
      <div
        className={`flex items-center justify-start h-full p-1 ${
          isPrev
            ? "before:bg-white before:h-full before:absolute before:left-0 before:w-[60%]"
            : "after:bg-white after:h-full after:absolute after:right-0 after:w-[60%]"
        }`}
      >
        <button
          className="rounded-full border p-0.5 sm:p-1 backdrop-blur-sm shadow-md hover:scale-110 z-50"
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
