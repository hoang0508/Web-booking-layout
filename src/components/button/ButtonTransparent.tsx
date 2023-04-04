import { IButton } from "@/@types";
import React from "react";

const ButtonTransparent = ({
  children,
  className = "",
  onClick = () => {},
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 inline-block border border-ravi-gray-ba text-primary rounded-lg text-xs font-bold cursor-pointer hover:bg-ravi-hover-08 focus:bg-ravi-focus-12 active:bg-ravi-active-12 duration-300 ease-out ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonTransparent;
