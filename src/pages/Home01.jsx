import React from "react";
import dataCategory from "../assets/fake-data/dataCategory";
import dataCollections from "../assets/fake-data/dataCollections";
import LatestCollections from "../components/layouts/home/LatestCollections";
import Category from "../components/layouts/home/Category";
import dataSlider from "../assets/fake-data/dataSlider";
import Slider01 from "../components/slider/Slider01";
import LiveMints from "../components/layouts/home/LiveMints";
import RoadMap from "../components/layouts/home/RoadMap";
import dataLiveAution from "../assets/fake-data/dataLiveAution";
import About from "../components/layouts/home/About";
import FAQ from "../components/layouts/home/FAQ";
import dataBestSeller from "../assets/fake-data/dataBestSeller";
import TrendingGames from "../components/layouts/home/TrendingCollections";
import dataTrendingCollections from "../assets/fake-data/dataTrendingCollections";
import Footer from "../components/footer/FooterStyle2";
import { Newsletters } from "../components/layouts/home/Newsletters";
import OURTeam from "../components/layouts/creacte-item/TopSeller";
import dataHotCollection2 from "../assets/fake-data/dataHotCollection2";

const Home01 = () => {
  return (
    <div className="home-1">
      <Slider01 data={dataSlider} />
      <LiveMints data={dataLiveAution} />
      <About data={dataBestSeller} />
      <TrendingGames data={dataTrendingCollections} />
      <RoadMap data={dataBestSeller} />
      <FAQ data={dataBestSeller} />
      <OURTeam data={dataHotCollection2} />
      <Newsletters />
      <Footer />
    </div>
  );
};

export default Home01;
