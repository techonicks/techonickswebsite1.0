import devDrawPic from "@/assets/eventPosters/DEV-DRAW.png";
import combatPic from "@/assets/eventPosters/Combat.png";
import comingSoon from '@/assets/coming-soon.jpg'
import combat2 from '@/assets/eventPosters/combat2.jpg'
import roboticsBootcamp from '@/assets/eventPosters/RoboticsBootcamp.jpg';
import inductionProgram2024 from '@/assets/eventPosters/inductionProgram2024.png'



export const pastEvents = [
    {
      type : "past",
      title: "Dev Draw",
      description: (
        "The first-ever DevDraw was a fantastic showcase of talent, creativity, and coding prowess. Participants dived into the challenge, creating visually stunning and highly functional websites with HTML, CSS, and JavaScript. The competition was fierce, but the spirit of innovation and dedication shone through, making the inaugural DevDraw such a success. More exciting iterations of DevDraw to come soon."
      ),
      image: devDrawPic,
      link : 'events/dev-draw'
    },
    {
      type : "past",
      title: "Combat CGEC",
      description: (
        "C-OMBAT 2023 was the first event organized by the First Year students of the 2022–26 batch of Coochbehar Government Engineering College.The competitive event was organized for fellow first year students, including first-time coders, based exclusively on C programming language, to provide them with a level playing ground to allow them to showcase their logical skills, irrespective of their past associations with coding at the school level, which is usually based on Python or Java." 
      ),
      image: combatPic,
      link : 'events/combat'
    },
    {
      type : "past",
      title: "Induction Program",
      description: (
        "Induction Program 2024 for newly admitted 1st year students"
      ),
      image: inductionProgram2024,
      link : 'events/induction-program'
    },
    {
      type : "upcoming",
      title : "Combat 2.0",
      description : (
        "Coming Soon"
      ),
      image : combat2,
      link : 'event/combat2'
    },
    {
      type : "ongoing",
      title : "Introduction to Robotics Bootcamp",
      description : (
        'We are excited to announce that Tech-O-Nicks, the Tech Club of CGEC, is organizing a 1 WEEK Hardware Workshop on Introduction to Robotics starting on 19th November. This workshop is designed to help students to learn Robotics and Build Unique Projects.This Workshop Focus on Basic Concepts of robotics, like Basic Electronics, Circuit Design, Microcontroller Programming and building Projects etc.'
      ),
      image : roboticsBootcamp,
      link : 'events/introduction-to-robotics-bootcamp'
    }
  ];