import { IconCar, IconFly, IconHelp, IconUserV2 } from "@/components/icons";
import IconFavourite from "@/components/icons/IconFavourite";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "../../../assets/images/logo-ravi.png";

interface IdataHeaderMenu {
  id: number;
  title: string;
  icon: ReactNode;
  to: string;
}

const dataHeaderMenu: IdataHeaderMenu[] = [
  {
    id: 1,
    title: "Trợ giúp",
    icon: <IconHelp />,
    to: "/",
  },
  {
    id: 2,
    title: "Yêu thích",
    icon: <IconFavourite />,
    to: "/",
  },
  {
    id: 3,
    title: "Tài khoản",
    icon: <IconUserV2 />,
    to: "/",
  },
];

const HeaderMenuHome = () => {
  return (
    <header className="flex justify-between items-center bg-white py-[43px] px-12">
      <div className="flex items-center gap-x-[54px]">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-x-[34px]">
          <Link href={"/"} className="flex items-center gap-x-3">
            <span>
              <IconCar />
            </span>
            <span className="xl:text-lg  lg:text-base font-normal text-ravi-black-100">
              Lưu trú
            </span>
          </Link>
          <Link href={"/"} className="flex items-center gap-x-3">
            <span>
              <IconFly />
            </span>
            <span className="xl:text-lg lg:text-base font-normal text-ravi-black-100">
              Chuyến bay
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center xl:gap-x-[34px] lg:gap-x-7">
        {dataHeaderMenu.map((item: IdataHeaderMenu) => (
          <Link
            key={item?.id}
            href={item.to}
            className="flex items-center gap-x-[10px]"
          >
            <span>{item?.icon}</span>
            <span className="xl:text-base font-normal text-ravi-black-100 lg:text-sm">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default HeaderMenuHome;
