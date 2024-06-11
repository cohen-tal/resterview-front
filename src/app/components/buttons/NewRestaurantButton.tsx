import { m } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface NewRestaurantButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled?: boolean;
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
      className={`absolute flex items-center justify-center border rounded-full bg-blue-400 text-white font-bold py-2 px-4 transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 hover:border-blue-500 disabled:hover:border-slate-300  disabled:bg-transparent disabled:text-slate-300  shadow-sm mt-1 ${
        icon === "next" ? "right-12" : "left-12"
      }`}
      type={type}
      title={title}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon === "prev" && <ArrowBackIcon />}
      {icon === "next" && <ArrowForwardIcon />}
    </m.button>
  );
}
