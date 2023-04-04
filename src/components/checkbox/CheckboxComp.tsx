import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { ReactNode } from "react";

interface ICheckboxComp {
  children: ReactNode;
  className?: string;
}

const CheckboxComp = ({ children, className = "" }: ICheckboxComp) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Checkbox className={`checkbox-custom ${className}`} onChange={onChange}>
      <span className="checkbox-label">{children}</span>
    </Checkbox>
  );
};

export default CheckboxComp;
