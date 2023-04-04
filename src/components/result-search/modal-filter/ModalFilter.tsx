import { CheckboxComp } from "@/components/checkbox";
import { HeadingFilter } from "@/components/common";
import {
  IconArrowDownV2,
  IconClose,
  IconLine,
  IconStar,
} from "@/components/icons";
import { RadioComp } from "@/components/radio";
import { useToggleValue } from "@/hooks";
import { Modal, Radio, RadioChangeEvent, Slider } from "antd";
import React, { useEffect, useState } from "react";

interface IModalFilter {
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
  isModalOpen: boolean;
}

const ModalFilter = ({ setIsModalOpen, isModalOpen }: IModalFilter) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // setIsModalOpen(false);
  };

  const [inputValue, setInputValue] = useState<any>("");
  const numberValue = 100000000;

  const handleChangeInputRange = (newValue: any) => {
    setInputValue(newValue);
  };

  // Radio value
  const [value, setValue] = useState(1);
  const handleChangeInputRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // handle Star Value
  const handleStarValue = (index: number) => {
    switch (index) {
      case 1:
        return (
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-primary font-normal">1</span>
            <IconStar />
          </div>
        );
      case 2:
        return (
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-primary font-normal">2</span>
            <div className="flex items-center gap-x-2">
              <IconStar />
              <IconStar />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-primary font-normal">3</span>
            <div className="flex items-center gap-x-2">
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-primary font-normal">5</span>
            <div className="flex items-center gap-x-2">
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex items-center gap-x-2">
            <span className="text-xs font-primary font-normal">2</span>
            <div className="flex items-center gap-x-2">
              <IconStar />
              <IconStar />
            </div>
          </div>
        );

      default:
        break;
    }
  };

  // handle Toggle more
  const [numberItem, setNumberItem] = useState<number>(10);
  const { value: toggleShowMore, handleToggleValue } = useToggleValue(false);

  useEffect(() => {
    if (toggleShowMore) {
      setNumberItem(16);
    } else {
      setNumberItem(10);
    }
  }, [toggleShowMore]);

  return (
    <Modal
      // destroyOnClose={true}
      // maskClosable={false}
      closeIcon={<IconClose />}
      title="Bộ lọc"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="Xóa bộ lọc"
      okText="Đóng bộ lọc"
      className="modal-custom-filter scroll-hidden"
    >
      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Bộ lọc phổ biến"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div className="flex flex-wrap gap-y-4">
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <div key={index} className="w-2/4">
                <CheckboxComp>Đã bao gồm bữa sáng</CheckboxComp>
              </div>
            ))}
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Giá tiền"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div>
          <span className="">Giá trung bình hàng đêm: 1.000.000VND</span>
          <Slider
            className="custom-input-range"
            onChange={(e) => handleChangeInputRange(e)}
            range
            defaultValue={[0, 100]}
          />
          <div className="flex items-center gap-x-2">
            <div className="w-2/4 h-[48px] flex justify-center items-center border border-ravi-gray-98 rounded-lg text-[10px] font-normal tracking-[0,005em] font-primary">
              {`${inputValue[0] ? inputValue[0] : 0}đ`}
            </div>
            <span>
              <IconLine />
            </span>
            <div className="w-2/4 h-[48px] flex justify-center items-center border border-ravi-gray-98 rounded-lg text-[10px] font-normal tracking-[0,005em] font-primary">
              {`${inputValue[1] ? inputValue[1] : numberValue}đ`}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Các loại chỗ ở"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div className="flex flex-wrap gap-y-4">
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <div key={index} className="w-2/4">
                <CheckboxComp>Villa</CheckboxComp>
              </div>
            ))}
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Phòng ngủ"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div>
          <Radio.Group
            onChange={handleChangeInputRadio}
            value={value}
            className="flex flex-wrap gap-y-4"
          >
            {Array(6)
              .fill(0)
              .map((item, index) => (
                <div className="w-[50%]" key={index}>
                  <RadioComp value={index}>1 phòng</RadioComp>
                </div>
              ))}
          </Radio.Group>
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Giường"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div>
          <Radio.Group
            onChange={handleChangeInputRadio}
            value={value}
            className="flex flex-wrap gap-y-4"
          >
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <div className="w-[50%]" key={index}>
                  <RadioComp value={index}>1 giường</RadioComp>
                </div>
              ))}
          </Radio.Group>
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Phòng tắm"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div>
          <Radio.Group
            onChange={handleChangeInputRadio}
            value={value}
            className="flex flex-wrap gap-y-4"
          >
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <div className="w-[50%]" key={index}>
                  <RadioComp value={index}>1 phòng tắm</RadioComp>
                </div>
              ))}
          </Radio.Group>
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Xếp hạng sao"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div>
          <Radio.Group
            onChange={handleChangeInputRadio}
            value={value}
            className="flex flex-wrap gap-y-4"
          >
            {Array(6)
              .fill(0)
              .map((item, index) => (
                <div className="w-[50%]" key={index}>
                  <RadioComp value={index}>
                    {index <= 5 && index > 0
                      ? handleStarValue(index)
                      : "Không xếp hạng sao"}
                  </RadioComp>
                </div>
              ))}
          </Radio.Group>
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Sức khỏe và an toàn"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div className="flex flex-wrap gap-y-4">
          <CheckboxComp>
            Các chỗ nghỉ có biện pháp đảm bảo sức khỏe và an toàn{" "}
          </CheckboxComp>
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Khoảng cách từ trung tâm thành phố"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div className="flex flex-wrap gap-y-4">
          {Array(2)
            .fill(0)
            .map((item, index) => (
              <div className="w-2/4" key={index}>
                <CheckboxComp>Dưới 3 km</CheckboxComp>
              </div>
            ))}
        </div>
      </div>

      <div className="pb-8 mb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Tiện ích và dịch vụ của khách sạn"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div className="flex flex-wrap gap-y-4">
          {Array(numberItem)
            .fill(0)
            .map((item, index) => (
              <div className="w-2/4" key={index}>
                <CheckboxComp>Hồ bơi ngoài trời</CheckboxComp>
              </div>
            ))}
          <div
            className="flex items-center gap-x-3 text-base font-normal text-primary cursor-pointer"
            onClick={handleToggleValue}
          >
            {toggleShowMore ? "Ẩn bớt" : "Xem thêm"}
            <span className={`${toggleShowMore ? "rotate-180" : "rotate-0"}`}>
              <IconArrowDownV2 />
            </span>
          </div>
        </div>
      </div>

      <div className="pb-8 border-b border-ravi-gray-55">
        <HeadingFilter
          text="Tiện ích và dịch vụ của khách sạn"
          className="mb-5 uppercase tracking-[0.005em]"
        ></HeadingFilter>
        <div className="flex flex-wrap gap-y-4">
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <div className="w-2/4" key={index}>
                <CheckboxComp>Ban công</CheckboxComp>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalFilter;
