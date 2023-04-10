import { Label } from "@/components/label";
import { TextAreaComp } from "@/components/textarea";
import React from "react";

const InfoPendingContract = () => {
  return (
    <>
      <div className="mb-4">
        <Label title="Lý do pending của bạn"></Label>
        <TextAreaComp
          name="pending"
          placeholder="Sale đưa thông tin không chính xác về Công ty"
        />
      </div>

      <div className="flex">
        <div className="layout-list--history">
          <div className="layout-item--history">
            <span className="title-item-info--history">
              Ngày làm việc tiếp theo
            </span>
            <span className="text-item-info--history">07/03/2023</span>
          </div>
          <div className="layout-item--history">
            <span className="title-item-info--history">Đã thanh toán (%)</span>
            <span className="text-item-info--history">30%</span>
          </div>
          <div className="layout-item--history">
            <span className="title-item-info--history">Mức phạt (%)</span>
            <span className="text-item-info--history">0%</span>
          </div>
          <div className="layout-item--history">
            <span className="title-item-info--history">
              Số tiền bạn nhận lại
            </span>
            <span className="text-item-info--history">30.000.000đ</span>
          </div>
        </div>
        <div className="layout-list--history">
          <div className="layout-item--history border-left-item">
            <span className="title-item-info--history">Ngày hoản trả</span>
            <span className="text-item-info--history">20/03/2023</span>
          </div>
          <div className="layout-item--history border-left-item">
            <span className="title-item-info--history">Bạn đã thanh toán</span>
            <span className="text-item-info--history">30.000.000đ</span>
          </div>
          <div className="layout-item--history border-left-item">
            <span className="title-item-info--history">Số tiền phạt</span>
            <span className="text-item-info--history">0đ</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPendingContract;
