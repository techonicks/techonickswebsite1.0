import {
  EventCreateResponse,
  ProfileEditResponse,
} from "@/interfaces/api.interface";
import { Event } from "@/interfaces/events.interface";
import { AUTH_BASE_URL } from "@/utils/constants";
import axios from "axios";

export const handleEditBio = async (bio: string, email: string) => {
  const response = await axios.post(
    AUTH_BASE_URL + "/user/profile/editBio",
    {
      description: bio,
      email: email,
    },
    {
      withCredentials: true,
    }
  );
  const data = response.data as ProfileEditResponse;
  return data;
};

export const handleCreateEvent = async (event: Event) => {
  console.log(event);
  
  const response = await axios.post(
    AUTH_BASE_URL + "/user/createEvent",
    {
      email : event.email,
      type: event.type,
      title: event.title,
      description: event.description,
      image: event.image,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  const data = response.data as EventCreateResponse;
  return data;
};
