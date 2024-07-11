"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import { pastEvents } from "@/utils/pastEvents";




const MainContent = () => {
  return (
    <TracingBeam className="px-6">
      <div className="text-center text-2xl sm:text-4xl my-4 sm:my-6 font-semibold relative">
        Past Events
      </div>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {pastEvents.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className={twMerge("text-xl mb-4 animate-textGlow")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default MainContent;
