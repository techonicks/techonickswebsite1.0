"use client";

import Image from "next/image";
import image from "@/assets/Tech-o-nicks_logo-removebg-preview.png";
import { Cairo, Poppins } from "next/font/google";
import Link from "next/link";
import HoveredText from "./Home/HoveredText";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Sidebar from "./Home/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: "800" });
const cairo = Cairo({ subsets: ["latin"], weight: "800" });

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="w-screen flex justify-center items-center fixed top-0 z-40 backdrop-blur-md py-2">
        <header className="px-2 w-[90%] sm:px-10 flex items-center sm:justify-between justify-center">
          <div className="flex items-center sm:gap-4 gap-2">
            <Link href="/">
              <Image src={image} alt="Logo" className="max-w-24" />
            </Link>
            <h1
              className={`${cairo.className} text-xl sm:text-3xl animate-textGlow`}
            >
              TECH O NICKS
            </h1>
          </div>
          <nav className="md:flex gap-4 hidden">
            <HoveredText>
              <Link href={"/"} className="animate-textGlow">
                Home
              </Link>
            </HoveredText>
            <HoveredText>
              <Link href={"/about"} className="animate-textGlow">
                About
              </Link>
            </HoveredText>
            <HoveredText>
              <Link href={"/team"} className="animate-textGlow">
                Team
              </Link>
            </HoveredText>
            <HoveredText>
              <Link href={"/mission"} className="animate-textGlow">
                Mission
              </Link>
            </HoveredText>
          </nav>
        </header>
        <div className="md:hidden px-2">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={() => {
              setOpen(!isOpen);
            }}
          />
        </div>
      </div>
      {isOpen && <Sidebar isOpen={isOpen} setOpen={setOpen}/>}
    </>
  );
};

export default Navbar;
