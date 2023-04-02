import { Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Swiper.scss";
import React from "react";
function CustomSwiper() {
  const [img, setImg] = React.useState([]);

  const getImg = async () => {
    let response = await axios.get(`http://127.0.0.1:8000/imgslider/`);
    setImg(response.data);
  };

  React.useEffect(() => {
    getImg();
  }, []);
  return (
    <div className="slider__body-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={700}
      >
        {img &&
          img.map((item) => (
            <SwiperSlide>
              <img
                className="slider__body-img"
                src={`http://127.0.0.1:8000/${item.img}`}
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CustomSwiper;
