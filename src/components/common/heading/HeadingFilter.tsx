import { IHeading } from "@/@types";
import React from "react";

const HeadingFilter = ({ className = "", text }: IHeading) => {
  return (
    <h3
      className={`text-ravi-black-100 font-bold text-sm font-primary ${className}`}
    >
      {text}
    </h3>
  );
};

export default HeadingFilter;
