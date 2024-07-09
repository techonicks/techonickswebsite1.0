import { HeroSection } from "@/components/Home/HeroSection";
import MainContent from "@/components/Home/MainContent";
import MovingCardSection from "@/components/Home/MovingCardSection";


export default function Home() {
  return (
    <main className="pt-[120px]">
      <HeroSection/>
      <MainContent/>
      <MovingCardSection/>
    </main>
  );
}
