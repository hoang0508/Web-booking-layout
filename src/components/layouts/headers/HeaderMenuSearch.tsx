import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../assets/images/logo-ravi.png";
import { SearchHotel } from "@/components/filter-search/search-hotel";
import { DateHotel } from "@/components/filter-search/date-hotel";
import { CountHotel } from "@/components/filter-search/count-hotel";
import { IconHelp, IconUserV2 } from "@/components/icons";
import IconFavourite from "@/components/icons/IconFavourite";

const HeaderMenuSearch = () => {
  return (
    <header className="flex items-center bg-white">
      <div className="flex items-center">
        <Link
          href={"/"}
          className="xxl:w-[238px] max-xl:w-[200px] xl:w-[220px] max-lg:w-[170px] py-4 pl-4 border-r border-ravi-gray-55"
        >
          <Image src={Logo} alt="logo" />
        </Link>
        <div className="max-xl:w-[300px] xxl:w-[365px] xl:w-[330px] max-lg:w-[220px] border-r border-ravi-gray-55">
          <SearchHotel className="w-full" />
        </div>
        <div className="xxl:w-[354px] xl:w-[320px] max-lg:w-[250px] max-xl:w-[320px] border-r border-ravi-gray-55 pr-6">
          <DateHotel className="w-full" />
        </div>
        <div className="xl:w-[248px] max-xl:w-[220px] border-r border-ravi-gray-55 pl-5">
          <CountHotel className="w-full" />
        </div>
      </div>
      <div className="xxl:max-w-[235px] xl:justify-end xl:gap-x-8 w-full flex items-center xxl:gap-x-9 max-xl:justify-end max-xl:gap-x-3 mr-6 ml-auto ">
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

export default HeaderMenuSearch;
