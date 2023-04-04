import { Radio } from "antd";
import React, { ReactNode } from "react";

interface IRadioComp {
  children: ReactNode;
  className?: string;
  value: string | number;
}

const RadioComp = ({ children, className = "", value }: IRadioComp) => {
  return (
    <Radio value={value} className={`custom-radio ${className}`}>
      <span className="custom-radio--text">{children}</span>
    </Radio>
  );
};

export default RadioComp;
