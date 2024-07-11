import Link from "next/link";
import HoveredText from "./Home/HoveredText";

const Sidebar = ({ isOpen, setOpen }: any) => {
  return (
    <div className="fixed top-0 right-0 flex justify-center h-screen w-full sm:w-[75vw] bg-black/[0.5] backdrop-blur-lg z-[20] lg:hidden">
      <nav className="flex gap-4 absolute top-[120px] flex-col px-4">
        <Link
          href={"/"}
          className="animate-textGlow"
          prefetch={false}
          onClick={() => setOpen(!isOpen)}
        >
          <HoveredText>Home</HoveredText>
        </Link>
        <Link
          href={"/about"}
          className="animate-textGlow"
          prefetch={false}
          onClick={() => setOpen(!isOpen)}
        >
          <HoveredText>About</HoveredText>
        </Link>
        <Link
          href={"/team"}
          className="animate-textGlow"
          prefetch={false}
          onClick={() => setOpen(!isOpen)}
        >
          <HoveredText>Team</HoveredText>
        </Link>
        <Link
          href={"/membership"}
          className="animate-textGlow"
          prefetch={false}
          onClick={() => setOpen(!isOpen)}
        >
          <HoveredText>Join Us</HoveredText>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;