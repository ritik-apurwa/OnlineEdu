import { useState } from "react";
import { LinkData } from "../../../data/data";
import { NavLink, useLocation } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import SearchInput from "../../fakesearch/SearchInput";
import { DesktopNav, Logo } from "./NavComps";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Implement your search logic here
  };
  return (
    <>
      <header className="bg-white py-4 text-black sticky z-30 shadow-md top-0 left-0 w-full lg:max-w-screen-2xl">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />
          <DesktopNav />

          <div
            id=""
            className={`${
              open ? "block " : "hidden "
            } lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 z-50`}
          >
      
            <ul className="flex flex-col items-center py-10  lg:flex-row  lg:items-center gap-y-6 md:gap-6 lg:w-auto lg:bg-transparent">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(false)}>
                  <NavLink
                    to={link.url}
                    className={`text-black hover:text-primary lg:my-2 py-2 px-4 md:px-2 lg:px-4 md:py-0 md:border-b-2 md:border-transparent md:hover:border-primary transition duration-300 ${
                      location.pathname === link.url ? "text-red-400" : ""
                    }`}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-12 flex-row  gap-x-2  flex items-center">
            
            <button>
              <SearchInput onSearch={handleSearch} />
            </button>

            <button>
              <BiShoppingBag size={25} />
            </button>

            <button>Login</button>

            <button
              className="flex items-center flex-row-reverse"
              onClick={() => setOpen(!open)}
            >
              <HiOutlineMenuAlt1 className="lg:hidden" size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
