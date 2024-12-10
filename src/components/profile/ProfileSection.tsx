"use client";

import editIcon from "@/assets/icons/edit.svg";
import { UserFoundResponse } from "@/interfaces/api.interface";
import { MemberWithCredentials } from "@/interfaces/member.interface";
import { getUserByToken } from "@/lib/fetch/getUser";
import { handleLogOut } from "@/lib/handlers/logout";
import { handleEditBio } from "@/lib/handlers/profileHandlers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, memo, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { TextArea } from "../ui/textarea";
import Edit from "../shared/Edit";
import Link from "next/link";
import bell from "@/assets/icons/bell.svg";
const ProfileSection = () => {
  const [user, setUser] = useState<UserFoundResponse>();
  const [isEditBioOpen, setIsEditBioOpen] = useState<Boolean>(false);
  const [editedUser, setEditedUser] =
    useState<Partial<MemberWithCredentials>>();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserByToken();
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

  const editBio = async () => {
    if (editedUser?.description && editedUser?.description?.length > 500) {
      Swal.fire({
        title: "Character limit exceeded",
        text: "Bio cannot exceed 500 characters",
        icon: "error",
      });
      return;
    }
    try {
      const response = await handleEditBio(
        editedUser?.description!,
        user?.response?.email!
      );
      Swal.fire({
        title: response.success ? "Success" : "Failed",
        text: response.message,
        icon: response.success ? "success" : "error",
      }).then(() => {
        if (response.success) {
          router.refresh();
        }
      });
    } catch (error: any) {
      Swal.fire({
        title: "Something went wrong",
        text: error.message ? error.message : "Failed to edit bio",
        icon: "error",
      });
    }
  };

  const closeBioEditor = () => {
    setIsEditBioOpen(false);
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
          <h2 className="text-xl">
            Role :{" "}
            <span className="text-cyan-500">
              {user?.response?.role.replace(
                user?.response?.role.charAt(0),
                user?.response?.role.charAt(0).toUpperCase()
              )}
            </span>
          </h2>
          <div className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]">
            <div>
              {user?.response?.description !== ""
                ? user?.response?.description
                : "No Bio , Please let us know about yourself"}
            </div>
            <span
              className="flex items-center justify-self-start gap-1 text-[1.09rem] cursor-pointer bg-cyan-400 text-black py-1 px-3 my-1 rounded"
              onClick={() => {
                console.log(isEditBioOpen);
                setIsEditBioOpen((prev) => !prev);
              }}
            >
              <span>{user.response?.description !== "" ? "Edit" : "Set"}</span>
              <Image src={editIcon} alt="editBio" className="w-6" />
            </span>
            {isEditBioOpen && (
              <Edit
                handler={editBio}
                editedUser={editedUser}
                setEditedUser={setEditedUser}
                close={closeBioEditor}
              />
            )}
          </div>
        </div>
      </div>
      {user.response?.role === "incharge" && (
        <div className="mt-6 mb-2 ">
          <Link className="py-3 px-4 bg-yellow-800 rounded-md flex w-[200px] justify-center items-center gap-1 " href={"/events"}>
            Create An Event <Image src={bell} alt="event" className="" />
          </Link>
        </div>
      )}
      <div className="flex-1">{/* Profile Stuffs */}</div>
      <div className="mt-3">
        <button className="bg-cyan-800 px-4 py-3 rounded-md" onClick={logOut}>
          Log out
        </button>
      </div>
    </main>
  );
};

export default memo(ProfileSection);
