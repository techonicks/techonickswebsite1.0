"use client";
import Image, { StaticImageData } from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import React from "react";

interface member {
  title: string;
  img: StaticImageData;
  link: string;
  dept: string;
  desc: string;
  year: string;
}

const MemberAvatar = ({ member }:{member : member} ) => {

  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: member.title,
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


  return (
    <div className="min-h-[80vh] w-[90%] sm:gap-20 flex items-center flex-col  gap-2 sm:flex-row py-6 px-3  sm:px-20">
      <div className="">
        <Image
          src={member.img}
          alt="img"
          className="max-w-[100%] sm:max-w-[400px] rounded-md"
          priority
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col px-3 flex-wrap">
      <TypewriterEffectSmooth words={words}/>
      <div className="text-xl mb-4 text-blue-400">{member.dept + " " + member.year + " "+ "Year"}</div>
      <div className="text-[1.1rem]">
        {member.desc}
      </div>
      </div>
    </div>
  );
};

export default MemberAvatar;
