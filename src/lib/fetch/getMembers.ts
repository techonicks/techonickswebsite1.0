import { UsersFetchResponse } from "@/interfaces/api.interface"
import { MemberWithCredentials } from "@/interfaces/member.interface"
import { AUTH_BASE_URL } from "@/utils/constants"
import axios from "axios"

export const getAllMembers = async()=>{
    const response = await axios.post(AUTH_BASE_URL+"/user/members/getAllMembers",{},{
        withCredentials:true
    })
    const data = response.data as UsersFetchResponse
    return data
}