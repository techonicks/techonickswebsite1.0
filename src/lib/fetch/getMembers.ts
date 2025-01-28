import { UsersFetchResponse } from "@/interfaces/api.interface"
import { AUTH_BASE_URL } from "@/utils/constants"
import axios from "axios"

export const getAllMembers = async()=>{
    const response = await axios.post(AUTH_BASE_URL+"/user/members/getAllMembers")
    const data = response.data as UsersFetchResponse
    return data
}