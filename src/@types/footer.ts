interface IData {
  id: number;
  text: string;
  link: string;
}

export interface IFooter {
  id: number;
  title: string;
  data: IData[];
}
