"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "@/utils/glimpses-of-techonicks";

const MovingCardSection = () => {
  return (
    <div className="h-[30rem] sm:h-[40rem] rounded-md flex flex-col antialiased  bg-black bg-grid-white/[0.09] items-center justify-center relative overflow-hidden mt-20">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
      <h1 className="absolute top-0 text-xl sm:text-3xl font-semibold">
        Glimpses of Tech O Nicks
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default MovingCardSection;
