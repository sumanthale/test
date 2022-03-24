import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const TrendingCollections = (props) => {
  const data = props.data;
  return (
    <section className="tf-trendy-collections tf-section">
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left">
                  <div className="inner">
                    <h3>FEATURED GAMES</h3>
                    <p className="desc">
                      Ten's of Casino Games on the Platform where you can return
                      with 2X or Nothing!. 5% tax for every transaction and part
                      of it will be distributed to NFT Holders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="trendy">
              {data.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className="sc-product-item style-2">
                    <div className="product-img">
                      <img src={item.img} alt="Bidzen" />
                      <Link
                        to="/item-details"
                        className="sc-button style letter"
                      >
                        <span>Play</span>
                      </Link>
                      <label>{item.tags}</label>
                    </div>
                    <div className="product-content">
                      <h5 className="title">
                        <Link to="/item-details">{item.title}</Link>{" "}
                      </h5>
                      <h6 className="text-muted px-3 pb-3 text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias qui ratione similique laborum molestias fugiat
                        reiciendis accusantium. Tenetur accusamus cum magni fuga
                        molestiae, facilis, corrupti veritatis nulla eos
                        asperiores nihil?
                      </h6>

                      <div className="product-price flex">
                        <div className="title">Single Play</div>
                        <div className="price">
                          <span>{item.price}</span>
                          <span>= {item.priceChange}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default TrendingCollections;
