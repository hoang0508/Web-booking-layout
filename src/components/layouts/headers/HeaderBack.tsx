import { IconBack, IconHelp, IconUserV2 } from "@/components/icons";
import IconFavourite from "@/components/icons/IconFavourite";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../assets/images/logo-ravi.png";

const HeaderBack = () => {
  return (
    <header className="bg-white flex items-center justify-between py-4 pl-[52px] pr-6">
      <div className="flex items-center gap-x-3">
        <span>
          <IconBack />
        </span>
        <span>Lựa chọn của bạn</span>
      </div>
      <Link href={"/"}>
        <Image src={Logo} alt="logo" />
      </Link>
      <div className="flex items-center gap-x-9">
        <Link href={"/"}>
          <IconHelp />
        </Link>
        <Link href={"/"}>
          <IconFavourite />
        </Link>
        <Link href={"/"}>
          <IconUserV2 />
        </Link>
      </div>
    </header>
  );
};

export default HeaderBack;
