import { IconHeart, IconShare } from "@/components/icons";
import Image from "next/image";
import React from "react";
import ResultImage from "../../../../assets/images/result-image-search.png";
import CardSalePrice from "../../components/card-global/CardSalePrice";

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
      <CardSalePrice />
    </div>
  );
};

export default CardResultImage;
