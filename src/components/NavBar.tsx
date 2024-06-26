import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
const NavItems = [
  {
    id: "navitems-data-1",
    name: "Home",
    nav: "/",
  },
  {
    id: "navitems-data-2",
    name: "About",
    nav: "/about",
  },
  {
    id: "navitems-data-3",
    name: "Services",
    nav: "/services",
  },
];
const NavBar = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };
  return (
    <nav className="bg-white z-50 sticky top-0 shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleDropDown}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end  sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-16 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {NavItems.map((data) => {
                  return (
                    <NavLink
                      to={data.nav}
                      className={({ isActive }) => {
                        console.log("isactive", isActive);

                        return (
                          "px-3 py-2 text-sm font-medium text-blue" +
                          (isActive ? "bg-red-500" : "text-teal-600")
                        );
                      }}
                      aria-current="page"
                    >
                      {data.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openDropDown && (
        <div id="mobile-menu">
          <div className="space-y-1 flex flex-col transition-all ease-in-out px-2 pb-3 pt-2">
            {NavItems.map((data) => {
              return (
                <NavLink
                  to={data.nav}
                  className={(isActive) =>
                    "rounded-md  px-3 py-2 text-sm font-medium text-blue" +
                    (isActive ? " underline" : "")
                  }
                  aria-current="page"
                >
                  {data.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
