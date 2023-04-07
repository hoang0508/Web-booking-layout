import { Input } from "antd";
import React from "react";

const { TextArea } = Input;

interface ITextAreaComp {
  className?: string;
  placeholder: string;
  name: string;
}

const TextAreaComp = ({ className = "", name, placeholder }: ITextAreaComp) => {
  return (
    <>
      <TextArea
        name={name}
        style={{ resize: "none" }}
        placeholder={placeholder}
        className={`custom-textarea ${className}`}
        rows={4}
      />
    </>
  );
};

export default TextAreaComp;
