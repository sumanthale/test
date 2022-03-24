import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Bounce from "react-reveal/Bounce";

const Slider01 = (props) => {
  const data = props.data;
  return (
    <section className="tf-slider slider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const SliderItem = (props) => (
  <div className="swiper-container ">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="slider-inner flex home-1">
            <div className="slider-content">
              <h1
                className="heading"
                style={{
                  fontFamily: "'Press Start 2P",
                }}
              >
                <Bounce top cascade>
                  {props.item.title.split(" ")[0]}
                </Bounce>
                <Bounce top cascade>
                  {props.item.title.split(" ")[1]}
                </Bounce>
                <Bounce top cascade>
                  {props.item.title.split(" ")[2]}
                </Bounce>
              </h1>
              <p className="sub-heading">{props.item.description}</p>
              <div className="button-slider">
                <Link
                  to="/item"
                  className="sc-button btn-bordered-white style letter "
                >
                  <span>Explore More</span>
                </Link>

                <Link
                  to="/live"
                  className="sc-button btn-bordered-white style file"
                >
                  <span>Buy Now</span>
                </Link>
              </div>
            </div>
            <div
              className="slider-img"
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="img-home-1">
                <img
                  src={props.item.img}
                  alt="Bidzen"
                  style={{ maxWidth: "120%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Slider01;
