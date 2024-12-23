import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import styles from "./sliderCart.module.sass";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

const SliderCart = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderCart;
