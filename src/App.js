import React from "react";
import NavBar from "./pages/NavBar";
import { Routes, Route, Outlet } from "react-router-dom";
import MusicList from "./pages/MusicList";
import MusicPlayer from "./pages/MusicPlayer";

function App() {
  return (
    <div className="flex max-md:flex-col p-8 bg-bg_theme">
      <NavBar />
      <div className="grow text-center max-md:order-last">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<MusicList id={1} />} />
            <Route path="/top-tracks" element={<MusicList id={2} />} />
            <Route path="/favourites" element={<MusicList id={3} />} />
            <Route path="/recently-played" element={<MusicList id={4} />} />
          </Route>
        </Routes>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
