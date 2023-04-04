import { IconArrowDown } from "@/components/icons";
import { Dropdown, Space } from "antd";
import React, { useState } from "react";

interface IDropDownFilter {
  children: React.ReactNode;
  items: any;
  className?: string;
  classNameCustomShow?: string;
  overlayClassName?: string;
}

const DropdownFilter = ({
  children,
  items,
  className = "",
  classNameCustomShow = "",
  overlayClassName = "",
}: IDropDownFilter) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleOpenChange = (flag: boolean) => {
    setOpenDropdown(flag);
  };
  return (
    <Dropdown
      overlayClassName={overlayClassName}
      className={className}
      menu={{ items }}
      trigger={["click"]}
      onOpenChange={handleOpenChange}
      open={openDropdown}
      dropdownRender={(menu) => (
        <>
          <div className={`dropdown-show-filter ${classNameCustomShow}`}>
            {menu}
            <span
              className="close-show-dropdown"
              onClick={() => setOpenDropdown(false)}
            >
              Đóng
            </span>
          </div>
        </>
      )}
    >
      <div onClick={(e) => e.preventDefault()}>
        <Space>
          {children}
          <span
            className={`${
              openDropdown ? "icon-arrow--translate" : "icon-arrow"
            } `}
          >
            <IconArrowDown />
          </span>
        </Space>
      </div>
    </Dropdown>
  );
};

export default DropdownFilter;
