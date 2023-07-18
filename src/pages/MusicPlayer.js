import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/application-context";

const MusicPlayer = () => {
  const appCtx = useContext(AppContext);
  const audioRef = useRef();
  const initialRender = useRef(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");

  // console.log(audioRef);

  const songInfo = appCtx.currentSong;

  useEffect(() => {
    audioRef.current.src = songInfo?.url;
    audioRef.current.load();
    setIsPlaying(true);
  }, [songInfo]);

  useEffect(() => {
    if (initialRender.current && appCtx.currentPlaylist.length > 0) {
      initialRender.current = false;
      setIsPlaying(false);
      return;
    }
  }, [appCtx.currentPlaylist]);

  const playButtonHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const muteHandler = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMute((prevMuteState) => !prevMuteState);
  };

  const currentTimeHandler = () => {
    const audioCurrentTime = audioRef.current?.currentTime;
    const minutes = "0" + Math.floor(audioCurrentTime / 60);
    const seconds = "0" + Math.floor(audioCurrentTime - minutes * 60);
    const duration = minutes.slice(-2) + ":" + seconds.slice(-2);
    setCurrentTime(duration);
  };

  const seekSliderHandler = (event) => {
    const seekerValue = event.target.value;
    const minutes = "0" + Math.floor(seekerValue / 60);
    const seconds = "0" + Math.floor(seekerValue - minutes * 60);
    const duration = minutes.slice(-2) + ":" + seconds.slice(-2);
    if (audioRef.current) {
      audioRef.current.currentTime = seekerValue;
    }
    setCurrentTime(duration);
  };

  const prevSongHandler = () => {
    const currentSongIndex = appCtx.currentPlaylist
      .map((song) => song._id)
      .indexOf(songInfo._id);

    const newIndex =
      currentSongIndex === 0
        ? appCtx.currentPlaylist.length - 1
        : currentSongIndex - 1;

    appCtx.setCurrentSongHandler(appCtx.currentPlaylist[newIndex]);
  };

  const nextSongHandler = () => {
    const currentSongIndex = appCtx.currentPlaylist
      .map((song) => song._id)
      .indexOf(songInfo._id);

    const newIndex = (currentSongIndex + 1) % appCtx.currentPlaylist.length;

    appCtx.setCurrentSongHandler(appCtx.currentPlaylist[newIndex]);
  };

  return (
    <div className="flex flex-col items-center w-1/2 max-md:w-full text-center my-12 text-white">
      <div className="flex flex-col text-left w-7/12 ">
        <h2 className="text-3xl font-semibold">{songInfo?.title}</h2>
        <p className="text-gray-400">{songInfo?.artist}</p>
      </div>
      <img
        src={songInfo?.photo}
        alt={songInfo?.title}
        className="rounded-lg object-contain h-7/12 w-7/12 my-6"
      />
      <div className="flex flex-col items-center justify-center w-7/12">
        <div className="flex items-center w-full">
          <span className="text-white text-sm">{currentTime}</span>

          <div className="flex items-center mx-4 w-full h-1 rounded-sm bg-slate-500">
            <input
              type="range"
              value={audioRef.current?.currentTime ?? 0}
              max={audioRef.current?.duration ?? 0}
              className="seeking_slider"
              onChange={seekSliderHandler}
            />
          </div>

          <span className="text-white text-sm">
            {songInfo?.duration?.toString().slice(0, 1) +
              ":" +
              songInfo?.duration?.toString().slice(1)}
          </span>
        </div>
        <div className="flex items-center justify-center w-full py-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-14 h-12 text-gray-200 p-2 rounded-full hover:bg-gray-500 duration-500"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clipRule="evenodd"
            />
          </svg>

          <div className="flex items-center justify-center w-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 duration-500 cursor-pointer"
              onClick={prevSongHandler}
            >
              <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
            </svg>

            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 cursor-pointer text-gray-200 p-1 rounded-full hover:bg-gray-500 duration-500"
                onClick={playButtonHandler}
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 cursor-pointer text-gray-200 p-1 rounded-full hover:bg-gray-500 duration-500"
                onClick={playButtonHandler}
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-gray-200 mx-4 p-2 rounded-full hover:bg-gray-500 duration-500 cursor-pointer"
              onClick={nextSongHandler}
            >
              <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
            </svg>
          </div>

          {isMute ? (
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 225.000000 225.000000"
              preserveAspectRatio="xMidYMid meet"
              className="w-12 h-10 text-gray-200 p-2 rounded-full hover:bg-gray-500 duration-500 cursor-pointer"
              onClick={muteHandler}
            >
              <g
                transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M263 2048 c-21 -22 -27 -42 -24 -83 1 -23 1729 -1757 1775 -1781 55
           -30 116 9 116 73 0 36 -14 52 -330 368 l-330 330 0 520 c0 558 0 558 -52 583
           -50 24 -83 0 -334 -245 l-238 -233 -243 243 c-223 222 -246 242 -281 245 -29
           2 -43 -2 -59 -20z"
                />
                <path
                  d="M415 1463 c-11 -3 -30 -14 -42 -26 -23 -20 -23 -22 -23 -314 l0 -294
           25 -24 c24 -25 27 -25 188 -25 l164 0 292 -287 c303 -298 346 -332 396 -313
           43 16 55 63 55 207 l0 128 -478 478 c-475 474 -478 477 -517 476 -22 -1 -49
           -3 -60 -6z"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-10 text-gray-200 p-2 rounded-full hover:bg-gray-500 duration-500 cursor-pointer"
              onClick={muteHandler}
            >
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
              <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
            </svg>
          )}
        </div>
      </div>

      <audio autoPlay ref={audioRef} onTimeUpdate={currentTimeHandler} />
    </div>
  );
};

export default MusicPlayer;
