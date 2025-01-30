// interface Links{
//     logo : String,
//     src : String
// }

import discordLogo from '@/assets/icons/discordLogo.svg'
import githubLogo from '@/assets/icons/githubLogo.svg'
import instagramLogo from '@/assets/icons/instagramLogo.svg'
import linkedinLogo from '@/assets/icons/linkedinLogo.svg'
import youtubeLogo from '@/assets/icons/youtubeLogo.svg'
import mail from "@/assets/icons/mail.svg"

export const links = [
    {
        logo:mail,
        src:"techonickscgec23@gmail.com",
        name:"Mail"
    },
    {
        logo:discordLogo,
        src: 'https://discord.gg/MbHfQjZ5Wx',
        name:"Discord"
    },
    {
        logo : githubLogo,
        src: 'https://github.com/techonicks',
        name:"Github"
    },
    {
        logo:instagramLogo,
        src: 'https://www.instagram.com/techonicks/',
        name: "Instagram"
    },
    {
        logo:linkedinLogo,
        src:'https://www.linkedin.com/company/techonicks',
        name : "LinkedIn"
    },
    {
        logo:youtubeLogo,
        src:"https://youtube.com/@techonicks",
        name : "Youtube"
    }
]