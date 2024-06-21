import TuneIcon from "@mui/icons-material/Tune";

export default function CategoriesFilterButton() {
  return (
    <div className="text-light-gray flex items-center justify-center border p-3 gap-2 rounded-xl text-sm">
      <TuneIcon />
      <div className="hidden text-light-gray text-sm sm:block">Filter</div>
    </div>
  );
}
