import React from "react";
import { Link } from "react-router-dom";
import LiveMints from "../components/layouts/home/LiveMints";
import dataLiveAution from "../assets/fake-data/dataLiveAution";
const Item = () => {
  return (
    <div className="item">
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">All Mints</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Mints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LiveMints data={dataLiveAution} />
    </div>
  );
};

export default Item;
