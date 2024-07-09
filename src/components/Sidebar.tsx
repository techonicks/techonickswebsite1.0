import Link from "next/link"
import HoveredText from "./Home/HoveredText"

const Sidebar = ({isOpen,setOpen}:any) => {
  return (
    <div className="fixed top-0 right-0 flex justify-center h-screen w-full sm:w-[75vw] bg-black/[0.5] backdrop-blur-lg z-[20] lg:hidden">
        <nav className="flex gap-4 absolute top-[120px] flex-col px-4">
            <HoveredText>
              <Link href={"/"} className="animate-textGlow" onClick={()=>setOpen(!isOpen)}>
                Home
              </Link>
            </HoveredText>
            <HoveredText>
              <Link href={"/about"} className="animate-textGlow " onClick={()=>setOpen(!isOpen)}>
                About
              </Link>
            </HoveredText>
            <HoveredText>
              <Link href={"/team"} className="animate-textGlow" onClick={()=>setOpen(!isOpen)}>
                Team
              </Link>
            </HoveredText>
            <HoveredText>
              <Link href={"/membership"} className="animate-textGlow" onClick={()=>setOpen(!isOpen)}>
                Join Us
              </Link>
            </HoveredText>
          </nav>
    </div>
  )
}

export default Sidebar