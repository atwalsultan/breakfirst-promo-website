import { FaLinkedin, FaGithub, FaStackOverflow, FaBehance } from "react-icons/fa";
import PersonalWebsiteIcon from '../../static/personal-website.svg'

const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <div className="member-image-container">
                <img src={member.memberImage} className="member-image" alt="" />       
            </div>
            <h3>{member.memberName}</h3>
            <p>{member.memberRole}</p>

            <div  className="member-social-links">
                {
                    member.memberSocial.map((social, index) => (
                        <a href={social.link} target="_blank" rel="noreferrer" key={index}>
                            { social.icon === "linkedin" && <FaLinkedin />}
                            { social.icon === "github" && <FaGithub />}
                            { social.icon === "stackoverflow" && <FaStackOverflow />}
                            { social.icon === "behance" && <FaBehance /> }
                            { social.icon === "personal" && <img src={PersonalWebsiteIcon} className="personal-website-image" alt="" /> }
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default MemberCard
