import Link from "next/link";
import Map from "./Map";
import { links } from "@/utils/logo";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="grid grid-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 sm:px-10 py-10 ">
        <div className="flex items-center justify-center w-full">
          <Map />
        </div>
        <div className="flex flex-col justify-center gap-3 text-[0.8rem] m-auto items-start w-full sm:w-auto">
          <Link
            href="/"
            className="hover:animate-textGlow hover:text-slate-300 duration-75 "
          >
            Meet our core team
          </Link>
          <a
            href="https://cgec.org.in"
            className="hover:animate-textGlow hover:text-slate-300 duration-75"
          >
            Coochbehar Government Engineering College
          </a>
          <Link
            href={"/"}
            className="hover:animate-textGlow hover:text-slate-300 duration-75"
          >
            Dummy Link 1
          </Link>
          <Link
            href={"/"}
            className="hover:animate-textGlow hover:text-slate-300 duration-75"
          >
            Dummy Link 2
          </Link>
          <Link
            href={"/"}
            className="hover:animate-textGlow hover:text-slate-300 duration-75"
          >
            Dummy Link 3
          </Link>
        </div>
        <div className="flex items-center gap-6 m-auto">
          {links.map((link, i) => (
            <span key={i} >
              <a href={link.src} className="icon-glow ">
                <Image src={link.logo} alt={link.name} className="max-w-8 overflow-hidden" />
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="text-center py-4 bg-slate-900 text-[0.9rem]">
        &copy; Tech O Nicks 2024 | All right reserved
      </div>
    </>
  );
};

export default Footer;