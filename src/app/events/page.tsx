import CreateEventForm from "@/components/Events/CreateEventForm";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

const page = () => {
  return (
    <main className="mt-[120px] min-h-[75vh] py-8 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="">
        <Spotlight />
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Create An Event
        </h1>
      </div>
      <div>
        <CreateEventForm />
      </div>
    </main>
  );
};

export default page;
