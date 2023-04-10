import { IconClose, IconPendingPay } from "@/components/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { InfoUserContract } from "./info-contract";
import { HeadingInfo } from "@/components/common/heading";
import { Label } from "@/components/label";
import { TextAreaComp } from "@/components/textarea";
import { Button } from "@/components/button";

interface ICreatePendingContract {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}

const CreatePendingContract = ({ open, setOpen }: ICreatePendingContract) => {
  const handleOk = () => {};

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      title="Tạo yêu cầu pending"
      onOk={handleOk}
      onCancel={handleCancel}
      closeIcon={<IconClose />}
      footer={[
        <Button
          type="button"
          kind=""
          key="back"
          onClick={handleCancel}
          className="font-bold text-sm font-primary text-primary"
        >
          Hủy
        </Button>,
        <Button key={""} type="submit" kind="primary" onClick={handleOk}>
          Gửi yêu cầu pending
        </Button>,
      ]}
      className="modal-root-pending--content"
      rootClassName="modal-root-pending"
    >
      <div className="m-4 pb-4 border-b border-ravi-gray-55">
        <div className="flex items- gap-x-2 mb-4">
          <span className="">
            <IconPendingPay />
          </span>
          <div className="flex flex-col gap-y-1 font-primary">
            <span className="text-ravi-warning-600 font-normal text-xs">
              Chờ thanh toán
            </span>
            <h3 className="font-bold text-sm text-ravi-black-100">
              RAVI hợp đồng booking
            </h3>
          </div>
        </div>

        <div className="flex">
          <div className="layout-list--history">
            <div className="layout-item--history">
              <span className="title-item-info--history">Mã hợp đồng</span>
              <span className="text-item-info--history">#12456</span>
            </div>
            <div className="layout-item--history">
              <span className="title-item-info--history">Khu gốc</span>
              <span className="text-item-info--history">Sakana</span>
            </div>
            <div className="layout-item--history">
              <span className="title-item-info--history">Nguồn hợp đồng</span>
              <span className="text-item-info--history">Outside</span>
            </div>
            <div className="layout-item--history">
              <span className="title-item-info--history">Loại phòng</span>
              <span className="text-item-info--history">Villa</span>
            </div>
            <div className="layout-item--history">
              <span className="title-item-info--history">Ngày ký kết</span>
              <span className="text-item-info--history">11/03/2023</span>
            </div>
            <div className="layout-item--history">
              <span className="title-item-info--history">
                Tỉ lệ thanh toán (%)
              </span>
              <span className="text-item-info--history">10%</span>
            </div>
          </div>
          <div className="layout-list--history">
            <div className="layout-item--history border-left-item">
              <span className="title-item-info--history">Số hợp đồng</span>
              <span className="text-item-info--history">RAVI20230310</span>
            </div>
            <div className="layout-item--history border-left-item">
              <span className="title-item-info--history">
                Tuần nghỉ cố định
              </span>
              <span className="text-item-info--history">Tuần 51</span>
            </div>
            <div className="layout-item--history border-left-item">
              <span className="title-item-info--history">
                Ngày nghỉ dưỡng cố định
              </span>
              <span className="text-item-info--history">8N7Đ</span>
            </div>
            <div className="layout-item--history border-left-item">
              <span className="title-item-info--history">Hạng phòng</span>
              <span className="text-item-info--history">Family</span>
            </div>
            <div className="layout-item--history border-left-item">
              <span className="title-item-info--history">Đơn giá hợp đồng</span>
              <span className="text-item-info--history">300.000.000đ</span>
            </div>
            <div className="layout-item--history border-left-item">
              <span className="title-item-info--history">
                Bạn đã thanh toán
              </span>
              <span className="text-item-info--history">300.000.000đ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 pb-4 border-b border-ravi-gray-55">
        <HeadingInfo text="Thông tin chủ sở hữu" className="text-sm" />
        <div className="flex">
          <div className="layout-list--history">
            <div className="layout-item--history">
              <span className="text-sm font-normal text-ravi-gray-80">
                Họ và tên
              </span>
              <span className="text-ravi-black-100">Nguyễn Hoài Nam</span>
            </div>
            <div className="layout-item--history">
              <span className="text-sm font-normal text-ravi-gray-80">
                Ngày sinh
              </span>
              <span className="text-ravi-black-100">05/05/2000</span>
            </div>
            <div className="layout-item--history">
              <span className="text-sm font-normal text-ravi-gray-80">
                Số CCCD
              </span>
              <span className="text-ravi-black-100">02931232132132</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="layout-item--history border-left-item">
              <span className="text-sm font-normal text-ravi-gray-80">
                Số điện thoại
              </span>
              <span className="text-ravi-black-100">0987612334</span>
            </div>
            <div className="layout-item--history border-left-item">
              <span className="text-sm font-normal text-ravi-gray-80">
                Email
              </span>
              <span className="text-ravi-black-100">nam@123.com</span>
            </div>
            <div className="layout-item--history border-left-item">
              <span className="text-sm font-normal text-ravi-gray-80">
                Địa chỉ
              </span>
              <span className="text-ravi-black-100">20 pho hue</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-ravi-gray-55">
        <HeadingInfo text="Thông tin chủ sở hữu" className="text-sm" />
        <div>
          <Label title="Lý do pending"></Label>
          <TextAreaComp name="" placeholder="Content" />
        </div>
      </div>
    </Modal>
  );
};

export default CreatePendingContract;
