import { LoginPayload, LoginResponse } from "@/interfaces/api.interface";
import { AUTH_BASE_URL } from "@/utils/constants";
import axios from "axios";
import { FormEvent } from "react";

export const handleLogin = async (e: FormEvent, loginPayload: LoginPayload) => {
  e.preventDefault();
  console.log(loginPayload);
  const response = await axios.post(
    AUTH_BASE_URL + "/user/login",
    // "https://techonicksbackend1-0.vercel.app/api/v1/user/login",
    loginPayload,
    {
        withCredentials : true,
    }
  );

  const data = response.data as LoginResponse
  console.log(data);
};
