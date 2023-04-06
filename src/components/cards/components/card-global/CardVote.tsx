import React from "react";

interface ICardVote {
  className?: string;
}

const CardVote = ({ className = "mb-2" }: ICardVote) => {
  return (
    <div className={`flex items-center gap-x-[30px] ${className}`}>
      <span className="bg-primary text-white px-[6px] rounded font-bold text-sm">
        9.7
      </span>
      <ul className="flex items-center gap-x-[30px]  text-text80 text-sm font-normal">
        <li className="list-disc marker:text-ravi-gray-80 text-ravi-gray-80">
          48 đánh giá
        </li>
        <li className="list-disc marker:text-ravi-gray-80 text-ravi-gray-80">
          Tuyệt vời
        </li>
      </ul>
    </div>
  );
};

export default CardVote;
