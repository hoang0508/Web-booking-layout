import { IButton } from "@/@types";
import React from "react";
import { IconFilter } from "../icons";

const ButtonFilter = ({
  children,
  className = "",
  onClick = () => {},
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center  gap-x-[10px] py-2 pl-6 pr-5  bg-primary text-white text-xs font-bold rounded-lg hover:bg-hover hover:shadow-buttonShadow focus:bg-focus active:bg-active cursor-pointer duration-300 ease-out    ${className}`}
    >
      {children}
      <span>
        <IconFilter />
      </span>
    </button>
  );
};

export default ButtonFilter;
