import React from "react";

import {
  OptionsIcon,
  PreviousIcon,
  PlayIcon,
  NextIcon,
  MuteIcon,
} from "../assets/icons/index";

const MusicPlayerSkeleton = ({ audioRef }) => {
  return (
    <div className="flex flex-col items-center w-1/2 max-lg:w-full text-center my-12 text-white animate-pulse lg:sticky lg:top-20 lg:h-[calc(100vh-200px)]">
      <div className="flex flex-col text-left w-96 ">
        <h2 className="h-6 mb-3 bg-slate-200 rounded w-60"></h2>
        <p className="h-3 bg-slate-200 rounded w-32"></p>
      </div>

      <div className="rounded-lg bg-slate-200 h-96 w-96 my-6"></div>
      <div className="flex flex-col items-center justify-center w-96">
        <div className="flex items-center w-full">
          <div className="h-2 bg-slate-200 rounded w-10"></div>

          <div className="flex items-center mx-4 w-full h-1 rounded-sm bg-slate-200"></div>

          <span className="h-2 bg-slate-200 rounded w-10"></span>
        </div>
        <div className="flex items-center justify-center w-full py-2 my-4">
          <OptionsIcon />

          <div className="flex items-center justify-center w-full gap-2">
            <PreviousIcon prevSongHandler={() => {}} />

            <PlayIcon playButtonHandler={() => {}} />

            <NextIcon nextSongHandler={() => {}} />
          </div>

          <MuteIcon muteHandler={() => {}} />
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayerSkeleton;
