import MemberProfile from "@/components/Team/MemberProfile";
import { members } from "@/utils/team";

const page = ({ params }: any) => {
  const { id } = params;
  const member = members.filter(member=> member.link === `team/${id}`)[0]
  
  return (
    <>
      <div className="mt-[120px]">
        <MemberProfile member={member} />
      </div>

    </>
  );
};

export default page;
