"use client";

import {
  EventRegistrationFormProps,
  ParticipantDetails,
} from "@/interfaces/events.interface";
import { MemberWithCredentials } from "@/interfaces/member.interface";
import { getUserByToken } from "@/lib/fetch/getUser";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { LabelInputContainer } from "../Join/JoinUsForm";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { registerForEvent } from "@/lib/handlers/eventRegistration";
import Link from "next/link";

const EventRegistrationForm = ({
  eventFormProps,
}: {
  eventFormProps: EventRegistrationFormProps;
}) => {
  const router = useRouter();

  const [user, setUser] = useState<MemberWithCredentials>();
  const [formInputs, setFormInputs] = useState<ParticipantDetails>({
    participantName: "",
    participantEmail: "",
    participantBranch: "",
    participantYear: "",
    participantRollNumber: "",
    participantContactNumber: "",
    subEvents: [],
  });

  const getUser = async () => {
    try {
      const fetchedUser = await getUserByToken();
      if (!fetchedUser.success) {
        Swal.fire({
          title: "You have to log in first",
          icon: "warning",
        });
        router.push("/login");
      } else if (
        fetchedUser.response?.role! === "incharge" ||
        fetchedUser.response?.role! === "core-member"
      ) {
        Swal.fire({
          title:
            "Core Team Members and Inchrages can not participate in club events",
          icon: "warning",
        });
        router.push("/");
      } else {
        setUser(fetchedUser.response!);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setFormInputs({
        participantName: user.name,
        participantEmail: user.email,
        participantBranch: user.department,
        participantYear: user.year,
        subEvents: [],
        participantRollNumber: "",
        participantContactNumber: "",
      });
    }
  }, [user]);

  useEffect(() => {
    getUser();
  }, []);

  const handleRegisterForEvent = async (e: FormEvent) => {
    e.preventDefault();
    if(!formInputs.subEvents?.length){
      Swal.fire({
        title: "At least one event should be selected",
        icon: "warning",
      });
      return;
    }
    try {
      const response = await registerForEvent(
        eventFormProps.eventName,
        formInputs
      );
      Swal.fire({
        title: response.success? "Success" : "Failed",
        text: response.message,
        icon: response.success? "success" : "warning",
      })
      if(response.success){
        router.push("/")
      }
    } catch (error: any) {
      Swal.fire({
        title: "An Error Occurred",
        text: error.message ? error.message : "Failed to Register",
        icon: "error",
      });
    } 
  };

  return (
    <div className="flex flex-col my-5 gap-3">
      <h1 className="text-xl md:text-3xl text-red-400 font-bold">
        <Link
          href={`/events/${eventFormProps.eventName
            .trim()
            .replaceAll(" ", "-")
            .toLowerCase()}`}
        >
          {eventFormProps.eventName}
        </Link>
      </h1>
      <form className="flex w-full flex-col md:flex-row md:w-[650px] gap-4 self-center">
        <div className="flex md:w-[50%] flex-col">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="participantName">Name</Label>
            <Input
              value={formInputs.participantName}
              id="participantName"
              readOnly
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="participantEmail">Email</Label>
            <Input
              value={formInputs.participantEmail}
              id="participantEmail"
              readOnly
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="participantBranch">Department</Label>
            <Input
              value={formInputs.participantBranch}
              id="participantBranch"
              readOnly
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="participantYear">Year</Label>
            <Input
              value={formInputs.participantYear}
              id="participantYear"
              readOnly
            />
          </LabelInputContainer>
        </div>
        <div className="flex md:w-[50%] flex-col justify-between">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="participantContactNumber">Contact Number</Label>
            <Input
              id="participantContactNumber"
              value={formInputs.participantContactNumber!}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  participantContactNumber: e.target.value,
                })
              }
              required
            />
          </LabelInputContainer>
          <div className="flex flex-col">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="participantRollNumber">Roll Number</Label>
              <Input
                id="participantRollNumber"
                value={formInputs.participantRollNumber!}
                onChange={(e) =>
                  setFormInputs({
                    ...formInputs,
                    participantRollNumber: e.target.value,
                  })
                }
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <span className="text-xl">Participating Events</span>
              {eventFormProps.subEvents?.map((event, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="checkbox"
                    id={i.toString()}
                    value={event}
                    onChange={(e) =>
                      setFormInputs({
                        ...formInputs,
                        subEvents: [...formInputs.subEvents!, e.target.value],
                      })
                    }
                  />
                  <Label htmlFor={i.toString()}>{event}</Label>
                </div>
              ))}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <button
                type="submit"
                className="items-center px-4 py-2 text-white bg-red-400 rounded-md"
                onClick={handleRegisterForEvent}
              >
                Register
              </button>
            </LabelInputContainer>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
