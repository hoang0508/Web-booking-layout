import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination, Navigation, Thumbs } from "swiper";
import { IconHeart, IconShare } from "@/components/icons";

const dataThumb = [
  {
    id: 1,
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 2,
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    id: 3,
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    id: 4,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
  },
  {
    id: 5,
    image: "https://swiperjs.com/demos/images/nature-5.jpg",
  },
  {
    id: 6,
    image: "https://swiperjs.com/demos/images/nature-6.jpg",
  },
  {
    id: 7,
    image: "https://swiperjs.com/demos/images/nature-7.jpg",
  },
  {
    id: 8,
    image: "https://swiperjs.com/demos/images/nature-8.jpg",
  },
  {
    id: 9,
    image: "https://swiperjs.com/demos/images/nature-9.jpg",
  },
  {
    id: 10,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
  {
    id: 11,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
  {
    id: 12,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
  {
    id: 13,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
  {
    id: 14,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
];

const dataThumbChild = [
  {
    id: 1,
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 2,
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    id: 3,
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    id: 4,
    image: "https://swiperjs.com/demos/images/nature-4.jpg",
  },
  {
    id: 5,
    image: "https://swiperjs.com/demos/images/nature-5.jpg",
  },
  {
    id: 6,
    image: "https://swiperjs.com/demos/images/nature-6.jpg",
  },
  {
    id: 7,
    image: "https://swiperjs.com/demos/images/nature-7.jpg",
  },
  {
    id: 8,
    image: "https://swiperjs.com/demos/images/nature-8.jpg",
  },
  {
    id: 9,
    image: "https://swiperjs.com/demos/images/nature-9.jpg",
  },
  {
    id: 10,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
  {
    id: 11,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
  {
    id: 12,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
  {
    id: 13,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
  {
    id: 14,
    image: "https://swiperjs.com/demos/images/nature-10.jpg",
  },
];

const CardDetailsImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        speed={1000}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        className="mb-1 mySwiper-custom mySwiper-custom-details"
      >
        {dataThumb.length > 0 &&
          dataThumb.map((item) => (
            <SwiperSlide
              key={item.id}
              className="h-[424px] rounded-lg relative overflow-hidden"
            >
              <div>
                <img
                  src={item.image}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-[15px] right-[14px] flex items-center gap-x-[10px] cursor-pointer">
                <span>
                  <IconShare />
                </span>
                <span>
                  <IconHeart />
                </span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper bg-ravi-black-20 p-1 pr-0 rounded-lg"
      >
        {dataThumbChild.map((item) => (
          <SwiperSlide
            key={item?.id}
            className="h-[58px] max-w-[61px] w-full cursor-pointer"
          >
            <img
              src={item.image}
              className="w-full h-full object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardDetailsImage;
