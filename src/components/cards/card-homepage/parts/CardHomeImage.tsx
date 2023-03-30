import { IconHeart } from "@/components/icons";
import Image from "next/image";
import React from "react";
import ImageItem from "../../../../assets/images/image-item.png";

const CardHomeImage = () => {
  return (
    <div className="relative">
      <div className="h-[178px]">
        <Image
          src={ImageItem}
          alt="image-item"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <span className="absolute top-[14px] right-3">
        <IconHeart />
      </span>
    </div>
  );
};

export default CardHomeImage;
