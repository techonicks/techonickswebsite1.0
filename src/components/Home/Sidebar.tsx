import Link from "next/link"
import HoveredText from "./HoveredText"

const Sidebar = ({isOpen,setOpen}:any) => {
  return (
    <div className="fixed top-0 right-0 flex justify-center h-screen w-full sm:w-[75vw] bg-black/[0.5] backdrop-blur-lg z-[20] sm:hidden">
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
              <Link href={"/mission"} className="animate-textGlow" onClick={()=>setOpen(!isOpen)}>
                Mission
              </Link>
            </HoveredText>
          </nav>
    </div>
  )
}

export default Sidebar