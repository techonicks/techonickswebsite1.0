import HeroSection  from "@/components/Home/HeroSection";
import EventSection from "@/components/Home/EventSection";
import MovingCardSection from "@/components/Home/MovingCardSection";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


export default function Home() {
  return (
    <main className="pt-[120px]">
      <Navbar/>
      <HeroSection/>
      <EventSection/>
      <MovingCardSection/>
      <Footer/>
    </main>
  );
}
