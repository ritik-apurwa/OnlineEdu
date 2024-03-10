import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { PiKeyReturnLight } from "react-icons/pi";
import { LuHash } from "react-icons/lu";
import "./searchbar.css";

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

  return (
    <div className="SB">
      <button onClick={handleSearchIconClick} className="SearchButton">
        <BiSearch size="25" />
      </button>

      {showResults && (
        <div className="SearchBarPage">
          <div className="SearchBarSection">
            <div className="SearchbarMain">
              <div className="SearchBarInputDiv">
                <BiSearch size={24} color="gray.900" />
                <input
                  ref={inputRef}
                  placeholder="Search Here"
                  type="text"
                  className="SearchBarInput"
                  value={value}
                  onChange={handleInputChange}
                />
                {value ? ( // Check if the input value is not empty
                  <button
                    className="SearchBarSearchButton"
                    onClick={() => setValue("")}
                  >
                    <BsArrowLeft size="20" />
                  </button>
                ) : null}
                <button
                  className="SearchBarCloseButton"
                  onClick={handleCloseResults}
                >
                  <FiX size="24" />
                </button>
              </div>
              <div className="SearchBarNoResultFound">
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
              {value &&
                searchResults.length > 0 &&
                searchResults.map((result) => (
                  <div
                    className="SearchItem"
                    key={result.id}
                    onClick={() => handleLinkClick(result.url)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="SearchItemMain">
                      <div className="SearchHeader">
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
                    <p className="SearchPara">
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
