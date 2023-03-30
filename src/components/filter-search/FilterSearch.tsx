import React from "react";
import CountHotel from "./count-hotel/CountHotel";
import DateHotel from "./date-hotel/DateHotel";
import SearchHotel from "./search-hotel/SearchHotel";

const FilterSearch = () => {
  return (
    <div className="bg-white rounded-lg max-w-[960px] mx-auto flex items-center">
      <SearchHotel className="max-w-[308px]" />
      <DateHotel className="max-w-[330px]" />
      <CountHotel className="max-w-[224px] ml-5" />
      <button className="max-w-[84px] h-[66px] w-full bg-primary text-white font-bold text-sm rounded-lg flex items-center justify-center my-[2px] mr-[2px]">
        Tìm
      </button>
    </div>
  );
};

export default FilterSearch;
