import React from "react";
import Flip from "react-reveal/Flip";

const BestSeller = (props) => {
  return (
    <Flip top>
      <section
        className="tf-best-seller"
        style={{
          position: "relative",
          // margin: "80px 0",
        }}
      >
        <span
          id="about"
          style={{
            position: "absolute",
            top: "-100px",
          }}
        ></span>
        <div className="best-seller-inner">
          <div className="row">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="inner">
                  <h3>ABOUT US</h3>
                  <p className="desc">
                    We are a group of talented members that have come together
                    in the blockchain and NFT space during pandemic.
                    <br />
                    We invested in many rugged projects or projects with no
                    utilities like most of you guys. We are here to do the
                    things the right way, that's why we funded the project
                    entirely ourselves with utilities ready to go before the
                    mint. We are proud to say this will be the first project on
                    Solana where utility is ready to use from day one. A promise
                    is a promise no matter how big or small it is !
                    <br />
                    <br />
                    <span className="h4 text-success">
                      Our promise is to make our holders and players profitable.
                    </span>
                  </p>
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
