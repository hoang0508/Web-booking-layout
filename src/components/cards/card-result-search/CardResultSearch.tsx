import CardResultContent from "./parts/CardResultContent";
import CardResultImage from "./parts/CardResultImage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const CardResultSearch = () => {
  return (
    <div className={`bg-white rounded-lg cursor-pointer card-hover`}>
      <Swiper
        slidesPerView={"auto"}
        speed={500}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper-custom mySwiper-custom-search"
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
