import React from "react";
import AvatarImage from "../../assets/images/avatar-image.png";
import Image from "next/image";
import { IconBedRoom, IconClendar, IconUserV3 } from "../icons";

const FeedBack = () => {
  return (
    <div className="flex gap-x-16 bg-ravi-gray-fc py-5 pl-5 pr-[62px]">
      <div className="max-w-[225px] w-full">
        <div className="flex items-center gap-x-3 mb-6">
          <div className="h-[50px] w-[50px] flex-shrink-0">
            <Image
              src={AvatarImage}
              alt="image-avatar-feedback"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-1 flex-col gap-y-1">
            <span className="text-lg text-ravi-black-100 font-bold">
              Kathryn Murphy
            </span>
            <span className="text-ravi-gray-600 text-sm font-normal">
              tháng 07 năm 2022
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-[10px]">
            <span className="flex-shrink-0 ">
              <IconBedRoom fill="#808080" />
            </span>
            <span className="flex-1 text-sm font-normal text-ravi-gray-80">
              Standard 2 Single Bed
            </span>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <span className="flex-shrink-0 ">
              <IconClendar />
            </span>
            <span className="flex-1 text-sm font-normal text-ravi-gray-80">
              2 đêm - tháng 07/2022
            </span>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <span className="flex-shrink-0 ">
              <IconUserV3 fill="#808080" />
            </span>
            <span className="flex-1 text-sm font-normal text-ravi-gray-80">
              Cặp đôi
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-x-2 mb-4">
          <div className="bg-primary text-white py-[1px] px-[6px] font-bold text-sm rounded">
            <span className="text-white">9.7/</span>{" "}
            <span className="text-white opacity-[0.6]">10</span>
          </div>
          <span className="text-primary font-bold">“Tuyệt vời”</span>
        </div>
        <p className="font-light text-sm text-ravi-black-100 mb-4">
          Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
          Proin porta est convallis lacus blandit pretium sed non enim. Maecenas
          lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies
          laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In
          hac habitasse platea dictumst. Sed cursus venenatis tellus, non
          lobortis diam volutpat sit amet. Sed tellus augue, hendrerit eu rutrum
          in, porttitor at metus. Mauris ac hendrerit metus. Phasellus mattis
          lectus commodo felis egestas, id accumsan justo ultrices. Phasellus
          aliquet, sem a placerat dapibus, enim purus dictum lacus, nec ultrices
          ante dui ac ante. Phasellus placerat, urna.
        </p>
        <span className="font-normal text-sm text-ravi-gray-80">
          Ngày đánh giá: 28.02.2023
        </span>
      </div>
    </div>
  );
};

export default FeedBack;
