"use client";

import { UserFoundResponse } from "@/interfaces/api.interface";
import { Event } from "@/interfaces/events.interface";
import { getUserByToken } from "@/lib/fetch/getUser";
import { handleCreateEvent } from "@/lib/handlers/profileHandlers";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BottomGradient, LabelInputContainer } from "../Join/JoinUsForm";
import { FileUpload } from "../ui/file-upload";
import { Input, Select } from "../ui/input";
import { Label } from "../ui/label";
import { TextArea } from "../ui/textarea";

const CreateEventForm = () => {
  const router = useRouter();

  const [user, setUser] = useState<UserFoundResponse>();
  const [event, setEvent] = useState<Event>({
    email: "",
    image: "",
    title: "",
    description: "",
    date: "",
    type: "ongoing",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getUserByToken();
        
        if (!user.success) {
          Swal.fire({
            title: "Log in first",
            icon: "warning",
          });
          router.push("/login");
        } else {
          setUser(user);
          setEvent({...event,email:user.response?.email})
        }
        if (user.response?.role !== "incharge") {
          Swal.fire({
            title: "Unauthorized Access",
            text: "Only incharge users can create events",
            icon: "error",
            confirmButtonText: "Go to Homepage",
          });
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  

  const handleImageChange = (files: File[]) => {
    setEvent({ ...event, image: files[0] });
  };

  const createEvent = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await handleCreateEvent(event);
      if (response.success) {
        Swal.fire({
          title: "Event Created Successfully",
          icon: "success",
          confirmButtonText: "Go to Event Details",
        }).then(() => {
          router.push(`${response.response?.link}`);
        });
      } else {
        Swal.fire({
          title: "Failed to Create Event",
          text: response.message,
          icon: "error",
        });
      }
    } catch (error: any) {
      Swal.fire({
        title: "An Error Occurred",
        text: error.message ? error.message : "Failed to Create Event",
        icon: "error",
      });
    }
  };

  return (
    <form className="w-full py-4">
      <h1 className="text-2xl mb-6">
        {user?.response?.name} is Creating an Event
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-3">
        <div className="flex justify-center items-center md:w-[45%] border border-dashed bg-black border-neutral-800 rounded-lg">
          <FileUpload onChange={handleImageChange} />
        </div>
        <div className="md:w-[55%] ">
          {/* */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              placeholder="Computer Aided Design"
              type="text"
              value={event.title}
              onChange={(e) => setEvent({ ...event, title: e.target.value })}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="status">Event Status</Label>
            <Select
              id="status"
              value={event.type}
              onChange={(e) =>
                setEvent({
                  ...event,
                  type: e.target.value as "" | "ongoing" | "upcoming" | "past",
                })
              }
            >
              <option value="ongoing">Ongoing</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </Select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              placeholder="Let everyone know about this event..."
              type="text"
              value={event.description}
              onChange={(e) =>
                setEvent({ ...event, description: e.target.value })
              }
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="date">Date of the event</Label>
            <Input
              id="date"
              type="datetime-local"
              value={event.date}
              onChange={(e) =>
                setEvent({ ...event, date: e.target.value.toString() })
              }
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={createEvent}
          >
            Create &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-4 h-[1px] w-full" />
        </div>
      </div>
    </form>
  );
};

export default CreateEventForm;
