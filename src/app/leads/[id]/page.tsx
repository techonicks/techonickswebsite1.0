import MemberProfile from "@/components/Team/MemberProfile";
import { incharges } from "@/utils/incharges";
import React from "react";

const page = ({ params }:any) => {
  const { id } = params;

  const lead = incharges.filter((lead) => lead.link === `leads/${id}`)[0];

  return <div>
    <MemberProfile member={lead}/>
  </div>;
};

export default page;
