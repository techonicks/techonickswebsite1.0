import { getAllMembers } from "@/lib/fetch/getMembers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MemberList = async () => {
  const members = await getAllMembers();
  return (
    <div className="py-4 overflow-x-auto">
      <table className="sm:w-full w-[150vw] border-collapse  border border-gray-300">
        <thead className="w-full">
          <tr className="text-center">
            <th className="border border-gray-300">Avatar</th>
            <th className="border border-gray-300">Name</th>
            <th className="border border-gray-300">Year</th>
            <th className="border border-gray-300">Department</th>
            <th className="border border-gray-300">Role</th>
            <th className="border border-gray-300">See Profile</th>
          </tr>
        </thead>
        <tbody>
          {members.response?.map((member, i) => (
            <tr className="text-center w-full" key={i}>
              <td className="border border-gray-300 w-[60px] p-2">
                <Image
                  src={member.avatar as string}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover aspect-square w-full"
                />
              </td>
              <td className="border border-gray-300 p-2">{member.name}</td>
              <td className="border border-gray-300 p-2">{member.year}</td>
              <td className="border border-gray-300 p-2">
                {member.department}
              </td>
              <td className="border border-gray-300 p-2">
                {member.role.split("").map((char, i) => {
                  if (i == 0) char = char.toUpperCase();
                  return char;
                })}
              </td>
              <td className="border border-gray-300 p-2">
                <Link
                  href={`/members/${member.name
                    .trim()
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  Click
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
