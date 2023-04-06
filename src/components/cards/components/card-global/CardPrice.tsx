import React from "react";

interface ICardPrice {
  price: number | string;
}

const CardPrice = ({ price }: ICardPrice) => {
  return (
    <div>
      <span className="text-sm font-normal">Bắt đầu từ </span> {"  "}{" "}
      <strong className="text-base font-bold">{price}đ</strong>
    </div>
  );
};

export default CardPrice;
