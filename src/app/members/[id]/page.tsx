import ProfileSection from "@/components/profile/ProfileSection";
import { getAllMembers } from "@/lib/fetch/getMembers";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const members = await getAllMembers();
  const member = members.response?.find((m)=>m.name.trim().toLowerCase().replaceAll(" ","-")===id)
  return (
    <div className="min-h-[80vh] mt-[120px] px-4 sm:px-8 md:px-16 lg:px-32 py-4">
      <ProfileSection member={member}/>
    </div>
  );
};

export default page;
