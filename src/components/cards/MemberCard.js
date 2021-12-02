const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <div>
                <img src={member.memberImage} alt="" />       
            </div>
            <h3>{member.memberName}</h3>
            <p>{member.memberRole}</p>
        </div>
    )
}

export default MemberCard
