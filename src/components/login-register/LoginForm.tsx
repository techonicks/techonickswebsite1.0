"use client";

import Link from "next/link";
import { BottomGradient, LabelInputContainer } from "../Join/JoinUsForm";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Swal from "sweetalert2";
import { useState } from "react";
import { LoginPayload } from "@/interfaces/api.interface";
import { handleLogin } from "@/lib/handlers/login";

const LoginForm = () => {

  Swal.fire({
    title: "Warning",
    text: "Register and Login pages are under development",
    icon: "warning",
  });

  const [user, setUser] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  return (
    <form className="w-full p-4">
      <h1 className="text-2xl">Login</h1>
      <div className="w-full mt-6">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="example@gmail.com"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="example@gmail.com"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </LabelInputContainer>
      </div>
      <button
        className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
        onClick={(e)=>handleLogin(e,user)}
      >
        Send &rarr;
        <BottomGradient />
      </button>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-4 h-[1px] w-full" />
      <p className="text-center text-sm text-white">
        Did not register yet?{" "}
        <Link href="/register" className="text-cyan-600">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
