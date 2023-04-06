import React from "react";
import CardImageBlog from "../../../assets/images/card-image-blog.png";
import Link from "next/link";
import { CardImageLinear } from "@/components/common";

const CardBlog = () => {
  return (
    <div className="group cursor-pointer flex flex-col gap-y-5">
      <CardImageLinear image={CardImageBlog} />
      <div className="flex-1">
        <span className="inline-block mb-2 text-ravi-gray-98 text-sm">
          03.10.2022
        </span>
        <h3 className="max-w-[307px] w-full mb-5 font-bold text-ravi-black-100 text-xl">
          Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng
        </h3>
        <Link href={"/"} className="group">
          <span className="text-ravi-gray-98 border-b border-dashed border-ravi-gray-98 pb-[6px] group-hover:border-solid group-hover:border-ravi-black-100 group-hover:text-ravi-black-100 duration-300 ease-out">
            Đọc thêm
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardBlog;
