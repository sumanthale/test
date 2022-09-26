import React from "react";
import Slide from "react-reveal/Bounce";
import EOE from "../assets/elves/EoE.jpg";

import Lotto1 from "../assets/lotto/1.jpeg";
import Lotto2 from "../assets/lotto/2.jpeg";
import Lotto3 from "../assets/lotto/3.jpeg";
const ChapterOne = (props) => {
  return (
    <section
      className="tf-best-seller"
      style={{
        position: "relative",
        margin: "80px 0",
      }}
    >
      <span
        id="chapterOne"
        style={{
          position: "absolute",
          top: "-100px",
        }}
      ></span>
      <div className="best-seller-inner">
        <h2 className="mb-5 text-center">
          Chapter One : Fun and Entertainment
        </h2>
        <Slide right>
          <div className="row">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left">
                  <div className="inner">
                    {/* <h4 className="">
                      Fun
                    </h4> */}
                    <img src={EOE} alt="" />
                  </div>
                </div>
                <div className="content-right d-flex flex-column justify-content-center align-items-center">
                  <h3 className="my-3 text-center">Solana Arcade Games</h3>
                  <p className="desc text-justify px-3 mx-auto ">
                    Solana Arcade Games is the first Solana-based Arcade
                    platform hosting 6+ games before the mint and will have 50+
                    games by the end of 2022. All games are categorized into
                    Skill, Luck, and Casino with cool UI and higher rewardings
                    returns compared to the existing peers. <br />
                    The players can play either with $SOL or $ELVES and more
                    partnered tokens.
                    <br />
                    Get ready to play and earn or enjoy the experience of the
                    games!
                  </p>
                  <a
                    href="https://solanaarcadegames.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sc-button btn-bordered-white style letter "
                  >
                    <span>Explore More</span>
                  </a>
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
                  <h3 className="mb-5 text-center">Spyder Lotto</h3>

                  <p className="desc text-justify px-3 mx-auto ">
                    Spyder Lotto is the first proven Solana based
                    lottery/giveaway that not only pays the majority of its
                    revenue to holders/players, but also has 25% wins (1 in 4
                    wins!).
                    <br />
                    We believe in giving out not just 30%, 40%, or 50%, but 80%
                    of the revenue and 1 in 4 wins is the only legitimate way.
                    All of our Giveaways will be transparent . <br />
                    We have 4 giveaways/lottery in operation: SOL Manic
                    Giveaways, SOL NFT Feast Giveaways, Progressive Jackpot
                    Lottery, and Hybrid Lottery.
                    <br />
                    Intrigued? Get ready to have fun!
                    <a
                      href="https://spyderlotto.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sc-button btn-bordered-white style letter ml-4 py-1 px-3"
                    >
                      <span>Click Here</span>
                    </a>
                  </p>
                </div>
                <div className="content-right d-flex justify-content-center align-items-center mt-2">
                  <img
                    src={Lotto1}
                    alt=""
                    style={{
                      width: "30%",
                    }}
                  />
                  <img
                    src={Lotto2}
                    alt=""
                    style={{
                      width: "30%",
                      margin: "0 20px",
                    }}
                  />
                  <img
                    src={Lotto3}
                    alt=""
                    style={{
                      width: "30%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default ChapterOne;
