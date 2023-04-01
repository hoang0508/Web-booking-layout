import { LayoutProps } from "@/@types";
import React from "react";
import { HeaderMenuHome } from "./headers";

const LayoutHome = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderMenuHome />
      {children}
    </>
  );
};

export default LayoutHome;
