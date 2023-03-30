import React, { useState } from "react";
import { IconMinus, IconPlus } from "../../icons";

interface ICountInput {
  count: number;
}

const CountInput = ({ count }: ICountInput) => {
  const [inputCount, setInputCount] = useState(count);
  const handleDecrease = () => {
    if (inputCount === 0) return;
    setInputCount((inputCount) => inputCount - 1);
  };
  const handleIncrease = () => {
    setInputCount((inputCount) => inputCount + 1);
  };
  return (
    <>
      <div className="flex items-center gap-x-[6px]">
        <button
          className="w-[38px] h-[38px] rounded-lg border border-primary flex items-center justify-center"
          onClick={() => handleDecrease()}
        >
          <IconMinus />
        </button>
        <span className="text-base font-normal text-ravi-black-100 font-primary w-[22px] flex items-center justify-center">
          {inputCount}
        </span>
        <button
          className="w-[38px] h-[38px] rounded-lg border border-primary flex items-center justify-center"
          onClick={() => handleIncrease()}
        >
          <IconPlus />
        </button>
      </div>
    </>
  );
};

export default CountInput;
