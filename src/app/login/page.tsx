import LoginForm from "@/components/login-register/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="mx-4 md:mx-20 gap-4 min-h-screen flex justify-center items-center flex-col-reverse md:flex-row">
      <div className="bg-white/10 h-full w-[300px] sm:w-[400px] rounded">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;