import IconClockV2 from "@/components/icons/IconClockV2";
import React from "react";

const PendingStatusBook = () => {
  return (
    <div className="inline-flex items-center bg-ravi-warning-100 text-sm font-normal text-ravi-warning-600 rounded-full py-[2px] px-[12px] mb-[10px]">
      <span className="mr-[10px]">
        <IconClockV2 />
      </span>
      <span className="relative after:content['.'] after:absolute after:top-2/4 after:-translate-y-2/4 after:-translate-x-2/4 after:ml-[10px]  after:w-1 after:h-1 after:rounded-full after:bg-ravi-warning-600">
        Chờ thanh toán
      </span>
      <span className="ml-5">00:29:32</span>
    </div>
  );
};

export default PendingStatusBook;
