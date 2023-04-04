import { Tag } from "antd";
import React, { ReactNode } from "react";
import { IconClose } from "../icons";

interface ITagComp {
  className?: string;
  children: ReactNode;
}

const TagComp = ({ className = "", children }: ITagComp) => {
  return (
    <Tag
      className={`custom-tag ${className}`}
      closable
      closeIcon={<IconClose />}
    >
      <span>{children}</span>
    </Tag>
  );
};

export default TagComp;
