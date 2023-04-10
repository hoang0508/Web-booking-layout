import { HeadingInfo } from "@/components/common/heading";
import React from "react";

const InfoUserContract = () => {
  return (
    <div>
      <HeadingInfo text="Chủ sở hữu" className="text-sm" />
      <div className="flex">
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-[2px] font-primary">
            <span className="text-sm font-normal text-ravi-gray-80">
              Họ và tên
            </span>
            <span className="text-ravi-black-100">Nguyễn Hoài Nam</span>
          </div>
          <div className="flex flex-col gap-y-[2px] font-primary">
            <span className="text-sm font-normal text-ravi-gray-80">
              Ngày sinh
            </span>
            <span className="text-ravi-black-100">05/05/2000</span>
          </div>
          <div className="flex flex-col gap-y-[2px] font-primary">
            <span className="text-sm font-normal text-ravi-gray-80">
              Số CCCD
            </span>
            <span className="text-ravi-black-100">02931232132132</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-[2px] font-primary border-left-item">
            <span className="text-sm font-normal text-ravi-gray-80">
              Số điện thoại
            </span>
            <span className="text-ravi-black-100">0987612334</span>
          </div>
          <div className="flex flex-col gap-y-[2px] font-primary border-left-item">
            <span className="text-sm font-normal text-ravi-gray-80">Email</span>
            <span className="text-ravi-black-100">nam@123.com</span>
          </div>
          <div className="flex flex-col gap-y-[2px] font-primary border-left-item">
            <span className="text-sm font-normal text-ravi-gray-80">
              Địa chỉ
            </span>
            <span className="text-ravi-black-100">20 pho hue</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUserContract;
