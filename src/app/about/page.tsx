import Image from "next/image";
import React from "react";
import logo from "@/assets/Tech-o-nicks_logo-removebg-preview.png";
import cgecLogo from '@/assets/CGEC.png'
import { Ubuntu } from "next/font/google";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });

const page = () => {
  return (
    <div className="min-h-[60vh] w-full flex-col dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
      <div className="w-full px-6 py-6 sm:px-20 md:px-20 flex flex-col">
        <div className="flex items-center justify-evenly flex-col min-[1060px]:flex-row px-2 sm:px-10">
          <Image
            src={logo}
            alt="logo"
            className="sm:max-w-[200px] max-w-[65%] min-w-[250px] flex-1"
            priority
          ></Image>
          <div>
            <h1 className="text-2xl md:text-5xl">
              About{" "}
              <span
                className={`text-green-500 font-semibold ${ubuntu.className}`}
              >
                TECH O NICKS
              </span>
            </h1>
            <div className="text-wrap mt-4 text-[1.2rem] sm:text-2xl">
              <TextGenerateEffect words="Welcome to Tech O Nicks, the premier tech club of Coochbehar Government Engineering College (CGEC), located in Harinchawra, Coochbehar, West Bengal. Our club serves as the main hub for technical activities on campus, fostering a vibrant community of tech enthusiasts and innovators." />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6  py-6 sm:px-20 md:px-20 flex flex-col">
        <h1 className="text-2xl md:text-5xl">What We Do</h1>
        <div className="text-wrap mt-1 sm:mt-4 text-[1.2rem] sm:text-2xl">
          <TextGenerateEffect words="Tech O Nicks offers a plethora of activities and events designed to ignite the passion for technology among our members. These include:" />
        </div>
        <div className=" flex flex-col gap-6 md:flex-row mt-2 sm:mt-8">
          <ul className="flex flex-col gap-4 text-[1.1rem] sm:text-xl">
            <li>
              <span className="text-purple-600 font-semibold">Workshops and Seminars</span> : We regularly organize workshops and
              seminars on the latest technologies and trends, featuring industry
              experts and experienced professionals.
            </li>
            <li>
              <span className="text-purple-600 font-semibold">Coding Competitions</span> : Our club hosts coding competitions that
              challenge the problem-solving skills and coding abilities of our
              members.
            </li>
            <li>
              <span className="text-purple-600 font-semibold">Hackathons</span>: We encourage students to participate in hackathons,
              both within the college and at national levels, to innovate and
              develop practical solutions.
            </li>
            <li>
              <span className="text-purple-600 font-semibold">Project Collaborations</span> : Members of Tech O Nicks work on
              collaborative projects that address real-life engineering
              problems, providing hands-on experience and learning
              opportunities.
            </li>
            <li>
              <span className="text-purple-600 font-semibold">Guest Lectures</span> : Renowned personalities from the tech industry are
              invited to share their knowledge and insights with our students.
            </li>
          </ul>
          <Image src={cgecLogo} alt="cgecLogo" className="sm:max-w-[200px] max-w-[65%] min-w-[250px] flex-1 m-auto"/>
        </div>
        
      </div>
    </div>
  );
};

export default page;
