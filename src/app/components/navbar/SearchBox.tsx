import { IoMdSearch } from "react-icons/io";

interface SearchBoxProps {
  placeholder?: string;
  onChange?: () => void;
  onSelect?: () => void;
}

export default function SearchBox({
  placeholder = "Search restaurants",
  onChange,
  onSelect,
}: SearchBoxProps) {
  return (
    <div className="relative flex flex-col border items-center min-w-48 w-54 lg:w-[40%] lg:rounded-md rounded-full">
      <div className="flex items-center shadow-inner w-full lg:rounded-md rounded-full h-12 lg:shadow-lg">
        <input
          className="text-gray-600 w-full p-2 h-full text-lg focus:outline-none lg:rounded-md rounded-full border-none"
          placeholder={placeholder}
          onChange={onChange}
          onSelect={onSelect}
        />
        <button className="bg-[#20262f] p-3 rounded-r-full lg:rounded-r-md h-full flex items-center justify-center">
          <IoMdSearch className="text-white" />
        </button>
      </div>
    </div>
  );
}
