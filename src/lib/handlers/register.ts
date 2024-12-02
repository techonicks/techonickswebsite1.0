import { UserCreateResponse } from "@/interfaces/api.interface";
import { MemberWithCredentials } from "@/interfaces/member.interface";
import { AUTH_BASE_URL } from "@/utils/constants";
import axios from "axios";

export const register = async (userPayload: MemberWithCredentials) => {
  const response = await axios.post(
    AUTH_BASE_URL + "/user/register",
    userPayload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }
  );

  return response.data as UserCreateResponse;
};
