import HeroSection  from "@/components/Home/HeroSection";
import EventSection from "@/components/Home/EventSection";
import MovingCardSection from "@/components/Home/MovingCardSection";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { getEvents } from "./_actions/getEvents/action";

export default async function Home() {

  let events = await getEvents()

  return (
    <main className="pt-[120px]">
      <Navbar/>
      <HeroSection/>
      <EventSection events={events.response!}/>
      <MovingCardSection/>
      <Footer/>
    </main>
  );
}
