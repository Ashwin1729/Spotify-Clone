import React, { useContext, useState } from "react";
import spotify_logo from "../assets/spotify_logo.svg";
import profile from "../assets/Profile.svg";
import { NavLogo } from "../assets/icons/index";
import { Link } from "react-router-dom";
import { AppContext } from "../context/application-context";

const NavBar = () => {
  const [navClick, setNavClick] = useState(false);
  const appCtx = useContext(AppContext);
  const activeLink = appCtx.activeLink;

  const navStyle = navClick
    ? "flex flex-col py-8 opacity-1 max-h-screen transition-all duration-700"
    : "flex flex-col py-8 max-lg:opacity-0 max-lg:max-h-0 transition-all duration-700";

  // nav links handler

  const navClickHandler = () => {
    setNavClick((prevNavClick) => !prevNavClick);
  };

  const activeLinkHandler = (id) => {
    appCtx.setActiveLinkHandler(id);
  };

  // initialising navigation routes data

  const navRoutes = [
    {
      route: "/",
      name: "For You",
      activeLink: 1,
    },
    {
      route: "/top-tracks",
      name: "Top Tracks",
      activeLink: 2,
    },
    {
      route: "/favourites",
      name: "Favourites",
      activeLink: 3,
    },
    {
      route: "/recently-played",
      name: "Recently Played",
      activeLink: 4,
    },
  ];

  return (
    <div className="slide-in-left">
      <div className="flex lg:flex-col xl:w-60 text-center justify-between h-auto text-white max-h lg:sticky lg:top-8 lg:h-[calc(100vh-76px)]">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <img src={spotify_logo} alt="spotify_logo" />
          </div>
          <nav className="text-left h-full duration-500 ease-in-out">
            <ul className={navStyle}>
              {navRoutes.map((data, idx) => {
                return (
                  <Link
                    to={data.route}
                    onClick={() => activeLinkHandler(data.activeLink)}
                    key={idx}
                  >
                    <li
                      className="text-base font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer duration-500"
                      style={{
                        opacity: activeLink === data.activeLink ? 1 : "",
                      }}
                    >
                      {data.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex lg:flex-col justify-evenly">
          <div className="h-12 w-12 max-lg:order-last">
            <img src={profile} alt="profile" />
          </div>
          <NavLogo navClickHandler={navClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
