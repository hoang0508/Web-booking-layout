import { IconAcreage, IconLocation, IconStar } from "@/components/icons";
import React from "react";
import styles from "../CardResultSearch.module.scss";

const CardResultContent = () => {
  return (
    <div className="pt-3 pb-4">
      <div
        className={`${
          styles["info-room"] || ""
        } flex items-center gap-x-[30px] mb-3`}
      >
        <div className="flex items-center gap-x-2">
          <span>
            <IconAcreage />
          </span>
          <span className="text-sm font-normal">
            54 m<sup>2</sup>
          </span>
        </div>
        <div
          className={`flex items-center gap-x-2 ${styles["info-room--dots"]}`}
        >
          <span>
            <IconAcreage />
          </span>
          <span className="text-sm font-normal">
            54 m<sup>2</sup>
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <span>
            <IconAcreage />
          </span>
          <span className="text-sm font-normal">
            54 m<sup>2</sup>
          </span>
        </div>
      </div>
      <div className="flex items-start gap-x-8 mb-2">
        <h3 className="font-bold text-base text-text100">
          Khách sạn Minh Toàn SAFI Ocean (Minh Toan SAFI Ocean Hotel)
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-primary">5</span>
          <span>
            <IconStar />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-[30px] mb-3">
        <span className="bg-primary text-white px-[6px] rounded font-bold text-sm">
          9.7
        </span>
        <ul className="flex items-center gap-x-[30px]  text-text80 text-sm font-normal">
          <li className="list-disc">48 đánh giá</li>
          <li className="list-disc">Tuyệt vời</li>
        </ul>
      </div>
      <div className="flex items-center gap-x-3 mb-3">
        <span>
          <IconLocation />
        </span>
        <p className="font-normal text-xs text-text100">
          107 Võ Nguyên Giáp, Đà Nẵng
        </p>
      </div>
    </div>
  );
};

export default CardResultContent;
