"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { TextArea } from "../ui/textarea";

const JoinUsForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full rounded-none md:rounded-2xl px-4 md:px-8 shadow-input">
      <form className="my-8" method="POST" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Alan Turing"
            type="text"
            name="Name"
            required
          />
        </LabelInputContainer>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="dept">Department</Label>
            <Input
              id="dept"
              placeholder="Civil Engineering"
              type="text"
              name="Department"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="year">Year</Label>
            <Input id="year" placeholder="1st" type="text" name="Year" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="class@constructor.exe"
            type="email"
            name="Email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="fields">Interested Fields</Label>
          <Input
            id="fields"
            placeholder="Math is hard ? Try DSA"
            type="text"
            name="Interested-Fields"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Why do you want to join ? </Label>
          <TextArea
            // max={40}
            id="message"
            placeholder="I don't know anything !!! Let me in"
            name="Message"
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

        {/* <div className="flex flex-col space-y-4"></div> */}
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default JoinUsForm;
