import React from "react";
import CardImageEndow from "../../../assets/images/card-image-blog.png";
import { CardImageLinear } from "@/components/common";
import { Button } from "@/components/button";

const CardEndow = () => {
  return (
    <div className="group cursor-pointer flex flex-col gap-y-4">
      <CardImageLinear image={CardImageEndow} />
      <div className="flex flex-1 justify-between items-center">
        <div className="flex flex-col gap-y-[18px]">
          <h3 className="text-xl font-bold text-ravi-black-100">Đà Nẵng</h3>
          <span className="text-ravi-black-100 font-light text-sm">
            Chỉ từ 117.000đ
          </span>
        </div>
        <Button className="py-2 px-6 text-xs">Xem ưu đãi</Button>
      </div>
    </div>
  );
};

export default CardEndow;
