import MemberProfile from '@/components/Team/MemberProfile'
import { members } from '@/utils/team'
import React from 'react'

const page = ({params}:any) => {
    const {id} = params
    const member = members.filter(member => member.link === `core-team-23/${id}`)[0]
  return (
    <div className="mt-[120px]">
        <MemberProfile member={member} />
      </div>
  )
}

export default page