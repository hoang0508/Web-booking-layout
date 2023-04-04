import React from "react";
import CardHomeContent from "./parts/CardHomeContent";
import CardHomeImage from "./parts/CardHomeImage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const CardHome = () => {
  return (
    <div className="bg-white rounded-lg cursor-pointer card-hover">
      {/* Image */}
      <Swiper
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper-custom"
      >
        <SwiperSlide>
          <CardHomeImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardHomeImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardHomeImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardHomeImage />
        </SwiperSlide>
      </Swiper>

      {/* Content */}
      <CardHomeContent />
    </div>
  );
};

export default CardHome;
