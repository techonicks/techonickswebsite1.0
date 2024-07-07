import { HeroSection } from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import MovingCardSection from "@/components/MovingCardSection";


export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection/>
      <MainContent/>
      <MovingCardSection/>
    </main>
  );
}
