import React from "react";
import DropdownFilter from "./DropdownFilter";
import { CheckboxComp } from "@/components/checkbox";
import { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: 1,
    label: (
      <>
        <CheckboxComp>Đã bao gồm bữa sáng</CheckboxComp>
      </>
    ),
  },
  {
    key: 2,
    label: (
      <>
        <CheckboxComp>Đã bao gồm bữa sáng</CheckboxComp>
      </>
    ),
  },
  {
    key: 3,
    label: (
      <>
        <CheckboxComp>Đã bao gồm bữa sáng</CheckboxComp>
      </>
    ),
  },
  {
    key: 4,
    label: (
      <>
        <CheckboxComp>Đã bao gồm bữa sáng</CheckboxComp>
      </>
    ),
  },
  {
    key: 5,
    label: (
      <>
        <CheckboxComp>Đã bao gồm bữa sáng</CheckboxComp>
      </>
    ),
  },
];

const DropdownFilterPopular = () => {
  return (
    <DropdownFilter
      items={items}
      overlayClassName="dropdown-ant-root-custom"
      className="dropdown-filter-search--custom"
    >
      Phổ biến
    </DropdownFilter>
  );
};

export default DropdownFilterPopular;
