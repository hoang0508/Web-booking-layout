import { HeadingInfo } from "@/components/common/heading";
import { IconLineV3 } from "@/components/icons";
import React from "react";

const PayInfo = () => {
  return (
    <div>
      <HeadingInfo text="Chi phí thanh toán"></HeadingInfo>
      <div>
        <div className="flex items-center justify-between mb-[14px]">
          <span className="font-primary font-normal text-sm text-ravi-gray-80">
            Giá cho 2 đêm
          </span>
          <span className="font-primary font-normal text-base text-ravi-black-100">
            5.825.089đ
          </span>
        </div>
        <div className="flex items-center justify-between mb-[14px]">
          <span className="font-primary font-normal text-sm text-ravi-gray-80">
            Giá cho 2 đêm
          </span>
          <span className="font-primary font-normal text-base text-ravi-black-100">
            5.825.089đ
          </span>
        </div>
        <div className="flex items-center justify-between mb-[14px]">
          <span className="font-primary font-normal text-sm text-ravi-gray-80">
            Giá cho 2 đêm
          </span>
          <span className="font-primary font-normal text-base text-ravi-black-100">
            5.825.089đ
          </span>
        </div>
      </div>
      <span>
        <IconLineV3 />
      </span>
      <div className="flex justify-between items-center pt-3">
        <span className="font-primary font-normal text-sm text-ravi-gray-80">
          Tổng thanh toán
        </span>
        <span className="font-primary font-normal text-base text-ravi-black-100">
          6.727.978đ
        </span>
      </div>
    </div>
  );
};

export default PayInfo;
