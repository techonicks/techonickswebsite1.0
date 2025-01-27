import { ParticipantDetails } from "@/interfaces/events.interface"
import dbConnect from "@/lib/db/db.connect"
import Participants from "@/models/eventRegistration.model"
import { DB_NAME } from "@/utils/constants"

export const getParticipantsByEventName = async(eventName : string)=>{
    try {
        await dbConnect(DB_NAME)
        const retrivedData = await Participants.find({eventName:eventName})
        const participants : ParticipantDetails[] = retrivedData.map(participant=>({
            participantName : participant.participantName,
            participantEmail : participant.participantEmail,
            participantYear : participant.participantYear,
            participantBranch : participant.participantBranch,
            participantRollNumber : participant.participantRollNumber,
            participantContactNumber : participant.participantContactNumber,
            subEvents : participant.subEvents
        }))
        return {
            success : true,
            status : "S",
            participants : participants
        }
    } catch (error) {
        return {
            success : false,
            status : "F",
            message : "Failed to fetch participants"
        }
    }
}