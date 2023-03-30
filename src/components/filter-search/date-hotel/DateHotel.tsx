import React, { useState } from "react";
import { ConfigProvider } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
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

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

const DateHotel = ({ className }: IDateHotel) => {
  const [dateValue, setDateValue] = useState<any>(null);
  return (
    <ConfigProvider locale={locale}>
      <RangePicker
        dropdownClassName={`custom-date--dropdown`}
        className={`date-hotel--custom ${className}`}
        suffixIcon={<IconArrowDown />}
        clearIcon={false}
        placeholder={["Nhận phòng", "Trả phòng"]}
        defaultValue={[
          dayjs("2015/01/01", dateFormat),
          dayjs("2015/01/01", dateFormat),
        ]}
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
