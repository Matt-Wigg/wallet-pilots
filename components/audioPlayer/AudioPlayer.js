import { useState, useRef } from "react";
import style from "./AudioPlayer.module.css";

const AudioPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.loop = true;
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const restartAndPrevious = () => {
    const prevValue = isPlaying;
    if (!prevValue) {
      audioPlayer.current.load();
      audioPlayer.current.play();
      setIsPlaying(!prevValue);
    } else {
      audioPlayer.current.pause();
      audioPlayer.current.load();
      audioPlayer.current.play();
    }
  };

  return (
    <div className={style.auioContainer}>
      <div className={style.audioDetail}>
        <div className={style.trackInfo}>
          <div className={style.audioTitle}>Kunk</div>
          <div className={style.audioSubTitle}>Sad Night Dynamite</div>
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
            <audio
              ref={audioPlayer}
              src="https://hikefightmusic.s3.us-west-1.amazonaws.com/krunk.mp3"
              preload="metadata"
            ></audio>
            <button className={isPlaying ? style.playerButtonActive : style.playerButton} onClick={togglePlayPause}>
              {isPlaying ? (
                <svg 
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
                </svg>
              ) : (
                <svg 
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 6v12l10-6z"></path>
                </svg>
              )}
            </button>
            {/* <button className={style.playerButton}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="sm"
                width="sm"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
