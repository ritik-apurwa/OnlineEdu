import { useState } from "react";
import { LinkData } from "../../data/data";
import { NavLink, useLocation } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import SearchBar from "../searchbar/Searchbar";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="logo flex items-center gap-6">
            <h2>HopeDesings</h2>
          </div>

          {/* Desktop NaviGation  */}
          <ul className="md:flex flex-row hidden">
            {LinkData.map((link) => (
              <li key={link.id} onClick={() => setOpen(false)}>
                <NavLink
                  to={link.url}
                  className={`text-black hover:text-primary py-2 px-4 md:px-2 md:py-0 md:border-b-2 md:border-transparent md:hover:border-primary transition duration-300 ${
                    location.pathname === link.url ? "text-red-400" : ""
                  }`}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <nav
            className={`${
              open ? "block " : "hidden "
            } md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 z-50`}
          >
            {/* Mobile Navigatin */}
            <ul className="flex flex-col items-center  md:flex-row md:items-center gap-6 md:gap-0 md:w-auto md:bg-transparent">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(false)}>
                  <NavLink
                    to={link.url}
                    className={`text-black hover:text-primary py-2 px-4 md:px-2 md:py-0 md:border-b-2 md:border-transparent md:hover:border-primary transition duration-300 ${
                      location.pathname === link.url ? "text-red-400" : ""
                    }`}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flex items-center gap-5">
            <button>
              <BiShoppingBag size={25} />
            </button>
            <button>Login</button>{" "}
            <button className="flex flex-row-reverse gap-x-2" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 className="md:hidden" size={25} />
              <SearchBar/>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
