import TuneIcon from "@mui/icons-material/Tune";

export default function CategoriesFilterButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="text-light-gray flex items-center justify-center border p-3 gap-2 rounded-xl text-sm hover:cursor-pointer"
    >
      <TuneIcon />
      <div className="text-light-gray text-sm">Filter</div>
    </div>
  );
}
