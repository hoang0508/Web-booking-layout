import React, { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = "", onClick = () => {} }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`py-[14px] px-8 bg-primary inline-block text-white font-bold text-sm rounded-lg cursor-pointer hover:bg-hover hover:shadow-buttonShadow focus:bg-focus active:bg-active duration-300 ease-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
