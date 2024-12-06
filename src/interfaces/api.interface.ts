import { Event } from "./events.interface"
import { MemberWithCredentials } from "./member.interface"

export interface BaseResponse {
    success : boolean
    status : "F" | "S" | "I" | string
    message : string
}

export interface UserCreateResponse extends BaseResponse {
    response? : MemberWithCredentials
}

export interface LoginPayload{
    email : string
    password : string
}

export interface LoginResponse extends BaseResponse {
    response? : MemberWithCredentials
}

export interface UserFoundResponse extends BaseResponse {
    response? : MemberWithCredentials
}

export interface ProfileEditResponse extends BaseResponse {
    response? : MemberWithCredentials
}

export interface EventFetchResponse extends BaseResponse {
    response? : Event[]
}
