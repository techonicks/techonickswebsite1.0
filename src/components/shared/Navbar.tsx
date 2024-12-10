"use client";

import image from "@/assets/Tech-o-nicks_logo-removebg-preview.png";
import { UserFoundResponse } from "@/interfaces/api.interface";
import { getUserByToken } from "@/lib/fetch/getUser";
import Hamburger from "hamburger-react";
import { Cairo, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import HoveredText from "../Home/HoveredText";
import Sidebar from "./Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: "800" });
const cairo = Cairo({ subsets: ["latin"], weight: "800" });

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState<UserFoundResponse>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getUserByToken();
        if (!user.success) {
          setUser(undefined);
        } else {
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  // Swal.fire({
  //   title: "Welcome!",
  //   text: `Hello ${user?.name}, You are logged in`,
  //   icon: "success",
  //   background: "black",
  //   color: "green",
  // })
  return (
    <>
      <div className="w-screen flex justify-center items-center fixed top-0 z-50 backdrop-blur-md py-2 ">
        <header className="px-2 w-[90%] md:px-10 flex items-center  justify-between">
          <div className="flex items-center sm:gap-4 gap-2">
            <Link href="/">
              <Image src={image} alt="Logo" className="max-w-24" priority />
            </Link>
            <h1
              className={`${cairo.className} text-xl sm:text-3xl animate-textGlow`}
            >
              TECH O NICKS
            </h1>
          </div>
          <nav className="lg:flex gap-4 hidden">
            <Link href={"/"} className="animate-textGlow" prefetch={false}>
              <HoveredText>Home</HoveredText>
            </Link>
            <Link href={"/about"} className="animate-textGlow" prefetch={false}>
              <HoveredText>About</HoveredText>
            </Link>
            <Link href={"/team"} className="animate-textGlow" prefetch={false}>
              <HoveredText>Team</HoveredText>
            </Link>
            <Link
              href={"/membership"}
              className="animate-textGlow"
              prefetch={false}
            >
              <HoveredText>Join Us</HoveredText>
            </Link>
            {user ? (
              <Link
                href={"/profile"}
                className="animate-textGlow"
                prefetch={false}
              >
                <HoveredText>Profile</HoveredText>
              </Link>
            ) : (
              <Link
                href={"/login"}
                className="animate-textGlow"
                prefetch={false}
              >
                <HoveredText>Login</HoveredText>
              </Link>
            )}
          </nav>
        </header>
        <div className="lg:hidden px-2">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={() => {
              setOpen(!isOpen);
            }}
            color="white"
          />
        </div>
      </div>
      {isOpen && <Sidebar user={user} isOpen={isOpen} setOpen={setOpen} />}
    </>
  );
};

export default memo(Navbar);
