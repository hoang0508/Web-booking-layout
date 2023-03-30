import { IconArrowDown, IconRoom, IconUser } from "@/components/icons";
import { Dropdown, MenuProps, Space } from "antd";
import React, { useState } from "react";
import CountInput from "./CountInput";

interface ICountHotel {
  className: string;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    type: "group",
    label: "SỐ PHÒNG VÀ SỐ KHÁCH",
    children: [
      {
        key: "1-1",
        label: (
          <>
            <div className="flex items-center justify-between mb-3 py-0 px-4">
              <div className="flex items-center gap-x-3">
                <span>
                  <IconRoom />
                </span>
                <span className="text-sm font-normal text-ravi-black-100 font-primary">
                  Phòng
                </span>
              </div>
              <div>
                <CountInput count={1} />
              </div>
            </div>
          </>
        ),
      },
      {
        key: "1-2",
        label: (
          <>
            <div className="flex items-center justify-between mb-3 py-0 px-4">
              <div className="flex items-center gap-x-3">
                <span>
                  <IconUser />
                </span>
                <div className="flex flex-col gap-y-1">
                  <span className="text-sm font-normal text-ravi-black-100 font-primary">
                    Người lớn
                  </span>
                  <span className="text-xs text-ravi-gray-55 font-light">
                    18+ tuổi
                  </span>
                </div>
              </div>
              <div>
                <CountInput count={2} />
              </div>
            </div>
          </>
        ),
      },
      {
        key: "1-3",
        label: (
          <>
            <div className="flex items-center justify-between mb-3 py-0 px-4">
              <div className="flex items-center gap-x-3">
                <span>
                  <IconUser />
                </span>
                <div className="flex flex-col gap-y-1">
                  <span className="text-sm font-normal text-ravi-black-100 font-primary">
                    Trẻ em
                  </span>
                  <span className="text-xs text-ravi-gray-55 font-light">
                    Từ 0-17 tuổi
                  </span>
                </div>
              </div>
              <div>
                <CountInput count={0} />
              </div>
            </div>
          </>
        ),
      },
    ],
  },
];

const CountHotel = ({ className }: ICountHotel) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleOpenChange = (flag: boolean) => {
    setOpenDropdown(flag);
  };
  return (
    <>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        onOpenChange={handleOpenChange}
        open={openDropdown}
        className={`cutom-dropdown--hotel ${className}`}
        dropdownRender={(menu) => (
          <>
            <div className="cutom-dropdown--show">
              {menu}
              <span
                className="close-show-dropdown flex justify-end border-t border-ravi-gray-55 pr-6 py-4 text-primary font-primary text-xs font-bold cursor-pointer"
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
            <div className="flex items-center gap-x-[10px]">
              <span className="">
                <IconUser />
              </span>
              <span className="font-normal text-sm text-ravi-black-100 font-primary">
                1 Phòng, 1 Người lớn
              </span>
            </div>
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
    </>
  );
};

export default CountHotel;
