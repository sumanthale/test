import React, { useState, useEffect } from "react";
import song from "../assets/elves/music/naruto.mp3";
import ON from "../assets/elves/music/on.svg";
import OFF from "../assets/elves/music/off.svg";

const useAudio = () => {
  const [audio] = useState(new Audio(song));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio();

  return (
    <div
      style={{
        position: "fixed",
        top: "38%",
        right: "10px",
        zIndex: "1000",
      }}
    >
      <img
        src={`${playing ? ON : OFF}`}
        onClick={toggle}
        style={{
          width: "50px",
          cursor: "pointer",
          boxShadow: "rgb(39 59 122) 0px 0px 10px",
          borderRadius: "50%",
        }}
        alt=""
      />
    </div>
  );
};

export default Player;
