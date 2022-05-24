import React from "react";
import Slide from "react-reveal/Bounce";
import EOE from "../assets/elves/EoE.jpg";

import Lotto1 from "../assets/lotto/1.png";
import Lotto2 from "../assets/lotto/2.png";
import Lotto3 from "../assets/lotto/3.png";
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
                    Solana Aracade Games is the first Solana-based Aracade games
                    hosting 6 or more games before the mint and will be having
                    50+ games by end of 2022. All the games are categorized into
                    Skill, Luck and casino with cool UI and highly rewardings
                    returns compared to the existing piers. <br />
                    The players can play either with $SOL or $ELVES and more
                    partnership will be added in future.
                    <br />
                    Ready to play and earn or want to experience the games
                  </p>
                  <a
                    href="https://solanaarcadegames.netlify.app/"
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
                  <h3 className="mb-5 text-center">Elves Giveaways</h3>

                  <p className="desc text-justify px-3 mx-auto ">
                    Elves Giveaways is the first proven Solana based
                    lottery/giveaways that not only pays the majority of its
                    revenue to holders/players but also has 25% wins (1 in 4
                    wins!). <br />
                    We believe in giving out not just 30%, 40% or 50% but 80% of
                    the revenue and 1 in 4 wins is the only legitimate way. All
                    of our Giveaways will be transparent . <br />
                    We have 4 giveaways/lottery in operational - SOL Manic
                    Giveaways , SOL NFT Feast Giveaways, Progressive Jackpot
                    Lottery and Hybrid Lottery.
                    <br />
                    Intrigued , ready to have fun ...
                    <a
                      href="https://solanaarcadegames.netlify.app/"
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
                      width: "25%",
                    }}
                  />
                  <img
                    src={Lotto2}
                    alt=""
                    style={{
                      width: "25%",
                    }}
                  />
                  <img
                    src={Lotto3}
                    alt=""
                    style={{
                      width: "25%",
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
