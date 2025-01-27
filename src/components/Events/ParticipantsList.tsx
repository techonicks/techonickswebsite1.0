"use client";

import { ParticipantDetails } from "@/interfaces/events.interface";
import { getUserByToken } from "@/lib/fetch/getUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ParticipantsList = ({
  participants,
  eventName,
}: {
  participants: ParticipantDetails[];
  eventName: string;
}) => {

  const router = useRouter()

  const getUser = async()=>{
    try{
      const user = await getUserByToken()
      if(user.response?.role=="member"){
        Swal.fire({
          title: "You are not authorized to view participants list",
          icon: "warning",
        });
        router.push("/")
      }
    } catch(err){
      Swal.fire({
        title: "Error",
        text: "Failed to fetch user details",
        icon: "error",
      });
      router.push("/")
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="py-4 overflow-x-auto">
      <table className="sm:w-full text-[0.8rem] w-[150vw] border-collapse  border border-gray-300">
        <thead className="w-full">
          <tr className="text-center">
            <th className="border border-gray-300">Name</th>
            <th className="border border-gray-300">Year</th>
            <th className="border border-gray-300">Department</th>
            <th className="border border-gray-300">Roll Number</th>
            <th className="border border-gray-300">Email</th>
            <th className="border border-gray-300">Sub Events</th>
          </tr>
        </thead>
        <tbody>
          {participants?.map((p, i) => (
            <tr className="text-center" key={i}>
              <td className="border border-gray-300 p-2">
                {p.participantName}
              </td>
              <td className="border border-gray-300 p-2">
                {p.participantYear}
              </td>
              <td className="border border-gray-300 p-2">
                {p.participantBranch}
              </td>
              <td className="border border-gray-300 p-2">
                {p.participantRollNumber}
              </td>
              <td className="border border-gray-300 p-2">
                {p.participantEmail}
              </td>
              <td className="border border-gray-300 p-2">
                {p.subEvents?.map((subEvent, j) => (
                  <div key={j}>{subEvent}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantsList;
