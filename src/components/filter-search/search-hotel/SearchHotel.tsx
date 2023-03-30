import { IconClose, IconHotel } from "@/components/icons";
import { Select } from "antd";
import React, { useState } from "react";
import styles from "./SearchHotel.module.scss";

interface ISearchHotel {
  className: string;
}

const SearchHotel = ({ className }: ISearchHotel) => {
  const [selected, setSelected] = useState<any>();
  // handler
  const clearSelected = () => {
    setSelected(null);
  };
  const Option = Select.Option;
  return (
    <>
      <Select
        className={`select-hotel--custom ${className}`}
        placeholder={"Tìm khách sạn" || selected}
        defaultValue={"Tìm khách sạn" || selected}
        onChange={(e) => setSelected(e)}
        suffixIcon={<IconHotel />}
        clearIcon={<IconClose />}
        allowClear={true}
        value={selected}
        dropdownRender={(menu) => (
          <div className="custom-select--show">{menu}</div>
        )}
      >
        <>
          <Option value="disabled" disabled>
            <h3 className="title-search">Tìm kiếm gần đây</h3>
          </Option>
          <Option value="Hà Nội">
            <div className="option-search">
              <span className="option-search--text">Hà Nội</span>
            </div>
          </Option>
          <Option value="Đà Nẵng">
            <div className="option-search">
              <span className="option-search--text">Đà Nẵng</span>
            </div>
          </Option>
          <Option value="disabled" disabled>
            <h3 className="title-search">Tìm kiếm nổi bật</h3>
          </Option>
          <Option value="Thanh Hóa">
            <div className="option-search">
              <span className="option-search--text">Thanh Hóa</span>
            </div>
          </Option>
          <Option value="Ninh Bình">
            <div className="option-search">
              <span className="option-search--text">Ninh Bình</span>
            </div>
          </Option>
        </>
      </Select>
    </>
  );
};

export default SearchHotel;
