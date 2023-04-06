import { IconLocation, IconStar } from "@/components/icons";
import React from "react";

const CardHomeContent = () => {
  return (
    <div className="pl-3 pr-[14px] pb-4 pt-3 rounded-b-lg">
      <div className="flex gap-x-2 items-start mb-2">
        <h3 className="font-bold text-base text-text100 text-truncate">
          Khách sạn Minh Toàn SAFI Ocean (Minh Toan SAFI Ocean Hotel)
        </h3>
        <div className="flex items-center gap-1">
          <span className="font-bold text-sm text-primary">5</span>
          <span>
            <IconStar />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-[30px] mb-2">
        <span className="bg-primary text-white px-[6px] rounded font-bold text-sm">
          9.7
        </span>
        <ul className="flex items-center gap-x-[30px]  text-text80 text-sm font-normal">
          <li className="list-disc">48 đánh giá</li>
          <li className="list-disc">Tuyệt vời</li>
        </ul>
      </div>
      <div className="flex items-center gap-x-3  mb-3">
        <span>
          <IconLocation />
        </span>
        <p className="font-normal text-xs text-text100">
          107 Võ Nguyên Giáp, Đà Nẵng
        </p>
      </div>
      <div>
        <span className="text-sm font-normal">Bắt đầu từ </span> {"  "}{" "}
        <strong className="text-base font-bold">1.354.815đ</strong>
      </div>
    </div>
  );
};

export default CardHomeContent;
