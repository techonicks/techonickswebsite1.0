import { UserFoundResponse } from "@/interfaces/api.interface";
import { AUTH_BASE_URL } from "@/utils/constants";
import axios from "axios";

export const getUserByToken = async () => {
  const response = await axios.post(AUTH_BASE_URL + "/user/profile", {}, {
    withCredentials : true
  });
  const data = response.data as UserFoundResponse
  return data;
};
