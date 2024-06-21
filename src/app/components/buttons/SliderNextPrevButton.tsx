import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function SliderNextPrevButton({
  direction,
}: {
  direction: "next" | "prev";
}) {
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
            ? "before:bg-white before:h-full before:absolute before:left-0 before:w-[70%]"
            : "after:bg-white after:h-full after:absolute after:right-0 after:w-[70%]"
        }`}
      >
        <button className="rounded-full border p-2 backdrop-blur-sm shadow-md hover:scale-110 z-50">
          {isPrev ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </button>
      </div>
    </div>
  );
}
