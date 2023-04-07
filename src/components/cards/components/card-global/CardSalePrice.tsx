import React from "react";

interface ICardSalePrice {
  dateStay?: string;
  className?: string;
}

const CardSalePrice = ({
  dateStay,
  className = " bg-white absolute left-[10px]  bottom-4",
}: ICardSalePrice) => {
  return (
    <div
      className={`py-1 pl-1 pr-3 rounded-lg  flex items-center gap-x-1 ${className}`}
    >
      <div className="flex items-center gap-x-2">
        <span className="flex justify-center items-center rounded bg-ravi-warning-80 text-white py-1 px-[6px] font-bold text-xs">
          -40%
        </span>
        <span className="text-sm font-light text-ravi-gray-98">
          11.213.296đ
        </span>
      </div>
      <div className="flex items-center gap-x-1">
        <strong className="font-bold text-sm">6.727.978đ</strong>

        <span className="text-text100 text-sm font-normal">
          {dateStay ? "cho 2 đêm" : ""}
        </span>
      </div>
    </div>
  );
};

export default CardSalePrice;
