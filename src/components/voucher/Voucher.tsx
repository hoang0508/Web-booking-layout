import React from "react";
import { IconClock, IconLineV3 } from "../icons";
import { ButtonTransparent } from "../button";

const Voucher = () => {
  return (
    <>
      <div className="max-w-[633px] w-full bg-white rounded-lg border border-ravi-gray-55">
        <div className="relative">
          <div className="pt-4 px-5 mb-6 pb-5">
            <div className="flex items-center justify-between  border-b border-ravi-gray-55 pb-4">
              <span className="bg-ravi-warning-50 text-ravi-warning-80 py-[2px] px-3 rounded-lg font-normal text-xs">
                Chỉ dành cho bạn
              </span>
              <span className="text-xs font-normal text-ravi-gray-80 tracking-[0.005em]">
                Mã voucher: RV-2208492
              </span>
              <span className="text-xs font-normal text-ravi-gray-80 tracking-[0.005em]">
                Loại voucher: VISION Lucky Draw
              </span>
            </div>
            <h2 className="pt-4 text-ravi-black-100 font-bold text-lg">
              Voucher quyền nghỉ 3 ngày 2 đêm
            </h2>
            <span className="absolute left-2/4  top-[65%] -translate-y-2/4 -translate-x-2/4">
              <IconLineV3 />
            </span>
          </div>
          <div className="flex justify-between items-center px-[22px] pb-[22px]">
            <div className="flex items-center gap-x-[10px]">
              <span>
                <IconClock />
              </span>
              <p className="text-sm font-normal text-ravi-gray-80">
                Hạn sử dụng: 07/09/2022 - 07/12/2022
              </p>
            </div>
            <ButtonTransparent>Chọn</ButtonTransparent>
          </div>
          <div className="absolute bg-white h-8 top-[65%] left-[-1px] -translate-y-2/4 w-[15px] border border-ravi-gray-55 border-l-0 rounded-tr-full rounded-br-full" />
          <div className="absolute bg-white  h-8 top-[65%] right-[-1px] -translate-y-2/4 w-[15px] border border-ravi-gray-55 border-r-0 rounded-tl-full rounded-bl-full" />
        </div>
      </div>
    </>
  );
};

export default Voucher;
