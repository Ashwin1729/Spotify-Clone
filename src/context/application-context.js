import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  search: "",
  setSearchHandler: (searchField) => {},
  currentSong: {},
  setCurrentSongHandler: (song) => {},
  currentPlaylist: [],
  setCurrentPlaylistHandler: (playlist) => {},
  //   duration: 0,
  //   setDurationHandler: () => {},
  //   currentTime: "",
  //   setCurrentTimeHandler: () => {},
  //   isPlaying: false,
  //   setIsPlayingHandler: () => {},
  //   background: "",
  //   setBackgroundHandler: () => {},
});

const AppContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [currentSong, setCurrentsong] = useState({});
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  useEffect(() => {
    setCurrentsong({
      _id: "61b6f14dc2f7cafd968c31f0",
      title: "Starboy",
      artist: "Weeknd",
      photo:
        "https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg",
      url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
      duration: 320,
    });
  }, []);

  const setSearchHandler = (searchField) => {
    setSearch(searchField);
  };

  const setCurrentSongHandler = (song) => {
    setCurrentsong(song);
  };

  const setCurrentPlaylistHandler = (playlist) => {
    setCurrentPlaylist(playlist);
  };

  const store = {
    search,
    setSearchHandler,
    currentSong,
    setCurrentSongHandler,
    currentPlaylist,
    setCurrentPlaylistHandler,
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
