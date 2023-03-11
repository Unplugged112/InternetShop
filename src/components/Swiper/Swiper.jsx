import { Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Swiper.scss"
export default () => {
  return (
    <div className="slider__body-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Mousewheel]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="slider__body-img"
            src="/image/Swiper/Image.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__body-img"
            src="/image/Swiper/Image.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__body-img"
            src="/image/Swiper/Image.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider__body-img"
            src="/image/Swiper/Image.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
