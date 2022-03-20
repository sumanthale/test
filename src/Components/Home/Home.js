import React from "react";
import About from "./About/About";
import GameCollection from "./GameCollection/GameCollection";
import Intro from "./Intro/Intro";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <GameCollection />
    </>
  );
};

export default Home;
