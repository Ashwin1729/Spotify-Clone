import React, { createContext, useEffect, useState } from "react";

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

    setBackgroundGradient(
      "linear-gradient(160deg, #2d3748 8%, rgba(1,0,2,1) 90%)"
    );
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
