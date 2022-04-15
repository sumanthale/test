import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import LightSpeed from "react-reveal/LightSpeed";

const LiveAution = (props) => {
  const data = props.data;
  return (
    <section className="tf-live-auctions tf-section bg-color-1 animate__animated animate__tada">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sc-heading style-2 has-icon">
              <div className="content-left">
                <LightSpeed left>
                  <div className="inner">
                    <div className="group">
                      <div className="icon">
                        <i className="ripple"></i>
                      </div>
                      <h3>Live Mints</h3>
                    </div>
                    <p className="desc">
                      Grab your chance to win some SOL and/or NFTs by minting
                      tickets in our ongoing giveaways
                    </p>
                  </div>
                </LightSpeed>
              </div>
            </div>
          </div>
          <LightSpeed right>
            <div className="col-md-12">
              <div className="swiper-container">
                <div className="swiper-wrapper live-auc">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      767: {
                        slidesPerView: 2,
                      },
                      991: {
                        slidesPerView: 3,
                      },
                      1300: {
                        slidesPerView: 4,
                      },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    {data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <LiveAutionItem item={item} index={index} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </LightSpeed>
        </div>
      </div>
    </section>
  );
};

const LiveAutionItem = (props) => (
  <div
    className="swiper-slide"
    style={{
      display: props.index === 0 ? "block" : "none",
    }}
  >
    <div className="slider-item">
      <div className="sc-product-item p-1">
        <div className="product-img">
          <img src={props.item.img} alt="Bidzen" />
          <a href={props.item.id} className="sc-button style letter">
            <span>Buy</span>
          </a>
          {props.item.tags && <label>{props.item.tags}</label>}
        </div>
        <div className="product-content">
          <h5 className="h1 text-primary">{props.item.category}</h5>
          <div
            class="card mt-3"
            style={{
              background: "transparent",
              border: "none",
            }}
          >
            <div class="card-body">
              <h6 class="card-subtitle mb-2 ">Description:</h6>
              <div class="text-muted mb-3 ">{props.item.description}</div>

              <h6 class="card-subtitle mb-3">
                Supply: <span className="text-muted">{props.item.supply}</span>
              </h6>
              <h6 class="card-subtitle mb-3">
                Winners:{" "}
                <span className="text-muted">{props.item.winners}</span>
              </h6>
              <h6 class="card-subtitle mb-3">
                Price: <span className="text-muted">{props.item.price}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LiveAution;
