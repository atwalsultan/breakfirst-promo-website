import MemberCard from "../cards/MemberCard";
import SultanImage from '../../static/sultan-1.png';
import AbhishekImage from '../../static/abhishek-1.png';
import QiImage from '../../static/qi-1.png';
import AmanImage from '../../static/aman-1.png';
import JasmeetImage from '../../static/jasmeet-1.png';
import YuvrajImage from '../../static/yuv-1.png';

const TeamSection = ({ teamRef }) => {
    const members = [
        {
            memberName: "Amandeep Kaur",
            memberRole: "User Interface / Exprerience Designer",
            memberImage: AmanImage,
            memberSocial: [
                {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/in/amandeep-walia-designer/"
                },
                {
                    icon: "behance",
                    link: "https://www.behance.net/amanwalia"
                },
            ]
        },
        {
            memberName: "Abhishek Sharma",
            memberRole: "Backend / Full Stack Developer",
            memberImage: AbhishekImage,
            memberSocial: [
                {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/in/abhisharma-developer/"
                },
                {
                    icon: "github",
                    link: "https://github.com/abhisheksharma1123"
                },
            ]
        },
        {
            memberName: "Qi Cheng",
            memberRole: "Project Manager & UI / UX Designer",
            memberImage: QiImage,
            memberSocial: [
                {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/in/qi-cheng-designer/"
                },
                {
                    icon: "personal",
                    link: "https://qicq.design/"
                },
            ]
        },
        {
            memberName: "Jasmeet Singh Virdi",
            memberRole: "User Interface / Exprerience Designer",
            memberImage: JasmeetImage,
            memberSocial: [
                {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/in/jasmeet-virdi-277b241b6/"
                },
                {
                    icon: "behance",
                    link: "https://www.behance.net/jasmeetvirdi1"
                },
            ]
        },
        {
            memberName: "Sultan Singh Atwal",
            memberRole: "Frontend / Full Stack Developer",
            memberImage: SultanImage,
            memberSocial: [
                {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/in/sultan-atwal-developer/"
                },
                {
                    icon: "github",
                    link: "https://github.com/atwalsultan"
                },
                {
                    icon: "stackoverflow",
                    link: "https://stackoverflow.com/users/11409321/sultan-singh-atwal"
                }
            ]
        },
        {
            memberName: "Yuvraj Sharma",
            memberRole: "User Interface / Exprerience Designer",
            memberImage: YuvrajImage,
            memberSocial: [
                {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/in/yuvraj-sharma-79636578/"
                },
                {
                    icon: "personal",
                    link: "https://yuv.design/"
                },
            ]
        },
    ]

    return (
        <div className="team-section" ref={ teamRef }>
            <h2>About the team</h2>
            <p>We are Web & Mobile Apps Design & Development students from Langara College, and we finished this project within 13 weeks.</p>
            
            <div className="team-members">
                {
                    members.map((member, index) => (
                        <MemberCard member={member} key={index} />
                    ))
                }
            </div>

            <div className="last-project">
                <p>More by the team:</p>
                <a href="https://www.fuelture.ca/" target="_blank" rel="noreferrer" >
                    <button>Project Fuelture</button>
                </a>
            </div>
        </div>
    )
}

export default TeamSection
