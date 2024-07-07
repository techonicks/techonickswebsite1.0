"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

const MemberAvatar = ({ img }: { img: StaticImageData }) => {
  return (
    <div className="min-h-[60vh] flex items-center flex-col sm:flex-row py-6 justify-between gap-4">
      <div className="">
        <Image
          src={img}
          alt="img"
          className="max-w-64"
          priority
          placeholder="blur"
        />
      </div>

      <h1>Test</h1>
    </div>
  );
};

export default MemberAvatar;
