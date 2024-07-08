import React from "react";
import MemberAvatar from "./MemberAvatar";
import { StaticImageData } from "next/image";

interface member {
  title: string;
  img: StaticImageData;
  link: string;
  dept: string;
  desc: string;
  year: string;
}

const MemberProfile = ({ member }: { member: member }) => {
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <MemberAvatar member={member} />
    </div>
  );
};

export default MemberProfile;
