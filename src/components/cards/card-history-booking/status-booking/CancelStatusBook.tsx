import { IconRoundCloseV2 } from "@/components/icons";
import React from "react";

const CancelStatusBook = () => {
  return (
    <div className="inline-flex items-center gap-x-[10px] bg-ravi-gray-100 text-sm font-normal text-ravi-gray-80 rounded-full py-[2px] px-[12px] mb-[10px]">
      <span>
        <IconRoundCloseV2 />
      </span>
      <span>Đã hủy</span>
    </div>
  );
};

export default CancelStatusBook;
