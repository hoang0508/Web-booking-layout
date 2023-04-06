import Image from "next/image";
import React, { ReactElement, ReactNode } from "react";
import Logo from "../../../assets/images/logo-ravi.png";

interface ICardImageLinear {
  image: any;
}

const CardImageLinear = ({ image }: ICardImageLinear) => {
  return (
    <div className="h-[242px] relative flex-shrink-0">
      <div>
        <Image
          src={image}
          alt="card-image-blog"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-blog opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-out"></div>
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-out">
        <Image src={Logo} alt="card-logo" />
      </div>
    </div>
  );
};

export default CardImageLinear;
