import React from "react";
import { TextArea } from "../ui/textarea";
import { MemberWithCredentials } from "@/interfaces/member.interface";

const Edit = ({
  editedUser,
  handler,
  setEditedUser,
  close,
}: {
  editedUser: Partial<MemberWithCredentials> | undefined;
  handler: () => void;
  setEditedUser: (editedUser: Partial<MemberWithCredentials>) => void;
  close: () => void;
}) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen flex flex-col justify-center items-center backdrop-blur-sm z-50">
      <h1 className="text-xl text-cyan-500 mb-1">Edit Bio</h1>
      <TextArea
        className="border-2 rounded-md px-3 py-2 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[200px] backdrop-blur-md bg-black/90"
        placeholder="There is no bound of learning"
        value={editedUser?.description}
        onChange={(e) =>
          setEditedUser({
            ...editedUser,
            description: e.target.value,
          })
        }
      />
      <div className="flex justify-between w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] items-center">
        <button
          className="bg-yellow-600 text-white px-3 py-2 rounded-md my-1"
          onClick={handler}
        >
          Save
        </button>
        <span
          className={
            editedUser?.description == null ||
            editedUser.description.length <= 500
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {editedUser?.description ? editedUser?.description?.length : 0}/500
        </span>
        <button
          className="bg-red-600 text-white px-3 py-2 rounded-md my-1"
          onClick={close}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Edit;
