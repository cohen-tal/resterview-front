import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "../progress/CircularProgress";

interface SubmitFormButtonProps {
  valid?: boolean;
  showText?: boolean;
  submitting?: boolean;
}

export default function SubmitFormButton({
  valid = false,
  showText = true,
  submitting,
}: SubmitFormButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex m-auto mb-4 items-center justify-center border px-4 py-2 rounded-full bg-blue-400 text-white font-bold transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 hover:border-blue-500 disabled:hover:border-slate-300 disabled:bg-transparent disabled:text-slate-300 shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="w-full h-full" type="submit" disabled={valid}>
        {showText && "Submit"}
        {submitting ? (
          <CircularProgress color={isHovered ? "rgb(59 130 246)" : "#FFFFFF"} />
        ) : (
          <SendIcon />
        )}
      </button>
    </div>
  );
}
