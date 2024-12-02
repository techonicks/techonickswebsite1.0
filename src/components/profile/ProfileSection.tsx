"use client";

import { useGetUserByToken } from "@/hooks/getUser.hook";
import { UserFoundResponse } from "@/interfaces/api.interface";
import { handleLogOut } from "@/lib/handlers/logout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, memo, useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProfileSection = () => {
  const [user, setUser] = useState<UserFoundResponse>();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const user = await useGetUserByToken();
      console.log(user);
      if (!user.success) {
        router.push("/login");
      } else {
        setUser(user);
      }
    };
    getUser();
  }, []);

  const logOut = async (e: FormEvent) => {
    try {
      const response = await handleLogOut(e);
      if (response.success) {
        Swal.fire({
          title: response.success ? "Success" : "Failed",
          text: response.message,
          icon: response.success ? "success" : "error",
        }).then(() => {
          router.push("/");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Something went wrong",
        text: "Failed to log out",
        icon: "error",
      });
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col w-full h-full">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className=" rounded-full flex items-center gap-4">
          <Image
            src={user?.response?.avatar as string}
            alt="pic"
            className="object-cover border-white border-2 rounded-full w-[100px] h-[100px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px]"
            priority
            height={500}
            width={500}
          />
          <div className=" text-[0.9rem] gap-4 justify-center flex-1 flex md:hidden">
            <div>
              <h1 className="text-cyan-300">Followers</h1>
              <span>0</span>
            </div>
            <div>
              <h1 className="text-cyan-300">Following</h1>
              <span>0</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-3">
          <div className=" text-xl gap-4 hidden md:flex">
            <div>
              <h1 className="text-cyan-300">Followers</h1>
              <span>0</span>
            </div>
            <div>
              <h1 className="text-cyan-300">Following</h1>
              <span>0</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl text-cyan-500 font-semibold">
            {user?.response?.name}
          </h1>
          <h2 className="text-xl">Role : {user?.response?.role}</h2>
          <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]">
            {user?.response?.description
              ? user?.response?.description
              : "No bio"}
          </p>
        </div>
      </div>
      <div className="flex-1">
        {/* Profile Stuffs */}
      </div>
      <div className="mt-3">
        <button className="bg-cyan-800 px-4 py-3 rounded-md" onClick={logOut}>
          Log out
        </button>
      </div>
    </main>
  );
};

export default memo(ProfileSection);
