import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/icon.png";
import ThemeChanger from "./ThemeChanger";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="fixed bg-base-100 opacity-100 w-full shadow-md">
      <div className="flex justify-center items-center mt-1 mx-4 gap-8">
        <div className="flex justify-start items-center gap-2 m-2">
          <Link to="hero">
            <img
              src={Logo}
              alt="Logo"
              className="cursor-pointer"
              style={{ width: "75px" }}
            />
          </Link>
        </div>

        <ul className="hidden md:flex justify-center items-center uppercase text-sm gap-4">
          <li className="cursor-pointer hover:text-secondary duration-300">
            <Link to="hero">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-secondary duration-300">
            <Link to="about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-secondary duration-300">
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li className="cursor-pointer hover:text-secondary duration-300">
            <Link to="contact">Contact</Link>
          </li>
        </ul>

        <div className="navbar flex justify-end items-center gap-2">
          <div className="navbar-end">
            <ThemeChanger />
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-16 mr-4 z-[1] p-1 shadow bg-base-100 rounded-box w-32"
                >
                  <li onClick={toggleNav}>
                    <Link to="hero">Home</Link>
                  </li>
                  <li onClick={toggleNav}>
                    <Link to="about">About</Link>
                  </li>
                  <li onClick={toggleNav}>
                    <Link to="portfolio">Portfolio</Link>
                  </li>
                  <li onClick={toggleNav}>
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
