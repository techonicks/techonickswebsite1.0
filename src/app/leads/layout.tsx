import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="pt-[130px] min-h-[70vh] bg-grid-white/[0.18] relative">
        <div className="absolute top-0 pointer-events-none inset-0 h-full flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_75%,black)] sm:[mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default layout;
