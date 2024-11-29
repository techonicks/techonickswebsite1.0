import { UserCreateResponse } from "@/interfaces/api.interface";
import { MemberWithCredentials } from "@/interfaces/member.interface";
import { AUTH_BASE_URL } from "@/utils/constants";
import axios from "axios";
import { FormEvent } from "react";
import Swal from "sweetalert2";

export const handleRegister = async (e: FormEvent,userPayload:MemberWithCredentials) => {
    e.preventDefault();
    console.log(userPayload);
    try {
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

      const data = response.data as UserCreateResponse;
      Swal.fire({
        title: data.success ? "Success":"Failed",
        text: data.message,
        icon: data.success ? "success" : "error",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
        background: "#474c4f",
        color: "cyan",
      });
      console.log(data);
    } catch (error: any) {
      Swal.fire({
        title: "Something went wrong",
        text: error.message ? error.message : "failed to create profile",
        icon: "error",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
        background: "#474c4f",
        color: "cyan",
      });
    }
  };