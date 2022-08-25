import React from "react";
import c from "./carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselMain = () => {
  const staticLink = "/index/ReactNextjs";
  const size = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className={c.carouselContainer}>
      <Carousel
        className={c.carouselClass}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={true}
      >
        <div>
          <img className={c.carouselImages} src={`${staticLink}/reactjs.png`} />
        </div>
        <div>
          <img className={c.carouselImages} src={`${staticLink}/nextjs.jpg`} />
        </div>
        <div>
          <img className={c.carouselImages} src={`${staticLink}/express.png`} />
        </div>
        <div>
          <img className={c.carouselImages} src={`${staticLink}/mongoDB.png`} />
        </div>
        <div>
          <img className={c.carouselImages} src={`${staticLink}/nodejs.jpg`} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
