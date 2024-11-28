"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BottomGradient, LabelInputContainer } from "../Join/JoinUsForm";
import { Label } from "../ui/label";
import { Input, Select } from "../ui/input";
import { FileUpload } from "../ui/file-upload";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  Swal.fire({
    title: "Warning",
    text: "Register and Login pages are under development",
    icon: "warning",
  })

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
              name="name"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="example@gmail.com"
              type="email"
              name="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="example@gmail.com"
              type="password"
              name="password"
            />
          </LabelInputContainer>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="department">Department</Label>
              <Select id="department">
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
              <Select id="year">
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
            <Select id="role">
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
