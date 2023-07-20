import React, { createContext, useEffect, useState } from "react";
import { GET_SONGS } from "../apolloGraphql/apollo-queries";
import { useQuery } from "@apollo/client";

export const AppContext = createContext({
  search: "",
  setSearchHandler: (searchField) => {},
  currentSong: {},
  setCurrentSongHandler: (song) => {},
  currentPlaylist: [],
  setCurrentPlaylistHandler: (playlist) => {},
  backgroundGradient: "",
  setBackgroundGradientHandler: (gradient) => {},
  activeLink: 0,
  setActiveLinkHandler: (linkId) => {},
});

const AppContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [currentSong, setCurrentsong] = useState({});
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [backgroundGradient, setBackgroundGradient] = useState("");
  const [activeLink, setActiveLink] = useState(0);

  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      playlistId: activeLink,
      search: search === "" ? null : search,
    },
  });

  useEffect(() => {
    if (currentPlaylist?.length === 0) {
      setCurrentPlaylist(data?.getSongs);
    }

    if (Object.keys(currentSong ? currentSong : {}).length === 0) {
      setCurrentsong(data?.getSongs[0]);
    }

    setBackgroundGradient(
      "linear-gradient(160deg, #2d3748 8%, rgba(1,0,2,1) 90%)"
    );
  }, [data]);

  const setSearchHandler = (searchField) => {
    setSearch(searchField);
  };

  const setCurrentSongHandler = (song) => {
    setCurrentsong(song);
  };

  const setCurrentPlaylistHandler = (playlist) => {
    setCurrentPlaylist(playlist);
  };

  const setBackgroundGradientHandler = (gradient) => {
    setBackgroundGradient(gradient);
  };

  const setActiveLinkHandler = (linkId) => {
    setActiveLink(linkId);
  };

  const store = {
    search,
    setSearchHandler,
    currentSong,
    setCurrentSongHandler,
    currentPlaylist,
    setCurrentPlaylistHandler,
    backgroundGradient,
    setBackgroundGradientHandler,
    activeLink,
    setActiveLinkHandler,
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
