import { useState, useEffect, useRef } from "react";
import style from "./Player.module.css";

import tracks from "./tracks";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const { id, artist, title, source } = tracks[currentTrack];
  const audioRef = useRef(typeof Audio !== "undefined" && new Audio(source));

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const restartAndPrevious = () => {
    if (currentTrack - 1 < 0) {
      setCurrentTrack(tracks.length - 1);
    } else {
      setCurrentTrack(currentTrack - 1);
    }
  };

  const nextSong = (e) => {
    if (currentTrack === tracks.length - 1) setCurrentTrack(0);
    else setCurrentTrack(currentTrack + 1);
    e.preventDefault();
  };

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(source);
    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  return (
    <div className={style.auioContainer}>
      <div className={style.audioDetail} key={id}>
        <div className={style.trackInfo}>
          <div className={style.audioTitle}>{title}</div>
          <div className={style.audioSubTitle}>{artist}</div>
        </div>
        <div className={style.musicVisual}>
          <span className={isPlaying ? style.musicBars : style.paused} />
          <span className={isPlaying ? style.musicBars : style.paused} />
          <span className={isPlaying ? style.musicBars : style.paused} />
          <span className={isPlaying ? style.musicBars : style.paused} />
          <span className={isPlaying ? style.musicBars : style.paused} />
          <span className={isPlaying ? style.musicBars : style.paused} />
        </div>
        <div className={style.buttonContainer}>
          <button className={style.playerButton} onClick={restartAndPrevious}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path>
            </svg>
          </button>
          <button
            className={isPlaying ? style.isPlaying : style.playerButton}
            onClick={togglePlayPause}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={isPlaying ? "M8 7h3v10H8zm5 0h3v10h-3z" : "M7 6v12l10-6z"}
              ></path>
            </svg>
          </button>
          <button className={style.playerButton} onClick={(e) => nextSong(e)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
