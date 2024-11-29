"use client";
import { MemberWithCredentials } from "@/interfaces/member.interface";
import { handleRegister } from "@/lib/handlers/register";
import Link from "next/link";
import { useState } from "react";
import { BottomGradient, LabelInputContainer } from "../Join/JoinUsForm";
import { FileUpload } from "../ui/file-upload";
import { Input, Select } from "../ui/input";
import { Label } from "../ui/label";

const RegisterForm = () => {
  const [user, setUser] = useState<MemberWithCredentials>({
    avatar: "",
    name: "",
    email: "",
    password: "",
    year: "",
    department: "",
    role: "",
  });
  const handleFileUpload = (files: File[]) => {
    setUser({ ...user, avatar: files[0] });
  };

  return (
    <form className="w-full p-4">
      <h1 className="text-2xl mb-6">Create Your Profile</h1>
      <div className="w-full flex flex-col md:flex-row gap-3">
        <div className="flex justify-center items-center md:w-[45%] border border-dashed bg-black border-neutral-800 rounded-lg">
          <FileUpload onChange={handleFileUpload} />
        </div>
        <div className="md:w-[55%] ">
          {/* */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Alan Turing"
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </LabelInputContainer>
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
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="department">Department</Label>
              <Select
                id="department"
                value={user.department}
                onChange={(e) =>
                  setUser({ ...user, department: e.target.value })
                }
              >
                <option value="" defaultChecked>
                  Select Department
                </option>
                <option value="CE">CE</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EE">EE</option>
                <option value="ME">ME</option>
              </Select>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="year">Year</Label>
              <Select
                id="year"
                value={user.year}
                onChange={(e) => setUser({ ...user, year: e.target.value })}
              >
                <option value="">Select Year</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
              </Select>
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="role">Role</Label>
            <Select
              id="role"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="">Select Role</option>
              <option value="incharge" disabled>
                Incharge
              </option>
              <option value="core-member" disabled>
                Core Member
              </option>
              <option value="member">Member</option>
            </Select>
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={(e)=>handleRegister(e,user)}
          >
            Register &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-4 h-[1px] w-full" />
          <p className="text-center text-sm text-white">
            Already Registered ?{" "}
            <Link href="/login" className="text-cyan-600">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
