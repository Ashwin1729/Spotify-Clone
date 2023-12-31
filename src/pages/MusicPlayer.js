import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/application-context";
import {
  OptionsIcon,
  PreviousIcon,
  PlayIcon,
  PauseIcon,
  NextIcon,
  MuteIcon,
  UnmuteIcon,
} from "../assets/icons/index";
import MusicPlayerSkeleton from "../components/MusicPlayerSkeleton";

const MusicPlayer = () => {
  // context data
  const appCtx = useContext(AppContext);

  const audioRef = useRef();
  const initialRender = useRef(true);

  // music controllers hooks
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");

  const songInfo = appCtx.currentSong;

  useEffect(() => {
    audioRef.current.src = songInfo?.url;
    audioRef.current.load();
    setIsPlaying(true);
    setIsMute(false);
    const music_player_element = document.getElementById(songInfo?._id);
    music_player_element?.classList?.add("tilt-in-tr");
  }, [songInfo]);

  useEffect(() => {
    if (initialRender.current && appCtx.currentPlaylist?.length > 0) {
      initialRender.current = false;
      setIsPlaying(false);
      return;
    }
  }, [appCtx.currentPlaylist]);

  useEffect(() => {
    audioRef.current.muted = isMute;
  }, [isMute]);

  const playButtonHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Music player controller handler functions

  const muteHandler = () => {
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

  // skeleton loading

  if (!songInfo) {
    return <MusicPlayerSkeleton audioRef={audioRef} />;
  }

  return (
    <div
      className="flex flex-col items-center w-1/2 max-lg:w-full text-center my-12 text-white lg:sticky lg:top-8 lg:h-[calc(100vh-200px)]"
      key={songInfo._id}
    >
      <div className="flex flex-col text-left w-7/12 ">
        <h2 className="text-3xl font-semibold">{songInfo?.title}</h2>
        <p className="text-gray-400">{songInfo?.artist}</p>
      </div>
      <img
        src={songInfo?.photo}
        alt={songInfo?.title}
        id={songInfo?._id}
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
          <OptionsIcon />

          <div className="flex items-center justify-center w-full gap-2">
            <PreviousIcon prevSongHandler={prevSongHandler} />

            {isPlaying ? (
              <PauseIcon playButtonHandler={playButtonHandler} />
            ) : (
              <PlayIcon playButtonHandler={playButtonHandler} />
            )}
            <NextIcon nextSongHandler={nextSongHandler} />
          </div>

          {isMute ? (
            <UnmuteIcon muteHandler={muteHandler} />
          ) : (
            <MuteIcon muteHandler={muteHandler} />
          )}
        </div>
      </div>

      <audio autoPlay ref={audioRef} onTimeUpdate={currentTimeHandler} />
    </div>
  );
};

export default MusicPlayer;
