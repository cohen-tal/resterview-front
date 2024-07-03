import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

interface CircularIndexProps {
  value: number;
  valid?: boolean;
}

export default function FormCircularIndex({
  value,
  valid,
}: CircularIndexProps) {
  return (
    <div className="flex items-center justify-center border w-7 h-7 rounded-full text-black/60 bg-slate-50">
      {valid === undefined ? (
        value
      ) : valid === true ? (
        <DoneIcon />
      ) : (
        <ClearIcon />
      )}
    </div>
  );
}
