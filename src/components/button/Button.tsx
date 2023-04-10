import React, { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  kind: string;
}

const Button = ({
  children,
  className = "",
  onClick = () => {},
  type,
  kind,
}: IButton) => {
  let defaultClassName = `inline-block font-primary font-bold cursor-pointer rounded-lg duration-300 ease-out`;

  switch (kind) {
    case "primary":
      defaultClassName =
        defaultClassName +
        ` py-[14px] px-8 bg-primary text-white text-sm hover:bg-hover hover:shadow-buttonShadow focus:bg-focus active:bg-active`;
      break;
    case "secondary":
      defaultClassName =
        defaultClassName +
        ` py-2 px-6 border border-ravi-gray-ba text-primary text-xs hover:bg-ravi-hover-08 focus:bg-ravi-focus-12 active:bg-ravi-active-12`;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${defaultClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
