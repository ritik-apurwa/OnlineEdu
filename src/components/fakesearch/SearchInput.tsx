import React, { useState, useEffect } from "react";
import SearchBar from "../searchbar/Searchbar";

interface SearchInputProps {
  onSearch: (query: string) => void;
}




const SearchInput: React.FC<SearchInputProps> = ({ }) => {


  const [query, setQuery] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(event.target.value);
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
      <button className=" md:pr-4 pr-1 sm:pr-4">
      <SearchBar/>
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
