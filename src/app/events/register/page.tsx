import { getEventByName } from '@/app/_actions/getEvents/action'
import EventRegistrationForm from '@/components/Registration/RegistrationForm'
import React from 'react'

const page = async() => {
  return (
    <main className='mt-[120px] min-h-[75vh] py-8 px-4 sm:px-6 md:px-10 lg:px-20'>
        <h1 className='text-2xl md:text-4xl'>Registration of Followings events are going on</h1>
        <div className='my-3'>
            <EventRegistrationForm eventFormProps={{
                eventName : "TECHNOVISTA",
                eventStartDate : "2025-01-29",
                eventEndDate : "2025-02-01",
                participantBranch : "",
                participantContactNumber : "",
                participantEmail : "",
                participantName : "",
                participantRollNumber : "",
                eventDescription : "",
                eventLocation : "",
                subEvents : ["Code-A-thon (COMBAT2.0)","Tech Quiz (COMBAT2.0)","Circuit Quest (DESIGNVERSE)","CarftyCard (DESIGNVERSE)","DEV-DRAW 2.0"],
                participantYear : "",
            }}/>
        </div>
    </main>
  )
}

export default page