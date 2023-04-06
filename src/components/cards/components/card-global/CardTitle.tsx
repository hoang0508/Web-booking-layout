import { IconStar } from "@/components/icons";
import React from "react";

interface ICardTitle {
  title: string;
  numberStar: string | number;
}

const CardTitle = ({ title, numberStar }: ICardTitle) => {
  return (
    <div className="flex gap-x-2 items-start mb-2">
      <h3 className="font-bold text-base text-text100 text-truncate">
        {title}
      </h3>
      <div className="flex items-center gap-1">
        <span className="font-bold text-sm text-primary">{numberStar}</span>
        <span>
          <IconStar />
        </span>
      </div>
    </div>
  );
};

export default CardTitle;
