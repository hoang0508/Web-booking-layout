import React from "react";
import { CardAddress, CardTitle } from "../components/card-global";
import CardVote from "../components/card-global/CardVote";
import {
  IconCarV2,
  IconCarV3,
  IconCheckV2,
  IconDump,
  IconWifi,
} from "@/components/icons";
import IconSpoon from "@/components/icons/IconSpoon";
import IconPool from "@/components/icons/IconPool";
import CardSalePrice from "../components/card-global/CardSalePrice";
import { Button } from "@/components/button";

const dataService = [
  {
    id: 1,
    text: "Thuê xe",
    icon: <IconCarV2 />,
  },
  {
    id: 2,
    text: "Có bãi đỗ xe",
    icon: <IconDump />,
  },
  {
    id: 3,
    text: "Có nhà hàng",
    icon: <IconSpoon />,
  },
  {
    id: 4,
    text: "Wi-Fi miễn phí",
    icon: <IconWifi />,
  },
  {
    id: 5,
    text: "Có xe đưa đón",
    icon: <IconCarV3 />,
  },
  {
    id: 6,
    text: "Có hồ bơi",
    icon: <IconPool />,
  },
];

const CardDetailsContent = () => {
  return (
    <div className="bg-white rounded-lg border border-ravi-gray-55 p-4">
      <div className="border-bottom-gray">
        <CardTitle
          numberStar={4}
          className="text-sm"
          title="Khách sạn Minh Toàn SAFI Ocean (Minh Toan SAFI Ocean Hotel)"
        />
        <CardVote
          className="text-xs mb-2"
          descFeed="Đáng kinh ngạc"
          numberRate="136"
        />
        <CardAddress
          textClassName="line-clamp-1 text-xs"
          className="mb-0"
          addressText="224 Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000 "
        />
      </div>

      <div className="border-bottom-gray">
        <div className="flex">
          <div className="flex-1 flex  flex-col gap-y-[6px] mb-3">
            <h3 className="text-sm font-normal text-ravi-gray-80">
              Nhận phòng
            </h3>
            <span className="max-w-[111px] w-full font-bold text-sm text-ravi-black-100">
              T4, 01 tháng 03 2023
            </span>
            <span className="font-normal text-sm text-ravi-black-100">
              12:00 - 00:00
            </span>
          </div>

          <div className="flex-1 flex flex-col gap-y-[6px] border-l border-ravi-gray-55 pl-4">
            <h3 className="text-sm font-normal text-ravi-gray-80">Trả phòng</h3>
            <span className="max-w-[111px] w-full font-bold text-sm text-ravi-black-100">
              T4, 01 tháng 03 2023
            </span>
            <span className="font-normal text-sm text-ravi-black-100">
              12:00 - 00:00
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <div className="font-normal text-sm">
            <span className="text-ravi-gray-80">Tổng thời gian lưu trú:</span>{" "}
            <span className="text-ravi-black-100">2 đêm</span>
          </div>
          <span className="text-sm font-normal">1 phòng, 2 người lớn</span>
        </div>
      </div>

      <div className="border-bottom-gray">
        <div className="flex items-center flex-wrap gap-y-3">
          {dataService.length > 0 &&
            dataService.map((item) => (
              <div className="w-2/4 flex items-center gap-x-2" key={item.id}>
                <span>{item.icon}</span>
                <span className="font-normal text-sm text-ravi-black-100">
                  {item.text}
                </span>
              </div>
            ))}
        </div>
      </div>

      <div className="mb-4">
        <CardSalePrice className="relative bg-ravi-gray-55 rounded-lg mb-2" />
        <div className="flex flex-col gap-y-2">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <div className="flex items-center gap-x-[10px]" key={index}>
                <span>
                  <IconCheckV2 />
                </span>
                <span className="text-sm font-normal text-ravi-black-100">
                  Giá phòng dành cho 2 đêm
                </span>
              </div>
            ))}
        </div>
      </div>

      <Button type="button" kind="primary" className="w-full">
        Chọn phòng
      </Button>
    </div>
  );
};

export default CardDetailsContent;
