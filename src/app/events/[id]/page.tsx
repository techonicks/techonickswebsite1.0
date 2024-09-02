import Image from "next/image";
import { pastEvents } from "@/utils/pastEvents";
import React from "react";

const page = ({ params }: any) => {
  const { id } = params;

  const event = pastEvents.filter((event) => event.link === `events/${id}`)[0];

  return (
    <div className="pt-[130px] min-h-[60vh] bg-dot-white/[0.3] relative">
      <div className="absolute top-0 pointer-events-none inset-0 h-full flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_75%,black)] sm:[mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className="px-5 sm:px-8 md:px-16 py-5 flex w-full flex-col items-center">
        <div className="flex flex-col lg:flex-row justify-center w-full items-center md:px-24 gap-4">
          <div className="">
            <Image
              src={event.image}
              alt="dev-draw"
              className="sm:max-w-[400px] max-w-[250px]"
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl md:text-4xl animate-textGlow text-cyan-300 font-bold">
              {event.title}
            </h1>
            <p className="">{event.description}</p>
          </div>
        </div>
        {/* <div className="">Gallery</div> */}
      </div>
    </div>
  );
};

export default page;
