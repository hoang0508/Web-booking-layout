import { IILabel } from "@/@types";
import React from "react";

const Label = ({ title, className = "" }: IILabel) => {
  return (
    <div className={`flex gap-x-1 font-primary text-sm mb-1 ${className}`}>
      <span className="text-ravi-black-100 font-light">{title}</span>
      <span className="text-ravi-error-32 font-normal">*</span>
    </div>
  );
};

export default Label;
