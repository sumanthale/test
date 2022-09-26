import React from "react";

import dataSlider from "../assets/fake-data/dataSlider2";
import Slider02 from "../components/slider/Slider02";
import RoadMap from "../components/layouts/home/RoadMap";
import About from "../components/layouts/home/About";
import FAQ from "../components/layouts/home/FAQ";
import dataBestSeller from "../assets/fake-data/dataBestSeller";
import Footer from "../components/footer/FooterStyle2";
import { Newsletters } from "../components/layouts/home/Newsletters";
import OURTeam from "../components/layouts/creacte-item/TopSeller";
import dataHotCollection2 from "../assets/fake-data/dataHotCollection2";
import ChapterOne from "./ChapterOne";
import NftCollections from "./NftCollections";

const Home01 = () => {
  return (
    <div className="home-1">
      <Slider02 data={dataSlider} />
      <ChapterOne />
      <NftCollections />
      <RoadMap data={dataBestSeller} />
      <About data={dataBestSeller} />
      <OURTeam data={dataHotCollection2} />
      <FAQ data={dataBestSeller} />
      <Newsletters />
      <Footer />
    </div>
  );
};

export default Home01;
