import mongoose from "mongoose"


const studentSchema = new mongoose.Schema({
    name : String,
    department : String,
    year : String,
    email : String,
    interestedFields : String,
    whyJoin : String,
    timeStamp : String
})

const Student = mongoose.models.student || mongoose.model("student",studentSchema)

export default Student