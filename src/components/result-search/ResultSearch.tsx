import React, { useState } from "react";
import {
  DropdownFilterLive,
  DropdownFilterPopular,
  DropdownFilterPrice,
} from "./dropdown-filter";
import { ButtonFilter } from "../button";
import ModalFilter from "./modal-filter/ModalFilter";
import { IconArrowRight, IconLineV2 } from "../icons";
import { TagComp } from "../tags";

const ResultSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-2 items-center">
        <div className="flex items-center gap-x-2">
          <DropdownFilterPopular />
          <DropdownFilterLive />
          <DropdownFilterPrice />
        </div>
        <span>
          <IconLineV2 />
        </span>
        <div className="flex items-center gap-x-2">
          {Array(2)
            .fill(0)
            .map((item, index) => (
              <TagComp key={index}>Thú cưng</TagComp>
            ))}
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <span className="w-7 h-7 border border-ravi-gray-55 rounded-full flex items-center justify-center cursor-pointer">
          <IconArrowRight />
        </span>
        <ButtonFilter onClick={() => showModal()}>Bộ lọc</ButtonFilter>
      </div>
      <ModalFilter
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      ></ModalFilter>
    </div>
  );
};

export default ResultSearch;
