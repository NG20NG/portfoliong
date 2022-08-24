import React from "react";
import c from "./carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselMain = () => {
  const staticLink = "/index/ReactNextjs";
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
          <img src={`${staticLink}/reactjs.png`} />
        </div>
        <div>
          <img src={`${staticLink}/nextjs.jpg`} />
        </div>
        <div>
          <img src={`${staticLink}/express.png`} />
        </div>
        <div>
          <img src={`${staticLink}/mongoDB.png`} />
        </div>
        <div>
          <img src={`${staticLink}/nodejs.jpg`} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
