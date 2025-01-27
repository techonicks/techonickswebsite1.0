"use server";

import {
  EventFetchResponse,
  EventFetchResponseSingle,
} from "@/interfaces/api.interface";
import { Event } from "@/interfaces/events.interface";
import dbConnect from "@/lib/db/db.connect";
import Events from "@/models/event.model";
import { DB_NAME } from "@/utils/constants";

export const getEvents = async (): Promise<EventFetchResponse> => {
  try {
    await dbConnect(DB_NAME);
    const plainEventArray = await Events.find({});
    const events: Event[] = plainEventArray.map((event) => ({
      type: event.type,
      title: event.title,
      description: event.description,
      image: event.image,
      link: event.link,
      date: event.date,
    }));
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

export const getEventByName = async (
  name: string
): Promise<EventFetchResponseSingle> => {
  try {
    await dbConnect(DB_NAME);
    const event = await Events.findOne({ title: name });
    console.log(event);
    if (event) {
      return {
        success: true,
        message: "Event fetched successfully",
        status: "S",
        response: {
          type: event.type,
          title: event.title,
          description: event.description,
          image: event.image,
          link: event.link,
          date: event.date,
        },
      };
    }
    return {
      success: false,
      message: "Event not found",
      status: "F",
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to fetch event",
      status : "F",
    }
  }
}
