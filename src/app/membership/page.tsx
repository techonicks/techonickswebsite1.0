import JoinUsForm from "@/components/Join/JoinUsForm";
import { Spotlight } from "@/components/ui/Spotlight";

const page = () => {

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative">
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
          us. Together, let's push the boundaries of technology and make a
          lasting impact.
        </p>
      </div>
      <JoinUsForm />
    </div>
  );
};

export default page;
