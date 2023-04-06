import { IconLocation } from "@/components/icons";
import React from "react";

interface ICardAddress {
  addressText: string;
  className?: string;
}

const CardAddress = ({ addressText, className = "text-xs" }: ICardAddress) => {
  return (
    <div className="flex items-center gap-x-3  mb-3">
      <span>
        <IconLocation />
      </span>
      <p className={`font-normal  text-ravi-black-100 ${className}`}>
        {addressText}
      </p>
    </div>
  );
};

export default CardAddress;
