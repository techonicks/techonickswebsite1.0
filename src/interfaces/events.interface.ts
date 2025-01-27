import mongoose from "mongoose";

export interface Event {
  email? : string
  type: "past" | "upcoming" | "ongoing" | ""
  title: string;
  description?: string;
  image: string | File;
  link?: string;
  date? : string
  participants? : ParticipantDetails[]
}

export interface ParticipantDetails {
  participantName : string
  participantEmail : string
  participantYear : "1st" | "2nd" | "3rd" | "4th" | string
  participantBranch : "CSE" | "ECE" | "EE" | "ME" | "CE" | string
  participantRollNumber : string
  participantContactNumber : string
  subEvents? :string[]
}

export interface EventRegistrationFormProps extends ParticipantDetails {
  eventName : string
  eventStartDate : string
  eventEndDate? : string
  eventLocation? : string
  eventDescription? : string
}


