import { StaticImageData } from "next/image";

export interface Member {
  title: string;
  img: StaticImageData;
  link: string;
  dept: string;
  desc: string;
  year: string;
  social: {
    logo: StaticImageData;
    link: string;
  }[];
}
