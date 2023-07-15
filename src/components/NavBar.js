import React from "react";
import spotify_logo from "../assets/spotify_logo.png";
import profile from "../assets/Profile.svg";

const NavBar = () => {
  return (
    <div className="#NavBar lg:flex lg:flex-col lg:w-40 h-screen text-center text-white">
      <div className="flex justify-between items-center ">
        <img src={spotify_logo} alt="spotify_logo" />
      </div>
      <nav className="text-left h-full">
        <ul className="flex flex-col py-8">
          <li className="text-lg font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer">
            For you
          </li>
          <li className="text-lg font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer">
            Top Tracks
          </li>
          <li className="text-lg font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer">
            Favourites
          </li>
          <li className="text-lg font-normal my-3 opacity-40 hover:opacity-100 cursor-pointer">
            Recently Played
          </li>
        </ul>
      </nav>
      <div className="h-12 w-12">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default NavBar;
