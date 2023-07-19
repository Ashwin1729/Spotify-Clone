import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/application-context";
import ColorThief from "colorthief";
import SkeletonCard from "./SkeletonCard";
import MusicCard from "./MusicCard";
import { GET_SONGS } from "../apolloGraphql/apollo-queries";

let skeleton = [];

for (let i = 0; i < 10; i++) {
  skeleton.push(<SkeletonCard key={i} />);
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
        return <MusicCard song={song} key={idx} />;
      })}
    </ul>
  );
};

export default MusicPlaylist;
