import { createContext } from "react";

export const userContext = createContext({
    user : {},
    changeUser : (user:any) : any => {}
})

const UserContextProvider =  userContext.Provider
export default UserContextProvider