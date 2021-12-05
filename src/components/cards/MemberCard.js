import { FaLinkedin, FaGithub, FaStackOverflow, FaBehance } from "react-icons/fa";

const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <div className="member-image">
                <img src={member.memberImage} alt="" />       
            </div>
            <h3>{member.memberName}</h3>
            <p>{member.memberRole}</p>

            <div  className="member-social-links">
                {
                    member.memberSocial.map((social, index) => (
                        <a href={social.link} target="_blank" rel="noreferrer">
                            { social.icon === "linkedin" && <FaLinkedin />}
                            { social.icon === "github" && <FaGithub />}
                            { social.icon === "stackoverflow" && <FaStackOverflow />}
                            {
                                social.icon === "behance" && <FaBehance />
                            }
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default MemberCard
