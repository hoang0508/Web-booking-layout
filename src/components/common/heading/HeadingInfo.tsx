import { IHeading } from "@/@types";
import React from "react";

const HeadingInfo = ({ text, className = "text-base" }: IHeading) => {
  return (
    <h3
      className={`font-primary font-bold text-ravi-black-100 mb-4 ${className}`}
    >
      {text}
    </h3>
  );
};

export default HeadingInfo;
