import React from "react";
import { Link } from "react-router-dom";

const TopSeller = (props) => {
  const data = props.data;
  return (
    <div className="tf-section top-seller pb-5 pt-0 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-3">
              <h3>OUR TEAM</h3>
              <p className="desc">
                Our team consists of the Project Lead, Senior Game Developers,
                BlockChain Experts, Supersonic Marketers, and Awesome Designers.
                We're launching this to revolutionize the online arcade gaming
                experience on Solana Blockchain.
              </p>
            </div>
          </div>
          {data.slice(0, 4).map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`sc-author-card style-2 ${item.active}`}>
                <div className="card-media">
                  <img
                    src={item.img}
                    alt="Bidzen"
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <div className="card-avatar">
                  <img src={item.avt} alt="Bidzen" />
                </div>
                <div className="card-content mt-5">
                  <h5>{item.name}</h5>
                  {/* <div className="card-bottom">
                    <div className="widget-social">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla voluptate esse vero repellat veritatis veniam
                      explicabo possimus, sint error quaerat tempore eum sed
                      accusamus quisquam, tempora sunt labore ipsum debitis.
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
