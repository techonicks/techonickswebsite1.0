import { ProfileEditResponse } from "@/interfaces/api.interface";
import { AUTH_BASE_URL } from "@/utils/constants";
import axios from "axios";

export const handleEditBio = async (bio: string, email: string) => {
  const response = await axios.post(
    AUTH_BASE_URL + "/user/editProfile/editBio",
    {
      description: bio,
      email: email,
    },
    {
      withCredentials: true,
    }
  );
  const data = response.data as ProfileEditResponse;
  return data;
};
