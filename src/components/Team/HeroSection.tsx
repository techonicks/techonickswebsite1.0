"use client";
import { BackgroundBeams } from "../ui/background-beams";
import Profiles from "./Profiles";

const HeroSection = () => {
  return (
    <div className="py-8 w-full rounded-md bg-neutral-950 relative flex flex-col antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10  text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Meet Our Core Team
        </h1>
      </div>
      <Profiles />
      <BackgroundBeams />
    </div>
  );
};

export default HeroSection;
