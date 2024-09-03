import Link from "next/link";
import Map from "./Map";
import { links } from "@/utils/logo";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:px-10 py-10 bg-black ">
        <div className="flex items-center justify-center w-full">
          <Map />
        </div>
        <div className="flex flex-col justify-center gap-3 text-[0.9rem] sm:text-[1rem] m-auto items-start w-full sm:w-auto">
          <Link
            href="/team"
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
          <a
            href={"https://techonicks.github.io/MainSite/certificate.html"}
            className="hover:animate-textGlow hover:text-slate-300 duration-75"
          >
            Verify your Certificate
          </a>
          <Link
            href={"/leads"}
            className="hover:animate-textGlow hover:text-slate-300 duration-75"
          >
            Meet the in-charges
          </Link>
          {/* <Link
            href={"/"}
            className="hover:animate-textGlow hover:text-slate-300 duration-75"
          >
            Dummy Link 3
          </Link> */}
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
