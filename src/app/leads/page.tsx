import { incharges } from "@/utils/incharges";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex px-4 md:px-10 py-4 flex-col">
      <h1 className="m-auto text-2xl md:text-5xl font-bold">
        Meet our In-charges
      </h1>
      <h1 className="text-center mt-10 text-xl md:text-3xl text-green-700">Session : 2023-24 (Current)</h1>
      <div className="flex flex-col md:flex-row justify-center items-center my-5 sm:my-8 md:my-10 gap-8 md:gap-20">
        {incharges
          .filter((lead) => lead.tenure === "2023-24")
          .map((lead, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-4  bg-slate-800/[0.8] rounded"
            >
              <Image
                src={lead.img}
                alt={lead.title}
                className="max-w-[250px]"
              />
              <span className="text-[1.2rem] md:text-[1.4rem] font-bold">
                {lead.title}
              </span>
              <Link href={lead.link} className="self-start">See Profile</Link>
            </div>
          ))}
      </div>
      <h1 className="text-center mt-10 text-xl md:text-3xl text-green-700">Session : 2022-23</h1>
      <div className="flex flex-col md:flex-row justify-center items-center my-5 sm:my-8 md:my-10 gap-8 md:gap-20">
        {incharges
          .filter((lead) => lead.tenure === "2022-23")
          .map((lead, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-4  bg-slate-800/[0.8] rounded"
            >
              <Image
                src={lead.img}
                alt={lead.title}
                className="max-w-[250px]"
              />
              <span className="text-[1.2rem] md:text-[1.4rem] font-bold">
                {lead.title}
              </span>
              <Link href={lead.link} className="self-start">See Profile</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;