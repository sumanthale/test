import React from "react";
import { Link } from "react-router-dom";

const LatestCollection = (props) => {
  const data = props.data;
  return (
    <section className="tf-section our-latest-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading">
              <h3>Our Latest Collections</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati deserunt, labore maiores porro sunt vel inventore
                incidunt vero dolorem enim, praesentium in est atque ab et
                repellat, error eum voluptates.
              </p>
            </div>
          </div>
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className={item.col}>
              <div className="sc-product-item style-4">
                <div className="product-img flex">
                  <div className="img-left">
                    <img src={item.img} alt="Bidzen" />
                    <label>{item.tags}</label>
                  </div>
                  <div className="img-right">
                    <div className="top-img flex">
                      <img src={item.img1} alt="Bidzen" />
                      <img src={item.img2} alt="Bidzen" />
                    </div>
                    <div className="bottom-img">
                      <img src={item.img3} alt="Bidzen" />
                    </div>
                  </div>
                </div>
                <div className="product-content">
                  <h5 className="title">
                    <Link to="/item-details">{item.title}</Link>{" "}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
