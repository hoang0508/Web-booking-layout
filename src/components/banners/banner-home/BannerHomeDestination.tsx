import React from "react";
import BannerImageDestination from "../../../assets/images/banner-destination.png";
import DestinationImageChild from "../../../assets/images/destination-child.png";
import { Button } from "@/components/button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

interface IBannerHomeDestination {
  data?: [];
}

const BannerHomeDestination = ({}: IBannerHomeDestination) => {
  const styles = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),  url(${BannerImageDestination.src})`,
  };
  return (
    <div
      style={styles}
      className="h-[642px] rounded-lg bg-cover bg-no-repeat bg-center flex flex-col"
    >
      <div className="pt-5 pl-5">
        <h3 className="max-w-[617px] w-full text-5xl text-white font-bold mb-2 leading-snug">
          Những điểm đến cho thuê khách sạn nổi tiếng
        </h3>
        <p className="max-w-[448px] w-full font-light text-white text-base mb-10">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Button>Khám phá ngay</Button>
      </div>
      <div className="mt-auto mb-[10px] ml-5 bg-[rgba(255,255,255,0.7)] p-[10px] rounded-tl-[10px] rounded-bl-[10px]">
        <Swiper
          grabCursor
          spaceBetween={9}
          slidesPerView={"auto"}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="banner-destination-swiper"
        >
          {Array(12)
            .fill(0)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <Image
                    src={DestinationImageChild}
                    alt="image-child-destination"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerHomeDestination;
