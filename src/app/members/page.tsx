import MemberList from "@/components/Members/MemberList"

const page = () => {
  return (
    <main className="mt-[120px] min-h-[80vh] px-4 sm:px-8 md:px-16 lg:px-32 py-4">
      <h1 className="text-4xl font-bold text-cyan-400">Members</h1>
      <p className="text-cyan-400 mt-4">List of all members</p>
      <MemberList />
    </main>
  )
}

export default page