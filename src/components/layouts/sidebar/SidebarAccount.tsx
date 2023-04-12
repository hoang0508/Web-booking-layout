import {
  IconHeart,
  IconMenuFavourite,
  IconMenuHistoryContract,
  IconMenuHistoryRoom,
  IconMenuPermission,
  IconMenuSecurity,
  IconMenuStar,
  IconUser,
} from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./SidebarAccount.module.scss";

const sidebarList = [
  {
    id: 1,
    url: "/account",
    title: "Thông tin cá nhân",
    icon: <IconUser />,
  },
  {
    id: 2,
    url: "/account/history-room",
    title: "Lịch sử đặt phòng",
    icon: <IconMenuHistoryRoom />,
  },
  {
    id: 3,
    url: "/account/history-contract",
    title: "Lịch sử hợp đồng",
    icon: <IconMenuHistoryContract />,
  },
  {
    id: 4,
    url: "/account/permission-rest",
    title: "Quyền nghỉ",
    icon: <IconMenuPermission />,
  },
  {
    id: 5,
    url: "/account/favourite-list",
    title: "Danh sách yêu thích",
    icon: <IconMenuFavourite />,
  },
  {
    id: 5,
    url: "/account/experience-rating",
    title: "Đánh giá trải nghiệm",
    icon: <IconMenuStar />,
  },
  {
    id: 5,
    url: "/account/security-safe",
    title: "An toàn và bảo mật",
    icon: <IconMenuSecurity />,
  },
];

const SidebarAccount = () => {
  const router = useRouter();
  return (
    <div className="bg-white max-w-[307px] w-full border border-ravi-gray-55">
      <div className="flex flex-col gap-y-2 mb-[60px] pt-[30px] pl-[26px]">
        <span className="text-base text-ravi-black-100 font-normal">
          tmduca8@gmail.com
        </span>
        <span className="text-primary font-normal text-sm cursor-pointer">
          Đăng xuất
        </span>
      </div>

      <div className="flex flex-col pb-[50px]">
        {sidebarList.map((link) => (
          <Link
            key={link.id}
            className={`${
              router.pathname == link.url
                ? `${styles["menu-account--active"]} last:mb-0 mb-2`
                : " hover:bg-ravi-gray-f5 duration-300 ease-linear last:mb-0 mb-2"
            } flex items-center gap-x-[10px] pl-[26px] py-[10px] duration-300 ease-linear`}
            href={link.url}
          >
            <span className={styles["menu-account--active-icon"]}>
              {link.icon}
            </span>
            <span className={styles["menu-account--title"]}>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarAccount;
