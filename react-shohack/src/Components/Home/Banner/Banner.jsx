import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../Banner/Banner.css";
import "animate.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);
function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image-carousel img1"> </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-carousel img2"> </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-carousel img3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-carousel img4"></div>
        </SwiperSlide>
      </Swiper>
      <div className="text-center">
        <h1 className="fw-light mt-4 fs-1 ">TU MEJOR OPCIÓN PRECIO/CALIDAD</h1>
        <h2 className="lead mt-4">El mejor calzado importado del exterior</h2>
        <Link to="/registro" className="animate__animated animate__pulse btn btn-dark rounded mt-4">
          REGISTRARSE
        </Link>
      </div>
    </>
  );
}

export default Banner;
