import CardResultContent from "./parts/CardResultContent";
import CardResultImage from "./parts/CardResultImage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import styles from "./CardResultSearch.module.scss";

const CardResultSearch = () => {
  return (
    <div
      className={`bg-white rounded-lg cursor-pointer card-hover ${styles["card-hover--result"]}`}
    >
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
          <CardResultImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardResultImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardResultImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardResultImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardResultImage />
        </SwiperSlide>
      </Swiper>
      <CardResultContent />
    </div>
  );
};

export default CardResultSearch;
