import React, { useState } from "react";
import Search from "../components/Search";
import MusicPlaylist from "../components/MusicPlaylist";

const MusicList = ({ id }) => {
  let playlistName = "";
  if (id === 1) {
    playlistName = "For You";
  } else if (id === 2) {
    playlistName = "Top Tracks";
  } else if (id === 3) {
    playlistName = "Favourites";
  } else if (id === 4) {
    playlistName = "Recently Played";
  }

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col justify-center items-center px-2 mx-2">
      <h1 className="text-3xl w-full text-left text-white font-semibold">
        {playlistName}
      </h1>
      <Search search={search} setSearchHandler={setSearch} />
      <MusicPlaylist id={id} searchField={search} />
    </div>
  );
};

export default MusicList;
