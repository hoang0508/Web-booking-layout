import React, { useState } from "react";
import { ConfigProvider } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import updateLocale from "dayjs/plugin/updateLocale";

import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
} from "@/components/icons";
import "dayjs/locale/vi";
import locale from "antd/locale/vi_VN";

interface IDateHotel {
  className: string;
}

const { RangePicker } = DatePicker;
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);
dayjs.updateLocale("vi", {
  monthsShort: [
    "Tháng 1 ,",
    "Tháng 2 ,",
    "Tháng 3 ,",
    "Tháng 4 ,",
    "Tháng 5 ,",
    "Tháng 6 ,",
    "Tháng 7 ,",
    "Tháng 8 ,",
    "Tháng 9 ,",
    "Tháng 10 ,",
    "Tháng 11 ,",
    "Tháng 12",
  ],
});
const dateFormat = "llll";

const DateHotel = ({ className }: IDateHotel) => {
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const [dateValue, setDateValue] = useState<any>(null);
  return (
    <ConfigProvider locale={locale}>
      <RangePicker
        open={openDatePicker}
        onOpenChange={() => setOpenDatePicker(!openDatePicker)}
        use12Hours={true}
        popupClassName={`custom-date--dropdown`}
        className={`date-hotel--custom ${className}`}
        suffixIcon={
          <span
            className={`${
              openDatePicker
                ? "rotate-180 duration-300 ease-linear"
                : "rotate-0 duration-300 ease-linear"
            }`}
          >
            <IconArrowDown />
          </span>
        }
        clearIcon={false}
        placeholder={["Nhận phòng", "Trả phòng"]}
        value={dateValue}
        prevIcon={<IconArrowLeft />}
        nextIcon={<IconArrowRight />}
        format={dateFormat}
        onChange={(e) => setDateValue(e)}
        renderExtraFooter={(menu) => (
          <div className="flex justify-between items-center mt-3">
            <p className="text-xs text-ravi-gray-98 font-normal font-primary">
              Thời gian nhận và trả phòng tính theo giờ địa phương.
            </p>
            <div className="flex items-center gap-7">
              <button
                onClick={() => setDateValue(null)}
                className="font-bold text-primary text-xs font-primary"
              >
                Xóa bộ lọc
              </button>
              <button
                onMouseDown={(e) => e.stopPropagation()}
                className="font-bold text-primary text-xs font-primary"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      />
    </ConfigProvider>
  );
};

export default DateHotel;
