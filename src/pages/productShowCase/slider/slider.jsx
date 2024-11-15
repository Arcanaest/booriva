import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./slider.module.sass";

const Slider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.container + " productCard"}>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Thumbs]}
        direction={"vertical"}
        className={styles.thumbs}
        breakpoints={{
          768: {
            direction: "horizontal",
          },
          1000: {
            direction: "vertical",
          },
        }}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} className={styles.thumb}>
            <img src={item} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.slider}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
