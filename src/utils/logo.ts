// interface Links{
//     logo : String,
//     src : String
// }

import discordLogo from '@/assets/icons/discordLogo.svg'
import githubLogo from '@/assets/icons/githubLogo.svg'
import instagramLogo from '@/assets/icons/instagramLogo.svg'
import linkedinLogo from '@/assets/icons/linkedinLogo.svg'
import youtubeLogo from '@/assets/icons/youtubeLogo.svg'

export const links = [
    {
        logo:discordLogo,
        src: '/',
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
        src:'https://www.linkedin.com/company/101356130/admin/dashboard/',
        name : "LinkedIn"
    },
    {
        logo:youtubeLogo,
        src:"https://youtube.com/@techonicks?si=my7FU-n1-dRWWp0Q",
        name : "Youtube"
    }
]