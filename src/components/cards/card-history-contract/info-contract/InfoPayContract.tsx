import { HeadingInfo } from "@/components/common/heading";
import React from "react";

const InfoPayContract = () => {
  return (
    <div>
      <HeadingInfo text="Tiến độ thanh toán" className="text-sm" />
      <div className="layout-item--history font-primary mb-4">
        <span className="title-item-info--history">Ngày tạo HĐ</span>
        <span className="text-item-info--history">13/03/2023</span>
      </div>

      <div className="flex border border-ravi-gray-55 p-4 rounded-lg mb-4">
        <div className="layout-list--history">
          <div className="layout-item--history">
            <span className="title-item-info--history">Tiêu đề</span>
            <span className="text-item-info--history">Đợt 1</span>
          </div>
          <div className="layout-item--history">
            <span className="title-item-info--history">% giá trị HĐ</span>
            <span className="text-item-info--history">50%</span>
          </div>
          <div className="layout-item--history">
            <span className="title-item-info--history">
              Trạng thái thanh toán
            </span>
            <span className="text-item-info--history">Đã thanh toán</span>
          </div>
        </div>
        <div className="layout-list--history">
          <div className="layout-item--history border-left-item">
            <span className="title-item-info--history">Ngày thanh toán</span>
            <span className="text-item-info--history">13/03/2023</span>
          </div>
          <div className="layout-item--history border-left-item">
            <span className="title-item-info--history">Số tiền</span>
            <span className="text-item-info--history">150.000.000đ</span>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="layout-list--history">
          <div className="layout-item--history">
            <span className="title-item-info--history">
              Số tiền cần thanh toán
            </span>
            <span className="text-item-info--history">300.000.000đ</span>
          </div>
          <div className="layout-item--history">
            <span className="title-item-info--history">Đã thanh toán (%)</span>
            <span className="text-item-info--history">100%%</span>
          </div>
        </div>
        <div className="layout-list--history">
          <div className="layout-item--history border-left-item">
            <span className="title-item-info--history">Phí dịch vụ</span>
            <span className="text-item-info--history">0đ</span>
          </div>
          <div className="layout-item--history border-left-item">
            <span className="title-item-info--history">Bạn đã thanh toán</span>
            <span className="text-item-info--history">300.000.000đ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPayContract;
