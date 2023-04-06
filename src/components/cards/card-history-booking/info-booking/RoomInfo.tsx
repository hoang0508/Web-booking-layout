import { HeadingInfo } from "@/components/common/heading";
import React from "react";
import ImageInfoRoom from "../../../../assets/images/image-info-room.png";
import Image from "next/image";
import IconSpoon from "@/components/icons/IconSpoon";
import IconRoomV2 from "@/components/icons/IconRoomV2";
import { IconAcreage, IconRoom, IconUserV3 } from "@/components/icons";
import IconView from "@/components/icons/IconView";
import IconAir from "@/components/icons/IconAir";
import IconWatch from "@/components/icons/IconWatch";
import IconRoundClose from "@/components/icons/IconRoundClose";

const RoomInfo = () => {
  return (
    <div>
      <HeadingInfo text="Bạn đã chọn phòng"></HeadingInfo>
      <div className="flex gap-x-4">
        <div className="flex-shrink-0 h-[140px]">
          <Image
            src={ImageInfoRoom}
            alt="image-info-room"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="max-w-[375px] flex-1">
          <HeadingInfo
            text="Standard Ocean View 1 King Bed"
            className="mb-3"
          ></HeadingInfo>
          <div className="flex flex-col gap-y-[10px]">
            <div className="flex items-center gap-x-3">
              <span>
                <IconSpoon />
              </span>
              <span className="text-info-room">Bao gồm bữa sáng</span>
            </div>

            <div className="flex justify-between items-center">
              <div className=" flex-1 flex items-center gap-x-3">
                <span>
                  <IconRoomV2 />
                </span>
                <span className="text-info-room">1 phòng</span>
              </div>
              <div className=" flex-1 flex items-center gap-x-3">
                <span>
                  <IconUserV3 />
                </span>
                <span className="text-info-room">Tối đa 2 người</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className=" flex-1 flex items-center gap-x-3">
                <span>
                  <IconRoom />
                </span>
                <span className="text-info-room">1 giường King</span>
              </div>
              <div className=" flex-1 flex items-center gap-x-3">
                <span>
                  <IconAcreage />
                </span>
                <span className="text-info-room">
                  102 m<sup className="text-[10px]">2</sup>
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className=" flex-1 flex items-center gap-x-3">
                <span>
                  <IconView />
                </span>
                <span className="text-info-room">Hướng biển</span>
              </div>
              <div className=" flex-1 flex items-center gap-x-3">
                <span>
                  <IconAir />
                </span>
                <span className="text-info-room">Có điều hòa</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className=" flex-1 flex items-center gap-x-3">
                <span>
                  <IconWatch />
                </span>
                <span className="text-info-room">TV màn hình phẳng</span>
              </div>
              <div className=" flex-1 flex items-center gap-x-3">
                <span>
                  <IconRoundClose />
                </span>
                <span className="text-info-room">Không hút thuốc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
