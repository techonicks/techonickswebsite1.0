import Swal from "sweetalert2"

interface Student{
    name : String,
    department : String,
    year : String,
    email : String,
    interestedFields : String,
    whyJoin : String,
    timeStamp? : string 
}


export const formValidator  = (student : Student)=>{
    if(student.name===""){
        Swal.fire({
            title: 'Enter a valid Name',
            width : 400,
            icon: 'warning',
            timer: 1500, 
            timerProgressBar: true, 
            showConfirmButton: false, 
            background : '#474c4f',
            color : 'cyan'
        })
        return false
    }
    if(student.department===""){
        Swal.fire({
            title: 'Enter a valid Department',
            width : 400,
            icon: 'warning',
            timer: 1500, 
            timerProgressBar: true, 
            showConfirmButton: false, 
            background : '#474c4f',
            color : 'cyan'
        })
        return false
    }
    if(student.year===""){
        Swal.fire({
            title: 'Enter a valid Year',
            width : 400,
            icon: 'warning',
            timer: 1500, 
            timerProgressBar: true, 
            showConfirmButton: false, 
            background : '#474c4f',
            color : 'cyan'
        })
        return false
    }
    if(!(student.email.includes('@') && student.email.includes('.'))){
        Swal.fire({
            title: 'Enter a valid Email',
            width : 400,
            icon: 'warning',
            timer: 1500, 
            timerProgressBar: true, 
            showConfirmButton: false, 
            background : '#474c4f',
            color : 'cyan'
        })
        return false
    }
    if(student.interestedFields===""){
        Swal.fire({
            title: 'Enter Interested fields',
            width : 400,
            icon: 'warning',
            timer: 2500, 
            timerProgressBar: true, 
            showConfirmButton: false, 
            background : '#474c4f',
            color : 'cyan'
        })
        return false
    }
    if(student.whyJoin===""){
        Swal.fire({
            title: 'Enter some words why you want to join',
            width : 400,
            icon: 'warning',
            timer: 2500, 
            timerProgressBar: true, 
            showConfirmButton: false, 
            background : '#474c4f',
            color : 'cyan'
        })
        return false
    }
    return true
}