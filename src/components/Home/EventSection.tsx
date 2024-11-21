"use client";
import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import { pastEvents } from "@/utils/AllEvents";
import Link from "next/link";

const EventSection = () => {
  const [tabToggler, setTabTogller] = useState({
    isPastEnabled: true,
    isOnGoingEnabled: false,
    isUpcomingEnabled: false,
  });

  return (
    <div className="overflow-hidden">
      <TracingBeam className="px-6">
        {tabToggler.isPastEnabled ? (
          <>
            <div className="flex gap-3 md:gap-8 justify-center text-xl sm:text-4xl my-4 sm:my-6 font-semibold relative">
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: true,
                    isOnGoingEnabled: false,
                    isUpcomingEnabled: false,
                  })
                }
                className={`${
                  tabToggler.isPastEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Past Event
              </button>
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: false,
                    isOnGoingEnabled: true,
                    isUpcomingEnabled: false,
                  })
                }
                className={`${
                  tabToggler.isOnGoingEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Ongoing
              </button>
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: false,
                    isOnGoingEnabled: false,
                    isUpcomingEnabled: true,
                  })
                }
                className={`${
                  tabToggler.isUpcomingEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Upcoming
              </button>
            </div>
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {pastEvents
                .filter((event) => event.type === "past")
                .map((item, index) => (
                  <div key={`content-${index}`} className="mb-10">
                    <p className={twMerge("text-xl mb-4 animate-textGlow")}>
                      {item.title}
                    </p>

                    <div className="text-sm  prose prose-sm prose-invert">
                      {item?.image && (
                        <Link href={item.link}>
                          <Image
                            src={item.image}
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                          />
                        </Link>
                      )}
                      {item.description}
                    </div>
                  </div>
                ))}
            </div>
          </>
        ) : tabToggler.isOnGoingEnabled ? (
          <>
            <div className="flex gap-3 md:gap-8 justify-center text-xl sm:text-4xl my-4 sm:my-6 font-semibold relative">
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: true,
                    isOnGoingEnabled: false,
                    isUpcomingEnabled: false,
                  })
                }
                className={`${
                  tabToggler.isPastEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Past Event
              </button>
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: false,
                    isOnGoingEnabled: true,
                    isUpcomingEnabled: false,
                  })
                }
                className={`${
                  tabToggler.isOnGoingEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Ongoing
              </button>
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: false,
                    isOnGoingEnabled: false,
                    isUpcomingEnabled: true,
                  })
                }
                className={`${
                  tabToggler.isUpcomingEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Upcoming
              </button>
            </div>
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {pastEvents
                .filter((event) => event.type === "ongoing")
                .map((item, index) => (
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
          </>
        ) : (
          <>
            <div className="flex gap-3 md:gap-8 justify-center text-xl sm:text-4xl my-4 sm:my-6 font-semibold relative">
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: true,
                    isOnGoingEnabled: false,
                    isUpcomingEnabled: false,
                  })
                }
                className={`${
                  tabToggler.isPastEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Past Event
              </button>
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: false,
                    isOnGoingEnabled: true,
                    isUpcomingEnabled: false,
                  })
                }
                className={`${
                  tabToggler.isOnGoingEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Ongoing
              </button>
              <button
                onClick={() =>
                  setTabTogller({
                    isPastEnabled: false,
                    isOnGoingEnabled: false,
                    isUpcomingEnabled: true,
                  })
                }
                className={`${
                  tabToggler.isUpcomingEnabled
                    ? "text-cyan-500"
                    : "text-[1.1rem] md:text-3xl duration-200"
                }`}
              >
                Upcoming
              </button>
            </div>
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {pastEvents
                .filter((event) => event.type === "upcoming")
                .map((item, index) => (
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
          </>
        )}
      </TracingBeam>
    </div>
  );
};

export default EventSection;
