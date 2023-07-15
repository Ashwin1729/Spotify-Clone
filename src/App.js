import React from "react";
import NavBar from "./pages/NavBar";
import { Routes, Route, Outlet } from "react-router-dom";
import MusicList from "./pages/MusicList";

function App() {
  return (
    <div className="flex p-8 bg-bg_theme">
      <NavBar />
      <div className="#musicList grow text-center">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<MusicList />} />
          </Route>
        </Routes>
      </div>
      <div className="#musicPlayer flex-none w-1/2 text-center">
        <p>Music Player</p>
      </div>
    </div>
  );
}

export default App;
