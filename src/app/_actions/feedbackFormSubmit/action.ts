"use server"

import { StudentData } from "@/interfaces/studentData.interface";
import dbConnect from "@/lib/db/dbConnect";
import  Student  from "@/models/student.model";


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