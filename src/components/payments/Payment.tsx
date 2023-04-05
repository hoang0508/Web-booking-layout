import React from "react";
import { IconPayment } from "../icons";
import { Radio } from "antd";
import { useToggleValue } from "@/hooks";

const Payment = () => {
  const { value: toggleChecked, handleToggleValue } = useToggleValue(false);
  return (
    <div
      className={`flex items-center justify-between max-w-[633px] py-4 pl-4 pr-5 w-full border-ravi-gray-ba rounded-lg cursor-pointer ${
        toggleChecked ? "border-primary bg-ravi-bg-f5" : "bg-white"
      }`}
      onClick={handleToggleValue}
    >
      <div>
        <Radio
          checked={toggleChecked}
          className="custom-radio custom-radio-payment"
          value={"abc"}
        >
          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg font-bold text-ravi-black-100">
              Thanh toán khi nhận phòng
            </h3>
            <p className="text-ravi-gray-80 font-normal text-sm">
              Thanh toán dễ dàng hơn khi chuẩn bị đúng số tiền.
            </p>
          </div>
        </Radio>
      </div>
      <span>
        <IconPayment />
      </span>
    </div>
  );
};

export default Payment;
