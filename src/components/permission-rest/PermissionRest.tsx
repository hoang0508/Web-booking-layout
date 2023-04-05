import React from "react";
import { IconInfo } from "../icons";
import { useToggleValue } from "@/hooks";
import { ButtonTransparent } from "../button";
import { Seemore } from "../common";

const PermissionRest = () => {
  const { value: toggleSeeMore, handleToggleValue } = useToggleValue(false);
  return (
    <div className="bg-white rounded-lg border border-ravi-gray-55">
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-ravi-black-100 text-lg font-bold">
            Quyền nghỉ 8N7Đ
          </h3>
          <ul className="flex flex-col gap-y-1 ml-5">
            <li className="list-disc marker:text-ravi-gray-80 text-sm font-normal text-ravi-gray-80">
              Mã quyền nghỉ: QN01.0201.87
            </li>
            <li className="list-disc marker:text-ravi-gray-80 text-sm font-normal text-ravi-gray-80">
              06/12/2023 - 06/12/2024
            </li>
          </ul>
        </div>
        <Seemore onClick={handleToggleValue} toggleSeemore={toggleSeeMore} />
      </div>

      {toggleSeeMore && (
        <div className="p-4 border-t border-ravi-gray-55">
          <div className="flex  w-full p-4 border border-ravi-gray-55 rounded-lg mb-2">
            <div className="flex-1 flex flex-col gap-y-4">
              <div>
                <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                  Mã quyền nghỉ sử dụng
                </h4>
                <span className="text-base font-normal text-ravi-black-100">
                  QN01.0201.21
                </span>
              </div>
              <div>
                <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                  Mã quyền nghỉ sử dụng
                </h4>
                <span className="text-base font-normal text-ravi-black-100">
                  QN01.0201.21
                </span>
              </div>
              <div>
                <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                  Mã quyền nghỉ sử dụng
                </h4>
                <span className="text-base font-normal text-ravi-black-100">
                  QN01.0201.21
                </span>
              </div>
              <div>
                <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                  Mã quyền nghỉ sử dụng
                </h4>
                <span className="text-base font-normal text-ravi-black-100">
                  QN01.0201.21
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-y-4">
              <div className="border-l border-ravi-gray-55 pl-4">
                <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                  Quyền nghỉ sử dụng
                </h4>
                <span className="text-base font-normal text-ravi-black-100">
                  2N1Đ
                </span>
              </div>
              <div className="border-l border-ravi-gray-55 pl-4">
                <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                  Quyền nghỉ sử dụng
                </h4>
                <span className="text-base font-normal text-ravi-black-100">
                  2N1Đ
                </span>
              </div>
              <div className="border-l border-ravi-gray-55 pl-4">
                <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                  Quyền nghỉ sử dụng
                </h4>
                <span className="text-base font-normal text-ravi-black-100">
                  2N1Đ
                </span>
              </div>
            </div>
          </div>

          <div className="w-full p-4 border border-ravi-gray-55 rounded-lg">
            <div className="flex pb-4">
              <div className="flex-1 flex flex-col gap-y-4">
                <div>
                  <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                    Mã quyền nghỉ sử dụng
                  </h4>
                  <span className="text-base font-normal text-ravi-black-100">
                    QN01.0201.21
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-y-4">
                <div className="border-l border-ravi-gray-55 pl-4">
                  <h4 className="font-normal text-xs mb-[2px]  text-ravi-gray-80">
                    Mã quyền nghỉ sử dụng
                  </h4>
                  <span className="text-base font-normal text-ravi-black-100">
                    QN01.0201.21
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-ravi-gray-55 pt-[22px]">
              <div className="flex items-center gap-x-[10px]">
                <span>
                  <IconInfo />
                </span>
                <p className="text-xs font-normal text-ravi-gray-80">
                  Chỉ áp dụng duy nhất 1 quyền nghỉ/ năm và 1 điểm nghỉ
                </p>
              </div>
              <ButtonTransparent>Sử dụng</ButtonTransparent>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PermissionRest;
