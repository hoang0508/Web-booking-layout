import { LayoutProps } from "@/@types";
import React from "react";
import { HeaderSearchV2 } from "./headers";

const LayoutSearchV2 = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderSearchV2 />
      {children}
    </>
  );
};

export default LayoutSearchV2;
