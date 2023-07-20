import React, { useContext } from "react";
import { AppContext } from "../context/application-context";

const MusicCard = ({ song }) => {
  // context data
  const appCtx = useContext(AppContext);
  const currentSong = appCtx.currentSong;

  const songClickHandler = (song) => {
    appCtx.setCurrentSongHandler(song);
  };

  return (
    <li
      className="flex items-center justify-between my-2 w-full hover:bg-gray-600 cursor-pointer p-3 rounded-lg duration-500"
      style={{
        backgroundColor: `${
          song?._id === currentSong?._id ? "rgb(71 85 105)" : ""
        }`,
      }}
      onClick={() => songClickHandler(song)}
    >
      <div className="flex items-center space-x-5">
        <div className="w-12 h-12 rounded-full">
          <img
            src={song.photo}
            alt={song.title}
            className="w-full h-full rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col text-left text-white justify-center">
          <h3 className="text-lg">
            {song.title.length > 25
              ? song.title.substring(0, 25) + "..."
              : song.title}
          </h3>
          <p className="text-sm text-gray-400">{song.artist}</p>
        </div>
      </div>
      <div className="text-white">
        {song.duration.toString().slice(0, 1) +
          ":" +
          song.duration.toString().slice(1)}
      </div>
    </li>
  );
};

export default MusicCard;
