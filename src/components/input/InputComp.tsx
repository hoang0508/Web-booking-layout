import { Input } from "antd";
import React from "react";
import IconRoundClose from "../icons/IconRoundClose";

interface IInputComp {
  className?: string;
  placeholder: string;
  name: string;
  type: string;
}

const InputComp = ({ className = "", name, type, placeholder }: IInputComp) => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };
  return (
    <Input
      className={`custom-input ${className}`}
      placeholder={placeholder}
      allowClear={{ clearIcon: <IconRoundClose /> }}
      name={name}
      id={name}
      type={type}
      onChange={onChange}
    />
  );
};

export default InputComp;
