"use client";

import LoadingContextProvider from "@/context/loadingContext";
import React, { useState } from "react";
import FormSubmitLoader from "../FormSubmitLoader";

const MembershipPage = ({children}:{children:React.ReactNode}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleToggleLoading = (loading: boolean): void => {
    console.log("Add");
    setIsLoading(loading);

  };


  return (
    <LoadingContextProvider value={{ isLoading , handleToggleLoading }}>
      {
        isLoading && <FormSubmitLoader/>
      }
      <div
        className={`flex flex-col sm:flex-row justify-center items-center gap-4 relative ${
          isLoading && "opacity-40"
        }`}
      >
        {children}
      </div>
    </LoadingContextProvider>
  );
};

export default MembershipPage;
