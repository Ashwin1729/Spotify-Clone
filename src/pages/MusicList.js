import React from "react";
import Search from "../components/Search";
import MusicPlaylist from "../components/MusicPlaylist";

const MusicList = ({ id }) => {
  return (
    <div className="flex flex-col justify-center items-center px-2 mx-2">
      <h1 className="text-3xl w-full text-left text-white font-semibold">
        For You
      </h1>
      <Search />
      <MusicPlaylist id={id} />
    </div>
  );
};

export default MusicList;
