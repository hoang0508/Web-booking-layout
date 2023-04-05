import { IconArrowDownV2 } from "@/components/icons";
import { useToggleValue } from "@/hooks";
import React from "react";

interface ISeemore {
  className?: string;
  onClick: () => void;
  toggleSeemore: boolean;
}

const Seemore = ({
  className,
  onClick = () => {},
  toggleSeemore = false,
}: ISeemore) => {
  return (
    <div
      className={`flex items-center gap-x-3 text-base font-normal text-primary cursor-pointer  ${className}`}
      onClick={onClick}
    >
      {toggleSeemore ? "Ẩn bớt" : "Xem thêm"}
      <span className={`${toggleSeemore ? "rotate-180" : "rotate-0"}`}>
        <IconArrowDownV2 />
      </span>
    </div>
  );
};

export default Seemore;
