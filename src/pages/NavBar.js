import React, { useContext, useState } from "react";
import spotify_logo from "../assets/spotify_logo.png";
import profile from "../assets/Profile.svg";
import nav_logo from "../assets/nav_logo.png";
import { Link } from "react-router-dom";
import { AppContext } from "../context/application-context";

const NavBar = () => {
  const [navClick, setNavClick] = useState(false);
  const appCtx = useContext(AppContext);
  const activeLink = appCtx.activeLink;

  const navStyle = navClick
    ? "flex flex-col py-8 opacity-1 max-h-screen transition-all duration-700"
    : "flex flex-col py-8 max-md:opacity-0 max-md:max-h-0 transition-all duration-700";

  const navClickHandler = () => {
    setNavClick((prevNavClick) => !prevNavClick);
  };

  const activeLinkHandler = (id) => {
    appCtx.setActiveLinkHandler(id);
  };

  return (
    <div className="flex md:flex-col lg:w-60 text-center justify-between h-auto text-white max-h">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <img src={spotify_logo} alt="spotify_logo" />
        </div>
        <nav className="text-left h-full duration-500 ease-in-out">
          <ul className={navStyle}>
            <Link to="/" onClick={() => activeLinkHandler(1)}>
              <li
                className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500"
                style={{
                  opacity: activeLink === 1 ? 1 : "",
                }}
              >
                For you
              </li>
            </Link>
            <Link to="/top-tracks" onClick={() => activeLinkHandler(2)}>
              <li
                className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500"
                style={{
                  opacity: activeLink === 2 ? 1 : "",
                }}
              >
                Top Tracks
              </li>
            </Link>
            <Link to="/favourites" onClick={() => activeLinkHandler(3)}>
              <li
                className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500"
                style={{
                  opacity: activeLink === 3 ? 1 : "",
                }}
              >
                Favourites
              </li>
            </Link>
            <Link to="/recently-played" onClick={() => activeLinkHandler(4)}>
              <li
                className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500"
                style={{
                  opacity: activeLink === 4 ? 1 : "",
                }}
              >
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
