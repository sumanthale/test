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
                We're a team of entrepreneurs from All Over the World. Our team
                consists of a Project Lead, Senior Game Developers, BlockChain
                Experts, Supersonic Marketers, and Awesome Designers. We're
                launching this to revolutionize the online casino gaming
                experience on Solana Blockchain.
              </p>
            </div>
          </div>
          {data.slice(0, 4).map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`sc-author-card style-2 ${item.active}`}>
                <div className="card-media">
                  <img src={item.img} alt="Bidzen" />
                </div>
                <div className="card-avatar">
                  <img src={item.avt} alt="Bidzen" />
                </div>
                <div className="card-content">
                  <h5>{item.name}</h5>
                  <div className="details">{item.postion}</div>
                  <div className="card-bottom">
                    <div className="widget-social">
                      <ul>
                        <li>
                          <Link to="#" className="active">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <Link to="/login" className="sc-button style-2">
                      <span>Follow</span>
                    </Link> */}
                  </div>
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
