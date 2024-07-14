"use client"
import { members } from "@/utils/team";
import { HoverEffect } from "../ui/card-hover-effect";


const Profiles = ({year}:{year:string}) => {
  return (
    <div className="max-w-[1300px] mx-auto px-8 relative z-10">
      <HoverEffect items={members.filter(member=>member.year===year)} />
    </div>
  );
};



export default Profiles;
