"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import devDrawPic from '@/assets/eventPosters/DEV-DRAW.png'



const dummyContent = [
    {
      title: "Dev Draw",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
            incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
            fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
            nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
            occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
            officia sint labore. Tempor consectetur excepteur ut fugiat veniam
            commodo et labore dolore commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia qui
            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
            Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "",
      image:
        devDrawPic,
    },
    {
        title : "Induction Program",
        description : (<p>Coming Soon</p>),
        image : "https://media.istockphoto.com/id/1332167985/photo/coming-soon-neon-sign-the-banner-shining-light-signboard-collection.jpg?s=2048x2048&w=is&k=20&c=U6TntCRXlyi8L9sLXZDUbqZEMgWleMermJYgfkFM6F4="
    }
  ];

const MainContent = () => {
  return (
    <TracingBeam className="px-6">
        <div className="text-center text-2xl sm:text-4xl my-4 sm:my-6 font-semibold relative">Events</div>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
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
  )
}

export default MainContent