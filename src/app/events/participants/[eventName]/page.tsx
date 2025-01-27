import { getParticipantsByEventName } from "@/app/_actions/getParticipants/actions";
import ParticipantsList from "@/components/Events/ParticipantsList";
import React from "react";

const page = async ({ params }: { params: { eventName: string } }) => {
  const { eventName } = params;
  const participants = await getParticipantsByEventName(
    eventName.trim().replaceAll("-", " ").toUpperCase()
  );
  return (
    <main className="mt-[120px] min-h-[75vh] py-8 px-4 sm:px-6 md:px-10 lg:px-20">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
        {eventName} Participants ({participants.participants?.length?? 0})
      </h1>
      {participants.participants?.length === 0 ? (
        <p className="my-3">No participants found</p>
      ) : (
        <ParticipantsList eventName={eventName} participants={participants.participants!}/>
      )}
    </main>
  );
};

export default page;
