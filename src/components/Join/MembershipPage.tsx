"use client";

import LoadingContextProvider from "@/context/loadingContext";
import React, { useState } from "react";
import FormSubmitLoader from "../FormSubmitLoader";
import { Spotlight } from "../ui/Spotlight";
import JoinUsForm from "./JoinUsForm";

const MembershipPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleToggleLoading = (loading: boolean): void => {
    setIsLoading(loading);
    console.log(isLoading);
  };

  return (
    <LoadingContextProvider value={{ isLoading, handleToggleLoading }}>
      {isLoading && <FormSubmitLoader />}
      <div
        className={`flex flex-col sm:flex-row justify-center items-center gap-4 relative ${
          isLoading && "opacity-40"
        }`}
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="px-4 flex flex-col justify-around">
          <h2 className="font-bold text-4xl text-neutral-200">
            Become a Member Today!
          </h2>
          <p className="text-[1.2rem] mt-4 max-w-sm  text-neutral-300">
            Embark on an exciting journey of learning, growth, and innovation
            with us. Together, let us push the boundaries of technology and make
            a lasting impact.
          </p>
        </div>
        <JoinUsForm />
      </div>
    </LoadingContextProvider>
  );
};

export default MembershipPage;
