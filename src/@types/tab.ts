import { ReactNode } from "react";

interface IItems {
  label: string;
  key: string;
  children: ReactNode;
}

export interface ITabComp {
  items: any[];
  onChange?: () => void;
}
