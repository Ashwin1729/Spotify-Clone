import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/application-context";
import ColorThief from "colorthief";
import SkeletonCard from "./SkeletonCard";

const GET_SONGS = gql`
  query Query($playlistId: Int!, $search: String) {
    getSongs(playlistId: $playlistId, search: $search) {
      _id
      artist
      duration
      photo
      title
      url
    }
  }
`;

let skeleton = [];

for (let i = 0; i < 10; i++) {
  skeleton.push(<SkeletonCard />);
}

const MusicPlaylist = ({ id }) => {
  const appCtx = useContext(AppContext);
  const currentSong = appCtx.currentSong;

  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      playlistId: id,
      search: appCtx.search === "" ? null : appCtx.search,
    },
  });

  const implementGradient = (song) => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = song.photo;
    img.addEventListener("load", () => {
      const color = colorThief.getColor(img);
      const colorString = `linear-gradient(160deg , rgb(${color.join(
        ","
      )}) 8%, rgba(1,0,2,1) 90%)`;
      appCtx.setBackgroundGradientHandler(colorString);
    });
  };

  useEffect(() => {
    const songExist =
      data?.getSongs.filter((song) => appCtx.currentSong?._id === song?._id)
        .length > 0;

    if (songExist) {
      appCtx.setCurrentPlaylistHandler(data?.getSongs);
    }
    implementGradient(currentSong);
  }, [data, currentSong]);

  const songClickHandler = (song) => {
    appCtx.setCurrentSongHandler(song);
  };

  if (loading) {
    return (
      <ul className="flex flex-col items-center justify-center w-full">
        {skeleton}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col items-center justify-center w-full">
      {data?.getSongs.map((song, idx) => {
        return (
          <li
            className="flex items-center justify-between my-2 w-full hover:bg-gray-600 cursor-pointer p-3 rounded-lg duration-500"
            style={{
              backgroundColor: `${
                song?._id === currentSong?._id ? "rgb(71 85 105)" : ""
              }`,
            }}
            key={idx}
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
      })}
    </ul>
  );
};

export default MusicPlaylist;
