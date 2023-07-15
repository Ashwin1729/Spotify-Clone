import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex p-8 bg-bg_theme">
      <NavBar />
      <div className="#musicList grow text-center"></div>
      <div className="#musicPlayer flex-none w-1/2 text-center">
        <p>Music Player</p>
      </div>
    </div>
  );
}

export default App;
