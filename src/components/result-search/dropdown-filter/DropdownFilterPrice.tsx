import React, { useState } from "react";
import DropdownFilter from "./DropdownFilter";
import { MenuProps, Slider } from "antd";
import { IconLine } from "@/components/icons";

const DropdownFilterPrice = () => {
  const [inputValue, setInputValue] = useState<any>("");
  const numberValue = 100000000;

  const onChange = (newValue: any) => {
    setInputValue(newValue);
  };

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <>
          <span className="price-text-caculator">
            Giá trung bình hàng đêm: 1.000.000đ
          </span>
          <Slider
            className="custom-input-range"
            onChange={(e) => onChange(e)}
            range
            defaultValue={[0, 100]}
          />
          <div className="flex items-center gap-x-2">
            <div className="w-[124px] h-[32px] flex justify-center items-center border border-ravi-gray-98 rounded-lg text-[10px] font-normal tracking-[0,005em] font-primary">
              {`${inputValue[0] ? inputValue[0] : 0}đ`}
            </div>
            <span>
              <IconLine />
            </span>
            <div className="w-[124px] h-[32px] flex justify-center items-center border border-ravi-gray-98 rounded-lg text-[10px] font-normal tracking-[0,005em] font-primary">
              {`${inputValue[1] ? inputValue[1] : numberValue}đ`}
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <DropdownFilter
      overlayClassName="dropdown-ant-root-custom"
      className="dropdown-filter-search--custom"
      classNameCustomShow="dropdown-filter--price"
      items={items}
    >
      Khoảng giá
    </DropdownFilter>
  );
};

export default DropdownFilterPrice;
