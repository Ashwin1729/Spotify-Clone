import React, { useState } from "react";
import spotify_logo from "../assets/spotify_logo.png";
import profile from "../assets/Profile.svg";
import nav_logo from "../assets/nav_logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navClick, setNavClick] = useState(false);

  const navStyle = navClick
    ? "flex flex-col py-8 opacity-1 max-h-screen transition-all duration-700"
    : "flex flex-col py-8 max-md:opacity-0 max-md:max-h-0 transition-all duration-700";

  const navClickHandler = () => {
    setNavClick((prevNavClick) => !prevNavClick);
  };

  return (
    <div className="flex md:flex-col lg:w-60 text-center justify-between h-auto text-white max-h">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <img src={spotify_logo} alt="spotify_logo" />
        </div>
        <nav className="text-left h-full duration-500 ease-in-out">
          <ul className={navStyle}>
            <Link to="/">
              <li className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500">
                For you
              </li>
            </Link>
            <Link to="/top-tracks">
              <li className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500">
                Top Tracks
              </li>
            </Link>
            <Link to="/favourites">
              <li className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500">
                Favourites
              </li>
            </Link>
            <Link to="/recently-played">
              <li className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500">
                Recently Played
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex md:flex-col justify-evenly">
        <div className="h-12 w-12 max-md:order-last">
          <img src={profile} alt="profile" />
        </div>
        <div
          className="h-10 w-10 mx-4 my-1.5 rounded-full bg-white md:hidden cursor-pointer"
          onClick={navClickHandler}
        >
          <img src={nav_logo} alt="navigation_logo" className="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
