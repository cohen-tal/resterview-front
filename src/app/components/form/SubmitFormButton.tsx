import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "../progress/CircularProgress";

interface SubmitFormButtonProps {
  valid?: boolean;
  submitting?: boolean;
}

export default function SubmitFormButton({
  valid = false,
  submitting,
}: SubmitFormButtonProps) {
  return (
    <div className="flex m-auto items-center justify-center gap-2 p-2 border rounded-md bg-blue-400 text-white font-bold py-2 px-4 w-28 h-12 transition duration-300 ease-in-out hover:bg-white hover:text-blue-500 hover:border-blue-500 disabled:hover:border-slate-300  disabled:bg-transparent disabled:text-slate-300  shadow-sm mt-1">
      <button type="submit" disabled={valid}>
        Submit
      </button>
      {submitting ? <CircularProgress /> : <SendIcon />}
    </div>
  );
}
