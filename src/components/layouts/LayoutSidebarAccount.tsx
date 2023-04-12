import React from "react";
import { SidebarAccount } from "./sidebar";
import { LayoutProps } from "@/@types";

const LayoutSidebarAccount = ({ children }: LayoutProps) => {
  return (
    <div className="flex gap-x-5">
      <SidebarAccount />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default LayoutSidebarAccount;
