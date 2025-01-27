import { getEventByName } from "@/app/_actions/getEvents/action";
import { ParticipantRegistrationResponse } from "@/interfaces/api.interface";
import { ParticipantDetails } from "@/interfaces/events.interface";
import { AUTH_BASE_URL } from "@/utils/constants";
import axios from "axios";

export const registerForEvent = async (
  eventName: string,
  participantDetails: ParticipantDetails
) => {
    const response = await axios.post(AUTH_BASE_URL+"/event/register", {
        eventName,
        ...participantDetails
    })

    return response.data as ParticipantRegistrationResponse
};
