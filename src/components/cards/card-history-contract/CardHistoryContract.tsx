import {
  IconArrowDown,
  IconContract,
  IconProgressPending,
  IconRemoveContract,
  IconReturnContract,
} from "@/components/icons";
import { TabComp } from "@/components/tabs";
import { TabsProps } from "antd";
import React, { useState } from "react";
import {
  InfoPayContract,
  InfoPendingContract,
  InfoUserContract,
} from "./info-contract";
import { Button } from "@/components/button";
import CreatePendingContract from "./CreatePendingContract";
import { useToggleValue } from "@/hooks";

const CardHistoryContract = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Thông tin của bạn`,
      children: <InfoUserContract />,
    },
    {
      key: "2",
      label: `Thanh toán`,
      children: <InfoPayContract />,
    },
    {
      key: "3",
      label: true ? `Thông tin pending` : "",
      children: <InfoPendingContract />,
    },
  ];

  // Modal Create pending
  const [openModalPending, setOpenModalPending] = useState(false);
  const handleShowModalPending = () => {
    setOpenModalPending(!openModalPending);
  };

  const { value: toggleTabContract, handleToggleValue } = useToggleValue(false);

  return (
    <>
      <div className=" bg-white border border-ravi-gray-55 rounded-lg overflow-hidden">
        <div className="flex justify-between items-center border-b border-ravi-gray-55 bg-ravi-gray-fc p-4">
          <div className="flex items-center gap-x-2">
            {/* <span className="bg-ravi-success-100 py-[10px] px-[13px] rounded-lg">
              <IconContract />
            </span> */}
            {/* <span className="bg-ravi-blue-50 py-[10px] px-[13px] rounded-lg">
              <IconProgressPending />
            </span> */}
            {/* <span className="bg-ravi-gray-100 py-[10px] px-[13px] rounded-lg">
              <IconRemoveContract />
            </span> */}
            <span className="bg-ravi-gray-f5 py-[10px] px-[13px] rounded-lg">
              <IconReturnContract />
            </span>

            <div className="flex flex-col gap-y-[1px]">
              <span className={`text-sm font-normal text-ravi-success-700`}>
                Đã thanh toán
              </span>
              <h3 className="font-bold text-lg text-ravi-black-100">
                RAVI hợp đồng booking
              </h3>
            </div>
          </div>
          <span
            onClick={handleToggleValue}
            className={`${
              toggleTabContract
                ? "rotate-180 duration-200 ease-linear"
                : "rotate-0 duration-200 ease-linear"
            } cursor-pointer`}
          >
            <IconArrowDown />
          </span>
        </div>

        <div className="p-4 border-b border-ravi-gray-55">
          <div className="flex mb-10">
            <div className="layout-list--history">
              <div className="layout-item--history">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Mã hợp đồng
                </span>
                <span className="font-normal text-ravi-black-100">#12456</span>
              </div>
              <div className="layout-item--history">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Khu gốc
                </span>
                <span className="font-normal text-ravi-black-100">Sakana</span>
              </div>
              <div className="layout-item--history">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Nguồn hợp đồng
                </span>
                <span className="font-normal text-ravi-black-100">Outside</span>
              </div>
              <div className="layout-item--history">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Loại phòng
                </span>
                <span className="font-normal text-ravi-black-100">Villa</span>
              </div>
              <div className="layout-item--history">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Đơn giá hợp đồng
                </span>
                <span className="font-normal text-ravi-black-100">
                  300.000.000đ
                </span>
              </div>
            </div>

            <div className="layout-list--history">
              <div className="layout-item--history border-left-item">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Số hợp đồng
                </span>
                <span className="font-normal text-ravi-black-100">
                  RAVI20230310
                </span>
              </div>
              <div className="layout-item--history border-left-item">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Tuần nghỉ cố định
                </span>
                <span className="font-normal text-ravi-black-100">Tuần 51</span>
              </div>
              <div className="layout-item--history border-left-item">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Ngày nghỉ dưỡng cố định
                </span>
                <span className="font-normal text-ravi-black-100">8N7Đ</span>
              </div>
              <div className="layout-item--history border-left-item">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Hạng phòng
                </span>
                <span className="font-normal text-ravi-black-100">Family</span>
              </div>
              <div className="layout-item--history border-left-item">
                <span className="text-xs font-normal text-ravi-gray-80">
                  Tỉ lệ thanh toán (%)
                </span>
                <span className="font-normal text-ravi-black-100">100%</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            toggleTabContract
              ? "max-h-[30em] px-4 py-4"
              : "max-h-0 duration-400 ease-linear overflow-hidden py-0 px-4"
          }`}
        >
          <TabComp items={items}></TabComp>
        </div>

        <div className="flex items-center justify-end gap-x-5 p-4">
          <span
            className="text-sx font-bold text-primary cursor-pointer"
            onClick={() => handleShowModalPending()}
          >
            Yêu cầu pending
          </span>
          <Button type="button" kind="secondary">
            Sử dụng quyền nghỉ
          </Button>
        </div>
      </div>
      <CreatePendingContract
        open={openModalPending}
        setOpen={setOpenModalPending}
      />
    </>
  );
};

export default CardHistoryContract;
