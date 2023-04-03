import { LayoutProps } from "@/@types";
import React from "react";
import { HeaderMenuHome } from "./headers";
import { Footer } from "./footer";

const LayoutHome = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderMenuHome />
      {children}
      <Footer />
    </>
  );
};

export default LayoutHome;
