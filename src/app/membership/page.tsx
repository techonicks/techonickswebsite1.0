import JoinUsForm from "@/components/Join/JoinUsForm";
import MembershipPage from "@/components/Join/MembershipPage";
import { Spotlight } from "@/components/ui/Spotlight";

const page = () => {
  return (
    <main className="pt-[130px] relative">
    <MembershipPage>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="px-4 flex flex-col justify-around">
        <h2 className="font-bold text-4xl text-neutral-200">
          Become a Member Today!
        </h2>
        <p className="text-[1.2rem] mt-4 max-w-sm  text-neutral-300">
          Embark on an exciting journey of learning, growth, and innovation with
          us. Together, let us push the boundaries of technology and make a
          lasting impact.
        </p>
      </div>
      <JoinUsForm />
    </MembershipPage>
    </main>
  );
};

export default page;
