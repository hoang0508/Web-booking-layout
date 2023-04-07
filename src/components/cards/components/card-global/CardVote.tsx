import React from "react";

interface ICardVote {
  className?: string;
  textClassName?: string;
  descFeed?: string;
  numberRate?: string;
}

const CardVote = ({
  className = "mb-2 text-sm",
  numberRate,
  descFeed,
}: ICardVote) => {
  return (
    <div className={`flex items-center gap-x-[30px] ${className}`}>
      <span className="bg-primary text-white px-[6px] rounded font-bold">
        9.7
      </span>
      <ul className="flex items-center gap-x-[30px]  text-text80 font-normal">
        <li className="list-disc marker:text-ravi-gray-80 text-ravi-gray-80">
          {numberRate} đánh giá
        </li>
        <li className="list-disc marker:text-ravi-gray-80 text-ravi-gray-80">
          {descFeed}
        </li>
      </ul>
    </div>
  );
};

export default CardVote;
