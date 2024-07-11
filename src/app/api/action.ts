"use server"

import dbConnect from "@/lib/db/dbConnect";
import  Student  from "@/models/studentModel";

type StudentData = {
    name : string,
    department : string,
    year : string,
    email : string,
    interestedFields : string,
    whyJoin : string,
    timeStamp : string
}

export const SubmitData = async(data:StudentData)=>{
    try{
        await dbConnect()
        await Student.create(data)
        return {status : "OK",message : "data stored successfully"}
    }
    catch(error){
        console.log(error);
        return {status : "ERROR",message : "Failed to store data"}
    }
}