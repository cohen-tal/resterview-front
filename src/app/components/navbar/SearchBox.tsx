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
    <div className="relative flex flex-col items-center min-w-48 w-96 lg:w-[40%] p-0.5">
      <div className="flex items-center bg-white shadow-inner w-full rounded-full h-12 lg:shadow-lg">
        <input
          className="text-gray-400 w-full p-2 h-full text-lg focus:outline-none rounded-l-full lg:rounded-none border-none"
          placeholder={placeholder}
          onChange={onChange}
          onSelect={onSelect}
        />
        <button className="bg-[#20262f] p-3 rounded-r-full h-full flex items-center justify-center">
          <SearchIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}
