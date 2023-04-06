import { IconCheck } from "@/components/icons";
import React from "react";

const SuccessStatusBook = () => {
  return (
    <div className="inline-flex items-center gap-x-[10px] bg-ravi-success-100 text-sm font-normal text-ravi-success-700 rounded-full py-[2px] px-[12px] mb-[10px]">
      <span>
        <IconCheck />
      </span>
      <span>Đã thanh toán</span>
    </div>
  );
};

export default SuccessStatusBook;
