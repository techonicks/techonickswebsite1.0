"use server";

import dbConnect from "@/lib/db/db.connect";
import UserInfo from "@/models/userInfo.model";
import { DB_NAME } from "@/utils/constants";

export const fetchPeople = async () => {
  try {
    await dbConnect(DB_NAME);
    const members = await UserInfo.find({});
    const response = members.map(
      ({ name, role, email, avatar, department, year, description }) => ({
        name,
        role,
        email,
        avatar,
        department,
        year,
        description,
      })
    );
    return {
      success: true,
      status: "S",
      message: "All members retrieved successfully",
      response,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: "F",
      message: "Failed to retrieve members",
    };
  }
};
