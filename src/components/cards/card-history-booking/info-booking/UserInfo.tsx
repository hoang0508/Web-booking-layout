import { HeadingInfo } from "@/components/common/heading";
import React from "react";

const UserInfo = () => {
  return (
    <div>
      <HeadingInfo text="Thông tin chủ sở hữu"></HeadingInfo>
      <div className="flex">
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-[2px]">
            <span className="font-primary text-sm font-normal text-ravi-gray-80">
              Họ và tên
            </span>
            <span className="font-primary text-base text-ravi-black-100">
              Nguyễn Hoài Nam
            </span>
          </div>
          <div className="flex flex-col gap-y-[2px]">
            <span className="font-primary text-sm font-normal text-ravi-gray-80">
              Email
            </span>
            <span className="font-primary text-base text-ravi-black-100">
              nam@123.com
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-y-[2px] border-l border-ravi-gray-55 pl-4">
            <span className="font-primary text-sm font-normal text-ravi-gray-80">
              Số điện thoại
            </span>
            <span className="font-primary text-base text-ravi-black-100">
              0987612334
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
