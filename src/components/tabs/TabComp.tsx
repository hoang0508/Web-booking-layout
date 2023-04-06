import { ITabComp } from "@/@types";
import { Tabs } from "antd";
import React from "react";

const TabComp = ({ items, onChange }: ITabComp) => {
  return (
    <Tabs
      className="tab-custom"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default TabComp;
