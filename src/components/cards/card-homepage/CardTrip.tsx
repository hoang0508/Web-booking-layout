import React from "react";
import CardImageTrip from "../../../assets/images/card-image-trip.png";
import Image from "next/image";
import { ButtonTransparent } from "@/components/button";

const CardTrip = () => {
  return (
    <div className="w-[225px]  bg-opacity-[rgba(0,0,0,0.2)] relative">
      <div className="h-[424px]">
        <Image
          src={CardImageTrip}
          alt="image-trip"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-7 left-5">
        <h3 className="text-white font-bold text-2xl mb-1">Đà Nẵng</h3>
        <p className="mb-6 max-w-[165px] line-clamp-4 text-white font-light text-xs">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <ButtonTransparent>Tìm kiếm ngay</ButtonTransparent>
      </div>
    </div>
  );
};

export default CardTrip;
