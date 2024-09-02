import { Context, createContext } from "react";

export const LoadingContext = createContext({
    isLoading : false,
    handleToggleLoading : (isLoading : boolean)=>{}
})

const LoadingContextProvider =  LoadingContext.Provider
export default LoadingContextProvider