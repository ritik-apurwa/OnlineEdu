import React, { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";

interface SearchInputProps {
  onSearch: (query: string) => void;
}




const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {


  const [query, setQuery] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(event.target.value);
  };


  const handleSearch = () => {
    onSearch(query);
  };
  

  useEffect(() => {
    const resizeListener = () => {
      setInputVisible(window.innerWidth >= 640);
    };
    resizeListener(); // Call it initially
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className="flex w-fit items-center relative">
      <div className="relative">
        <button
          onClick={handleSearch}
          className="h-12 bg-white rounded-r px-2 flex items-center"
          style={{ top: 0 }}
        >
          <RiSearchLine size={18} />
        </button>
      </div>
      {isInputVisible && (
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="h-full w-full border border-gray-300 rounded-l px-4 py-2"
        />
      )}
    </div>
  );
};

export default SearchInput;
