import React from "react";

function App() {
  return (
    <div className="flex">
      <div className="#NavBar flex-none w-40 text-center">
        <p>Nav Bar</p>
      </div>
      <div className="#musicList grow text-center">
        <p>Music List</p>
      </div>
      <div className="#musicPlayer flex-none w-1/2 text-center">
        <p>Music Player</p>
      </div>
    </div>
  );
}

export default App;
