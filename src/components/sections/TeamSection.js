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
                    // socialIcon: ,
                    socialLink: ""
                }
            ]
        },
        {
            memberName: "Abhishek Sharma",
            memberRole: "Full Stack Developer",
            memberImage: AbhishekImage,
            memberSocial: [
                {
                    // socialIcon: ,
                    socialLink: ""
                }
            ]
        },
        {
            memberName: "Qi Cheng",
            memberRole: "User Interface / Exprerience Designer",
            memberImage: QiImage,
            memberSocial: [
                {
                    // socialIcon: ,
                    socialLink: ""
                }
            ]
        },
        {
            memberName: "Jasmeet Singh Virdi",
            memberRole: "User Interface / Exprerience Designer",
            memberImage: JasmeetImage,
            memberSocial: [
                {
                    // socialIcon: ,
                    socialLink: ""
                }
            ]
        },
        {
            memberName: "Sultan Singh Atwal",
            memberRole: "Full Stack Developer",
            memberImage: SultanImage,
            memberSocial: [
                {
                    // socialIcon: ,
                    socialLink: ""
                }
            ]
        },
        {
            memberName: "Yuvraj Sharma",
            memberRole: "User Interface / Exprerience Designer",
            memberImage: YuvrajImage,
            memberSocial: [
                {
                    // socialIcon: ,
                    socialLink: ""
                }
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
        </div>
    )
}

export default TeamSection
