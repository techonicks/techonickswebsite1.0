"use client";
import Link from "next/link";
import { BackgroundBeams } from "../ui/background-beams";
import Profiles from "./Profiles";

const HeroSection = ({year}:{year:string}) => {
  return (
    <div className="py-8 w-full rounded-md bg-neutral-950 relative flex flex-col antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10  text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          {
            year === "2026" ? <span className="line-clamp-5 text-center">Meet Our <br /> Core Team</span> : <span className="line-clamp-5 text-center">Extended <br /> Core Team</span>
          }
        </h1>
      </div>
      <Profiles year={year}/>
      <Link href={`/team/${year === "2026"? "extended-core-team" : ""}`} className="md:text-3xl sm:text-xl bg-cyan-900 font-semibold px-4 py-2 self-center z-10 relative rounded-md ">{year === "2026" ? "Extended Core Team" : "Main Core Team"}</Link>
      <BackgroundBeams />
    </div>
  );
};

export default HeroSection;
