import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LiveAution from "../components/layouts/home02/LiveAution";
import dataLiveAution from "../assets/fake-data/dataLiveAution";
import { Newsletters } from "../components/layouts/home/Newsletters";
import Footer from "../components/footer/FooterStyle2";

import imgdetail1 from "../assets/images/product-item/md-buddha.png";

const ItemDetails = () => {
  return (
    <div className="item-details">
      <section className="tf-section item-details-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="item-media">
                <div className="media">
                  <img src={imgdetail1} alt="Bidzen" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="content-item">
                <h3> Mission For Ghost Fighter</h3>
                <p className="mg-bt-42">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut
                </p>
                <ul className="list-details-item">
                  <li>
                    <span className="name">Current Price 1.5 SOL</span>
                    <span className="price">$500.89</span>{" "}
                  </li>
                  <li>lorem Ipsum</li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, voluptatem.
                  </li>
                </ul>
                {/* <div className="author-bid">
                  <div className="author-item">
                    <div className="avatar">
                      <img src={avt2} alt="Bidzen" />
                    </div>
                    <div className="infor">
                      <h6>
                        <Link to="/authors">Keith J. Kelley</Link>{" "}
                      </h6>
                      <div className="create">Creators</div>
                    </div>
                  </div>
                  <div className="author-item">
                    <div className="avatar">
                      <img src={avt3} alt="Bidzen" />
                    </div>
                    <div className="infor">
                      <h6>
                        <Link to="/authors">David Michels</Link>{" "}
                      </h6>
                      <div className="create">Collection</div>
                    </div>
                  </div>
                </div> */}
                <div className="infor-bid">
                  <div className="content-left">
                    <h6>Highest Winning</h6>
                    <div className="price">9.3 SOL</div>
                  </div>
                </div>
                <Link
                  to="/connect-wallet"
                  className="sc-button style letter style-2 style-item-details"
                >
                  <span>Play</span>
                </Link>
                {/* <div className="flat-tabs themesflat-tabs">
                  <Tabs>
                    <TabList>
                      <Tab>Bid</Tab>
                      <Tab>History</Tab>
                      <Tab>Details</Tab>
                    </TabList>

                    <TabPanel>
                      <ul className="bid-history-list">
                        {dataHistory.map((item, index) => (
                          <li key={index}>
                            <div className="content">
                              <div className="author-item">
                                <div className="avatar">
                                  <img src={item.img} alt="Bidzen" />
                                </div>
                                <div className="infor">
                                  <p>
                                    Bid listed for{" "}
                                    <span className="status">{item.price}</span>
                                    {item.time}
                                    by{" "}
                                    <span className="creator">
                                      {item.name}
                                    </span>{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                    <TabPanel>
                      <ul className="bid-history-list">
                        <li>
                          <div className="content">
                            <div className="author-item">
                              <div className="avatar">
                                <img src={img1} alt="Bidzen" />
                              </div>
                              <div className="infor">
                                <p>
                                  Bid listed for{" "}
                                  <span className="status">25 ETH 8</span>
                                  hours ago by{" "}
                                  <span className="creator">@Johnson</span>{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </TabPanel>
                    <TabPanel>
                      <div className="provenance">
                        <p>
                          lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetails;
