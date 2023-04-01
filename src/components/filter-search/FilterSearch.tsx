import React from "react";
import CountHotel from "./count-hotel/CountHotel";
import DateHotel from "./date-hotel/DateHotel";
import SearchHotel from "./search-hotel/SearchHotel";

const FilterSearch = () => {
  return (
    <div className="bg-white rounded-lg max-w-[960px]  mx-auto flex items-center relative">
      <SearchHotel className="max-w-[308px] w-full" />
      <div className="after:content-line w-full after:absolute after:h-full after:pt-[5px] after:pl-[26px] after:pb-[5px] after:top-2/4 after:-translate-y-2/4 before:content-line before:pt-[5px] before:absolute before:h-full before:top-2/before:-translate-y-2/4">
        <DateHotel className="max-w-[330px] w-full" />
      </div>
      <CountHotel className="max-w-[224px] w-full ml-custom" />
      <button className="max-w-[84px] h-[66px] w-full bg-primary text-white font-bold text-sm rounded-lg flex items-center justify-center my-[2px] mr-[2px]">
        Tìm
      </button>
    </div>
  );
};

export default FilterSearch;
