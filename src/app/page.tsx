import HeroSection  from "@/components/Home/HeroSection";
import EventSection from "@/components/Home/EventSection";
import MovingCardSection from "@/components/Home/MovingCardSection";


export default function Home() {
  return (
    <main className="pt-[120px]">
      <HeroSection/>
      <EventSection/>
      <MovingCardSection/>
    </main>
  );
}
