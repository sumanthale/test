import React from "react";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

const BestSeller = (props) => {
  return (
    <Flip top>
      <section className="tf-best-seller">
        <div className="best-seller-inner">
          <div className="row">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left">
                  <div className="inner">
                    <h3>ABOUT US</h3>
                    <p className="desc">
                      Solana Laughing Buddha Lotto is the first Solana-Based
                      Lottery that pays majority of it's revenue to holders. We
                      believe giving out most of our revenue is the only way to
                      stay legitimate. Other lottery NFTs give out 20, 30, or
                      50%... but we give out 80%. Why? Because we're members of
                      the ecosystem. We want to build for the longterm.
                    </p>
                  </div>
                </div>
                <div className="content-right">
                  <Link to="/" className="sc-button style letter style-2">
                    <span>Explore More</span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Flip>
  );
};

export default BestSeller;
