import Image from "next/image";
import React from "react";
import logo from "@/assets/Tech-o-nicks_logo-removebg-preview.png";
import cgecLogo from "@/assets/CGEC.png";
import drPDas from "@/assets/faculty/dr.PalashDas.jpg";
import { Ubuntu } from "next/font/google";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });

const page = () => {
  return (
    <div className="min-h-[60vh] w-full flex-col bg-black bg-grid-white/[0.2]  relative flex justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
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
              <span className="text-purple-600 font-semibold">
                Workshops and Seminars
              </span>{" "}
              : We regularly organize workshops and seminars on the latest
              technologies and trends, featuring industry experts and
              experienced professionals.
            </li>
            <li>
              <span className="text-purple-600 font-semibold">
                Coding Competitions
              </span>{" "}
              : Our club hosts coding competitions that challenge the
              problem-solving skills and coding abilities of our members.
            </li>
            <li>
              <span className="text-purple-600 font-semibold">Hackathons</span>:
              We encourage students to participate in hackathons, both within
              the college and at national levels, to innovate and develop
              practical solutions.
            </li>
            <li>
              <span className="text-purple-600 font-semibold">
                Project Collaborations
              </span>{" "}
              : Members of Tech O Nicks work on collaborative projects that
              address real-life engineering problems, providing hands-on
              experience and learning opportunities.
            </li>
            <li>
              <span className="text-purple-600 font-semibold">
                Guest Lectures
              </span>{" "}
              : Renowned personalities from the tech industry are invited to
              share their knowledge and insights with our students.
            </li>
          </ul>
          <Image
            src={cgecLogo}
            alt="cgecLogo"
            className="sm:max-w-[200px] max-w-[65%] min-w-[250px] flex-1 m-auto"
          />
        </div>
        <div className="py-4 md:py-10 backdrop-blur-sm bg-white/5 px-3 md:px-6 my-2 shadow-[5px_5px_100px_5px_rgba(76,12,66,0.8)]">
          <h1 className="text-2xl md:text-5xl text-center sm:text-start">
            What our faculty advisor says
          </h1>
          <div className="text-2xl my-4 relative z-20 text-center sm:text-start">
            <div>
              <span>Meet</span> <br />{" "}
              <span className="text-cyan-600 my-4">Dr. Palash Das</span> Sir
              <br />
              <span className="my-3 text-xl text-center">HOD , Electronics & Communication Engineering, CGEC</span>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse sm:gap-10 sm:px-8">
            <p className="text-[1.1rem] sm:text-xl relative z-20 my-4">
              Welcome to Tech-O-Nicks, the vibrant technology club of Cooch Behar
              Government Engineering College! We are a multidisciplinary
              community that brings together innovators, thinkers, and
              problem-solvers from all departments to explore, learn, and
              create. At Tech-O-Nicks, we believe in the power of technology to
              transform lives. Our club is a platform where students can engage
              with the latest trends, ideas, and advancements in the tech world.
              We organize regular tech talks, workshops, events, and alumni
              interactions that foster collaboration, creativity, and
              skill-building. Our events are designed to be inclusive,
              interactive, and informative, covering a wide range of topics from
              AI and data science to cybersecurity, coding, and more. We are not
              limited by departmental boundaries, and our members come from
              diverse backgrounds, united by a shared passion for technology.
              Join us to: - Expand your knowledge and skills - Network with
              fellow tech enthusiasts - Showcase your projects and ideas - Learn
              from industry experts and alumni At Tech-O-Nicks, we are shaping the
              future of technology, together. Come be a part of our community
              and let us innovate, create, and inspire!
            </p>
            <Image
              src={drPDas}
              alt="Dr. Palash Das"
              className="sm:max-w-[200px] max-w-[65%] min-w-[250px] flex-1 m-auto rounded-md border-[3px] border-cyan-700 shadow-[10px_10px_100px_23px_rgba(76,12,66,0.8)] self-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
