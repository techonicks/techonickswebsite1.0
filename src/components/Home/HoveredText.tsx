import React from "react"
import { HoverBorderGradient } from "../ui/hover-border-gradient"

const HoveredText = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
      >
       {children}
      </HoverBorderGradient>
    </div>
  )
}

export default HoveredText