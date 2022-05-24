import React from "react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Bounce from "react-reveal/Bounce";

import "swiper/css";
import "swiper/css/pagination";

const Slider02 = (props) => {
  const data = props.data;
  return (
    <section className="tf-slider slider">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
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
          <div className="container">
            <div className="slider-inner flex home-1 style-2">
              <div className="slider-content">
                <h1
                  className="heading text-center elves-of-elysium"
                  style={{
                    fontFamily: "'Press Start 2P",
                    color: "#f92641",
                  }}
                >
                  <Bounce top cascade>
                    {props.item.title.split(" ")[0]}
                  </Bounce>
                  <Bounce top cascade>
                    <span className="text-center">
                      {props.item.title.split(" ")[1]}
                    </span>
                  </Bounce>
                  <Bounce top cascade>
                    {props.item.title.split(" ")[2]}
                  </Bounce>
                </h1>
                <p
                  className="sub-heading"
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "left",
                  }}
                >
                  {props.item.description}
                </p>
                <div className="button-slider">
                  {props.item.title === "ELVES OF ELYSIUM" ? (
                    <>
                      {/* <Link
                        to="/explore-01"
                        className="sc-button btn-bordered-white style letter "
                      >
                        <span>View More</span>
                      </Link> */}
                    </>
                  ) : (
                    <a
                      href="https://solanaarcadegames.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sc-button btn-bordered-white style letter "
                    >
                      <span>View More</span>
                    </a>
                  )}

                  {/* <Link
                    to="/create-item"
                    className="sc-button btn-bordered-white style file"
                  >
                    <span>Buy Now</span>
                  </Link> */}
                </div>
              </div>
              <div className="slider-img flex">
                <div className="img-left">
                  <div className="img-1">
                    <img width={"230px"} src={props.item.img1} alt="Bidzen" />
                  </div>
                  <div className="img-2">
                    <img width={"230px"} src={props.item.img2} alt="Bidzen" />
                  </div>
                </div>
                <div className="img-right">
                  <img width={"230px"} src={props.item.img3} alt="Bidzen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Slider02;
