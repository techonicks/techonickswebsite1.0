"use client"
import { members } from "@/utils/team";
import { HoverEffect } from "../ui/card-hover-effect";


const Profiles = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-8 relative z-10">
      <HoverEffect items={members} />
    </div>
  );
};



export default Profiles;
