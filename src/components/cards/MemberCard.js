const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            {/* <img src={} alt="" />        */}
            <h3>{member.memberName}</h3>
            <p>{member.memberRole}</p>
        </div>
    )
}

export default MemberCard
