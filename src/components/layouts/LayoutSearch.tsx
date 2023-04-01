import { LayoutProps } from "@/@types";
import React from "react";
import { HeaderMenuSearch } from "./headers";

const LayoutSearch = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderMenuSearch />
      {children}
    </>
  );
};

export default LayoutSearch;
