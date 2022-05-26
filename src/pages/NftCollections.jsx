import React from "react";
import Slide from "react-reveal/Fade";

import Mythic from "../assets/elves/gifs/mythic.gif";
import Rare from "../assets/elves/gifs/rare.gif";
import Legendary from "../assets/elves/gifs/legend.gif";
import Uncommon from "../assets/elves/gifs/uncommon.gif";
import Common from "../assets/elves/gifs/common.gif";
const NftCollections = (props) => {
  return (
    <section
      className="tf-best-seller"
      style={{
        position: "relative",
        margin: "80px 0",
      }}
    >
      <span
        id="nfts"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></span>
      <div className="best-seller-inner">
        <h2 className="my-3 text-center">NFT Collections & Rarity</h2>
        <Slide right>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left">
                  <div className="inner text-center">
                    <img
                      src={Mythic}
                      alt=""
                      style={{
                        margin: "auto",
                      }}
                    />
                    {/* <h4 className="">Mythic</h4> */}
                  </div>
                </div>
                <div className="content-right d-flex flex-column justify-content-center align-items-center">
                  <h3 className="my-3 text-center">🔮 Mythic</h3>
                  <p className="desc text-justify px-3 mx-auto ">
                    Staking a Mythic NFT collection will yield 35{" "}
                    <span className="text-success">$ELVES </span> tokenss one
                    day after the cooling period. These{" "}
                    <span className="text-success">$ELVES </span> can be used
                    directly to play our Solana Arcade games or traded on DEX
                    after listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left d-flex flex-column justify-content-center align-items-center">
                  <h3 className="my-3 text-center">🐉 Legendary</h3>

                  <p className="desc text-justify px-3 mx-auto ">
                    Staking a Legendary NFT collection will yield 25{" "}
                    <span className="text-success">$ELVES </span>
                    tokensa one day after the cooling period. These{" "}
                    <span className="text-success">$ELVES </span> can be used
                    directly to play in our Solana Arcade games or traded on DEX
                    after listing.
                  </p>
                </div>
                <div className="content-right d-flex justify-content-center align-items-center">
                  <img
                    src={Legendary}
                    alt=""
                    style={{
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left">
                  <div className="inner text-center">
                    <img
                      src={Rare}
                      alt=""
                      style={{
                        margin: "auto",
                      }}
                    />
                    {/* <h4 className="">Mythic</h4> */}
                  </div>
                </div>
                <div className="content-right d-flex flex-column justify-content-center align-items-center">
                  <h3 className="my-3 text-center">🦄 Rare</h3>
                  <p className="desc text-justify px-3 mx-auto ">
                    Staking a Rare NFT collection will yield 15{" "}
                    <span className="text-success">$ELVES </span> tokenss one
                    day after the cooling period. These{" "}
                    <span className="text-success">$ELVES </span> can be used
                    directly to play in our Solana Arcade games or traded on DEX
                    after listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left d-flex flex-column justify-content-center align-items-center">
                  <h3 className="my-3 text-center">✨ UnCommon</h3>

                  <p className="desc text-justify px-3 mx-auto ">
                    Staking a UnCommon NFT collection will yield 8{" "}
                    <span className="text-success">$ELVES </span> tokens one day
                    after the cooling period. These{" "}
                    <span className="text-success">$ELVES </span> can be used
                    directly to play in our Solana Arcade games or traded on DEX
                    after listing.
                  </p>
                </div>
                <div className="content-right d-flex justify-content-center align-items-center">
                  <img
                    src={Uncommon}
                    alt=""
                    style={{
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left">
                  <div className="inner text-center">
                    <img
                      src={Common}
                      alt=""
                      style={{
                        margin: "auto",
                      }}
                    />
                    {/* <h4 className="">Mythic</h4> */}
                  </div>
                </div>
                <div className="content-right d-flex flex-column justify-content-center align-items-center">
                  <h3 className="my-3 text-center">🧝🏻 Common</h3>
                  <p className="desc text-justify px-3 mx-auto ">
                    Staking a Common NFT collection will yield 5{" "}
                    <span className="text-success">$ELVES </span> tokens one day
                    after the cooling period. These{" "}
                    <span className="text-success">$ELVES </span> can be used
                    directly to play in our Solana Arcade games or traded on DEX
                    after listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default NftCollections;
