import Link from "next/link";
import React from "react";
import { dataFooter } from "./dataFooter";
import { IFooter } from "@/@types";
import { IconFacebook, IconInstagram, IconYoutube } from "@/components/icons";
import Logo from "../../../assets/images/logo-ravi.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-ravi-black-100 xl:pt-[68px] xl:px-[80px] lg:pt-[50px] lg:px-14 pb-[34px]">
      <div className="flex xl:flex-row lg:flex-col">
        <div className="grid xl:grid-cols-4 xxl:gap-x-[107px] xl:gap-x-[90px] lg:grid-cols-2 lg:gap-y-8">
          {dataFooter &&
            dataFooter.map((item: IFooter) => (
              <div key={item.id}>
                <h3 className="mb-6 text-white font-bold text-base">
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-y-3">
                  {item.data.map((links) => (
                    <li key={links.id}>
                      <Link
                        href={links.link}
                        className="text-ravi-gray-98 text-sm font-normal"
                      >
                        {links.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="xl:ml-auto xl:mt-0 lg:mt-8">
          <h3 className="mb-6 text-white font-bold text-base">Mạng xã hội</h3>
          <div className="flex items-center gap-x-[10px] cursor-pointer">
            <span className="w-7 h-7 bg-white flex items-center justify-center rounded-full">
              <IconFacebook />
            </span>
            <span className="w-7 h-7 bg-white flex items-center justify-center rounded-full">
              <IconYoutube />
            </span>
            <span className="w-7 h-7 bg-white flex items-center justify-center rounded-full">
              <IconInstagram />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center xl:mt-[114px] lg:mt-20">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <p className="text-ravi-gray-98 font-light text-sm">
          Copyright © RAVI 2022. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
