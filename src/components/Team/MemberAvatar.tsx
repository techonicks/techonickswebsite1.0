"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import React from "react";
import { Member } from "@/interfaces/member.interface";



const MemberAvatar = ({ member }: { member: Member }) => {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: member.title,
      className: "text-blue-500 text-blue-500",
    },
  ];
  return (
    <div className="min-h-[80vh] w-[90%] sm:gap-20 flex items-center flex-col  gap-2 lg:flex-row py-6 px-3  sm:px-20">
      <div className="">
        <Image
          src={member.img}
          alt="img"
          className="max-w-[100%] sm:max-w-[400px] rounded-md border-[3px] border-cyan-700 shadow-[10px_10px_100px_23px_rgba(76,12,66,0.8)]"
          priority
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col px-3 flex-wrap">
        <TypewriterEffectSmooth words={words} />
        <div className="text-xl mb-4 text-blue-400">
          {member.dept + " " + member.year + " "}
        </div>
        <div className="text-[1.1rem]">{member.desc}</div>
        <span className="flex gap-4">
          {member.social.map((item, i) => {
            if (item.logo != null) {
              return (
                <span className="py-8" key={i}>
                  <a href={item.link} className="icon-glow" target="_blank">
                    <Image src={item.logo} alt="logo" className="max-w-10 " />
                  </a>
                </span>
              );
            }
          })}
        </span>
      </div>
    </div>
  );
};

export default MemberAvatar;
