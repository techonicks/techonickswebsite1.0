"use server";

import { EventFetchResponse } from "@/interfaces/api.interface";
import { Event } from "@/interfaces/events.interface";
import dbConnect from "@/lib/db/db.connect";
import Events from "@/models/event.model";
import { DB_NAME } from "@/utils/constants";

export const getEvents = async (): Promise<EventFetchResponse> => {
  try {
    await dbConnect(DB_NAME);
    const events: Event[] = await Events.find({});
    return {
      success: true,
      message: "Events fetched successfully",
      status: "S",
      response: events,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to fetch events",
      status: "F",
    };
  }
};
