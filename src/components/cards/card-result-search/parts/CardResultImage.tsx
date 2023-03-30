import { IconHeart, IconShare } from "@/components/icons";
import Image from "next/image";
import React from "react";
import ResultImage from "../../../../assets/images/result-image-search.png";

const CardResultImage = () => {
  return (
    <div className="relative">
      <div className="h-[264px]">
        <Image
          src={ResultImage}
          alt="image-result"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="absolute top-[14px] right-3 flex items-center gap-x-3">
        <span>
          <IconShare />
        </span>
        <span>
          <IconHeart />
        </span>
      </div>
      <div className="absolute py-1 pl-1 pr-3 rounded-lg bottom-4 left-[10px] bg-white flex items-center gap-x-1">
        <div className="flex items-center gap-x-2">
          <span className="flex justify-center items-center rounded bg-warning text-white py-1 px-[6px] font-bold text-xs">
            -40%
          </span>
          <span className="text-sm font-light text-grayDark">11.213.296đ</span>
        </div>
        <div className="flex items-center gap-x-1">
          <strong className="font-bold text-sm">6.727.978đ</strong>
          <span className="text-text100 text-sm font-normal">cho 2 đêm</span>
        </div>
      </div>
    </div>
  );
};

export default CardResultImage;
