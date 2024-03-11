import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { PiKeyReturnLight } from "react-icons/pi";
import { LuHash } from "react-icons/lu";
import "./searchbar.css";
import { RiSearch2Fill, RiSearchLine } from "react-icons/ri";

// Define your LinkItem interface
interface searchdata {
  id: number;
  title: string;
  url: string;
  details: string;
}

const links: searchdata[] = [
  { id: 1, title: "Home", url: "/", details: "Welcome to the home page" },
  {
    id: 2,
    title: "JavaScript",
    url: "/js",
    details: "Learn more about JavaScript",
  },
  { id: 3, title: "CSS", url: "/css", details: "Learn more about CSS" },
  { id: 4, title: "HTML", url: "/html", details: "Learn more about HTML" },
  {
    id: 5,
    title: "html Introduction",
    url: "/html#Introduction",
    details: "Learn more about HTML",
  },
  {
    id: 6,
    title: "Section 3",
    url: "/product#section3",
    details: "Learn more about Section 3",
  },
  {
    id: 7,
    title: "Revolution",
    url: "/html#Revolution",
    details: "Learn more about Section 3",
  },
];

const SearchBar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<searchdata[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showResults && inputRef.current) {
      inputRef.current.focus(); // Focus on the input field when showResults becomes true
    }
  }, [showResults]);

  const handleSearchIconClick = () => {
    if (!showResults) {
      setShowResults(true);
    } else {
      performSearch(value);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    performSearch(inputValue);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setValue("");
    setSearchResults([]);
  };

  const performSearch = (input: string) => {
    const filteredLinks = links.filter(
      (link) =>
        link.title.toLowerCase().includes(input.toLowerCase()) ||
        link.details.toLowerCase().includes(input.toLowerCase())
    );
    setSearchResults(filteredLinks);
  };

  const handleLinkClick = (url: string) => {
    if (url.startsWith("/product")) {
      const sectionId = url.split("#")[1];
      if (sectionId) {
        const targetDiv = document.getElementById(sectionId);
        if (targetDiv) {
          targetDiv.scrollIntoView({ behavior: "smooth" });
        }
      }
      navigate(url); // Navigate to the product page
    } else if (url.startsWith("/html")) {
      navigate(url); // Navigate to the HTML page
    } else if (url.startsWith("/css")) {
      navigate(url); // Navigate to the CSS page
    } else if (url.startsWith("/js")) {
      navigate(url); // Navigate to the JS page
    }
    handleCloseResults(); // Close the search results after navigation
  };

  const SearchBarSearchButton = () => {
    return (
      <button
        className="bg-transparent border-none py-0 cursor-pointer"
        onClick={() => setValue("")}
      >
        <BsArrowLeft size="20" />
      </button>
    );
  };
  const SearchBarCloseButton = () => {
    return (
      <button className="flex justify-end pl-4" onClick={handleCloseResults}>
        <FiX size="24" />
      </button>
    );
  };
  const SearchBarNoResultFound = () => {
    return (
      <div className="mb-1 ">
        {value ? (
          searchResults.length > 0 ? (
            <h1 className="SearchBarNoResultFound">
              " {searchResults.length} results found "
            </h1>
          ) : (
            <h1>Not Available Yet ....... </h1>
          )
        ) : null}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="h-12 items-center flex ">
        <button
          onClick={handleSearchIconClick}
          className="bg-transparent border-none cursor-pointer outline-none"
        >
          <RiSearchLine size="20" />
        </button>
      </div>

      {showResults && (
        <div className="SearchBarPage   ">
          <div
            className=" relative
          w-full shadow-lg mx-4 h-[98vh]  max-w-screen-xl"
          >
            <div className="w-full bg-white  flex-col ">
              <div className="mb-4 bg-light-white  border-primary-1 border flex flex-row items-center p-2 ">
                <BiSearch size={24} color="gray.900" />
                <input
                  ref={inputRef}
                  placeholder="Search Here"
                  type="text"
                  className="flex flex-row w-full border-none p-2 bg-light-white text-black outline-none justify-center text-base"
                  value={value}
                  onChange={handleInputChange}
                />
                {value ? ( // Check if the input value is not empty
                  <SearchBarSearchButton />
                ) : null}
                <SearchBarCloseButton />
              </div>

              <SearchBarNoResultFound />

              {value &&
                searchResults.length > 0 &&
                searchResults.map((result) => (
                  <div
                    className="cursor-pointer bg-white border-primary-1 border flex flex-col md:m-4 py-4 px-4 lg:m-6 m-2"
                    key={result.id}
                    onClick={() => handleLinkClick(result.url)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex justify-between items-center ">
                      <div className="flex gap-x-2 items-center">
                        <span>
                          <LuHash />
                        </span>
                        <h1>
                          {result.title
                            .split(new RegExp(`(${value})`, "gi"))
                            .map((part, index) =>
                              part.toLowerCase() === value.toLowerCase() ? (
                                <span
                                  key={index}
                                  className="font-bold text-purple-400"
                                >
                                  {part}
                                </span>
                              ) : (
                                <span key={index}>{part}</span>
                              )
                            )}
                        </h1>
                      </div>
                      <div>
                        <PiKeyReturnLight size={25} />
                      </div>
                    </div>

                    <p className="flex">
                      {result.details
                        .split(new RegExp(`(${value})`, "gi"))
                        .map((part, index) =>
                          part.toLowerCase() === value.toLowerCase() ? (
                            <span key={index} className=" text-purple-400">
                              {part}
                            </span>
                          ) : (
                            <span key={index}>{part}</span>
                          )
                        )}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
