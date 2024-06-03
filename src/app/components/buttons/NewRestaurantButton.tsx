import { m } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface NewRestaurantButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled: boolean;
  icon: "next" | "prev";
  onClick: () => void;
}

export default function NewRestaurantButton({
  type,
  title,
  text,
  icon,
  disabled = true,
  onClick,
}: NewRestaurantButtonProps) {
  return (
    <m.button
      className="absolute flex items-center justify-center border border-slate-300 rounded-full w-28 h-12 bg-slate-100/30 disabled:bg-gray-400 right-12 mt-1 mr-6 shadow-sm"
      type={type}
      title={title}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon === "next" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
    </m.button>
  );
}
