import React, { useContext } from "react";
import NavBar from "./pages/NavBar";
import { Routes, Route, Outlet } from "react-router-dom";
import MusicList from "./pages/MusicList";
import MusicPlayer from "./pages/MusicPlayer";
import { AppContext } from "./context/application-context";
import "./App.css";

function App() {
  const appCtx = useContext(AppContext);
  const backgroundGradient = appCtx.backgroundGradient;

  return (
    <div className="fade-in-fwd">
      <div
        className="flex max-lg:flex-col p-8 bg-bg_theme"
        style={{ background: backgroundGradient }}
      >
        <NavBar />

        <div className="grow text-center max-lg:order-last">
          <div className="puff-in-center">
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<MusicList id={1} />} />
                <Route path="/top-tracks" element={<MusicList id={2} />} />
                <Route path="/favourites" element={<MusicList id={3} />} />
                <Route path="/recently-played" element={<MusicList id={4} />} />
              </Route>
            </Routes>
          </div>
        </div>

        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
