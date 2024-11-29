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

export interface MemberWithCredentials {
  avatar? : File | string
  name : string
  email : string
  password : string
  year : "1st" | "2nd" | "3rd" | "4th" | string
  department : "CE" | "CSE" | "ECE" | "EE" | "ME" | string
  role : "incharge" | "core-member" | "member" | string
  description? : string
  socials? : {
    handle : string
    link : string
  }
}
