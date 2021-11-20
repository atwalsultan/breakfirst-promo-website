import MemberCard from "../cards/MemberCard"

const TeamSection = () => {
    const members = [
        {
            memberName: "Amandeep Kaur",
            memberRole: "User Interface / Exprerience Designer",
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
            memberSocial: [
                {
                    // socialIcon: ,
                    socialLink: ""
                }
            ]
        },
    ]

    return (
        <div className="team-section">
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
