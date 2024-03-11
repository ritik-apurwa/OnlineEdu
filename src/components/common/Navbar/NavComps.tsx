import { NavLink, useLocation } from "react-router-dom";
import { LinkData } from "../../../data/data";
import { useState } from "react";

export const Logo = () => {
  return (
    <div className="logo flex items-center gap-6">
      <h2 className="font-medium lg:text-2xl text-xl">HopeDesings</h2>
    </div>
  );
};
export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
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
  );
};

export const DesktopNav = () => {
  const [, setOpen] = useState(false);
  const location = useLocation();
  return (
    <ul className="lg:flex flex-row hidden">
      {LinkData.map((link) => (
        <li key={link.id} onClick={() => setOpen(false)}>
          <NavLink
            to={link.url}
            className={`text-black hover:text-primary py-2 px-4 md:px-2 
          md:border-b-2 md:border-transparent md:hover:border-primary 
          transition duration-300 ${
            location.pathname === link.url ? "text-red-400" : ""
          }`}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
