import { BaseResponse } from "@/interfaces/api.interface";
import { AUTH_BASE_URL } from "@/utils/constants";
import axios from "axios";
import { FormEvent } from "react";

export const handleLogOut = async (e: FormEvent) => {
  e.preventDefault();
  const response = await axios.post(
    AUTH_BASE_URL + "/user/logout",
    {},
    {
      withCredentials: true,
    }
  );
  console.log(response);
  return response.data as BaseResponse;
};
