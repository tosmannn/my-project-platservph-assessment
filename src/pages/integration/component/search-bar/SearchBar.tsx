import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm w-full max-w-md">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Integration or Name"
        className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
