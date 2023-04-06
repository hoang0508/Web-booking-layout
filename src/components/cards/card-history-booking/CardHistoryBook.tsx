import { IconArrowDown } from "@/components/icons";
import React from "react";
import {
  CancelStatusBook,
  PendingStatusBook,
  SuccessStatusBook,
} from "./status-booking";
import Image from "next/image";
import ImageCardHistory from "../../../assets/images/image-item.png";
import { TabsProps } from "antd";
import { TabComp } from "@/components/tabs";
import { PayInfo, RoomInfo, UserInfo } from "./info-booking";
import { ButtonTransparent } from "@/components/button";
import { useToggleValue } from "@/hooks";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Thông tin của bạn`,
    children: <UserInfo />,
  },
  {
    key: "2",
    label: `Thông tin thanh toán`,
    children: <PayInfo />,
  },
  {
    key: "3",
    label: `Thông tin phòng`,
    children: <RoomInfo />,
  },
];

const CardHistoryBook = () => {
  const { value: toggleSeeMore, handleToggleValue } = useToggleValue(false);

  return (
    <div className="border border-ravi-gray-55 bg-white rounded-lg">
      <div className="flex justify-between items-center p-4">
        <div>
          {/* <PendingStatusBook /> */}
          {/* <SuccessStatusBook /> */}
          <CancelStatusBook />
          <h3 className="text-base text-ravi-black-100 font-bold">
            Khách sạn Minh Toàn SAFI Ocean (Minh Toan SAFI Ocean Hotel)
          </h3>
        </div>
        <span
          onClick={handleToggleValue}
          className={`cursor-pointer ${
            toggleSeeMore
              ? "rotate-180  duration-200 ease-linear"
              : "rotate-0  duration-200 ease-linear"
          }`}
        >
          <IconArrowDown />
        </span>
      </div>

      <div className="border-t border-b  border-ravi-gray-55 p-4  w-full">
        <div className="flex gap-x-4 mb-10">
          <div className="h-[152px] w-2/6 flex-shrink-0">
            <Image
              src={ImageCardHistory}
              alt="image-card-history"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 flex w-2/3">
            <div className="flex flex-1 flex-col gap-y-4">
              <div className="flex flex-col gap-y-[2px]">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Ngày nhận phòng
                </span>
                <span>08/03/2023</span>
              </div>
              <div className="flex flex-col gap-y-[2px]">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Tổng thời gian lưu trú
                </span>
                <span>3 ngày 2 đêm</span>
              </div>
              <div className="flex flex-col gap-y-[2px]">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Mã đặt phòng
                </span>
                <span>HSF69WL</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-y-4">
              <div className="flex flex-col gap-y-[2px] border-l border-ravi-gray-55 pl-4">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Ngày trả phòng
                </span>
                <span>10/03/2023</span>
              </div>
              <div className="flex flex-col gap-y-[2px] border-l border-ravi-gray-55 pl-4">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Số khách
                </span>
                <span>2 khách, 1 phòng</span>
              </div>
              <div className="flex flex-col gap-y-[2px] border-l border-ravi-gray-55 pl-4">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Tổng tiền thanh toán
                </span>
                <span>6.727.978đ</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            toggleSeeMore
              ? "h-auto max-h-max duration-300 ease-linear"
              : "max-h-0 h-0 overflow-hidden duration-200 ease-linear"
          }`}
        >
          {" "}
          <TabComp items={items}></TabComp>
        </div>
      </div>
      <div className="flex justify-end p-4 cursor-pointer">
        {/* <ButtonTransparent>Đặt lại</ButtonTransparent> */}
        {/* <ButtonTransparent>Thanh toán</ButtonTransparent> */}
        <div className="flex items-center gap-x-2">
          <span className="font-bold text-primary text-xs">Xóa</span>
          <ButtonTransparent>Đặt lại</ButtonTransparent>
        </div>
      </div>
    </div>
  );
};

export default CardHistoryBook;
