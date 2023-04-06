import Image from "next/image";
import React from "react";
import CardFavouriteImage from "../../../assets/images/result-image-search.png";
import { IconHeartRed, IconShare } from "@/components/icons";
import { CardAddress, CardPrice, CardTitle } from "../components/card-global";
import CardVote from "../components/card-global/CardVote";

const CardFavourite = () => {
  return (
    <div className="flex flex-col gap-y-3 cursor-pointer">
      <div className="h-[238px] relative flex-shrink-0">
        <div>
          <Image
            src={CardFavouriteImage}
            alt="card-favourite-image"
            className="w-full h-fu object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-x-[10px] absolute top-[14px] right-[12px] cursor-pointer">
          <span>
            <IconShare />
          </span>
          <span>
            <IconHeartRed />
          </span>
        </div>
      </div>
      <div className="flex-1">
        <CardAddress
          className="text-sm"
          addressText="107 Võ Nguyên Giáp, Đà Nẵng"
        />
        <CardTitle
          numberStar={5}
          title="Khách sạn Minh Toàn SAFI Ocean (Minh Toan SAFI Ocean Hotel)"
        />
        <CardVote className="mb-3" />
        <CardPrice price={"1.354.815"} />
      </div>
    </div>
  );
};

export default CardFavourite;
