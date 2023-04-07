import { IconLocation } from "@/components/icons";
import React from "react";

interface ICardAddress {
  addressText: string;
  textClassName?: string;
  className?: string;
}

const CardAddress = ({
  addressText,
  textClassName = "text-xs",
  className = "mb-3",
}: ICardAddress) => {
  return (
    <div className={`flex items-center gap-x-3 ${className}`}>
      <span>
        <IconLocation />
      </span>
      <p className={`font-normal  text-ravi-black-100 ${textClassName}`}>
        {addressText}
      </p>
    </div>
  );
};

export default CardAddress;
