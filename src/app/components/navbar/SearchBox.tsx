import SearchIcon from "@mui/icons-material/Search";

interface SearchBoxProps {
  placeholder?: string;
  onChange?: () => void;
  onSelect?: () => void;
}

export default function SearchBox({
  placeholder = "Search restaurants...",
  onChange,
  onSelect,
}: SearchBoxProps) {
  return (
    <div className="relative flex flex-col items-center min-w-48 w-80 lg:w-[40%] p-2">
      <div className="flex items-center bg-jasper w-full border border-pale_dogwood/30 rounded-3xl h-12 pl-2 pr-4 shadow">
        <SearchIcon className=" text-pale_dogwood" />
        <input
          className=" bg-transparent text-pale_dogwood placeholder:text-pale_dogwood p-1 h-full text-lg focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
