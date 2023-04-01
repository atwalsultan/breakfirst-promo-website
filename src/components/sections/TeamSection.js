import MemberCard from "../cards/MemberCard";

const TeamSection = ({ teamRef }) => {
  const members = [
    {
      memberName: "Jane Doe",
      memberRole: "User Interface / Exprerience Designer",
      memberSocial: [
        {
          icon: "linkedin",
          link: "",
        },
        {
          icon: "behance",
          link: "",
        },
      ],
    },
    {
      memberName: "John Doe",
      memberRole: "Backend / Full Stack Developer",
      memberSocial: [
        {
          icon: "linkedin",
          link: "",
        },
        {
          icon: "github",
          link: "",
        },
      ],
    },
    {
      memberName: "Jane Doe",
      memberRole: "Project Manager & UI / UX Designer",
      memberSocial: [
        {
          icon: "linkedin",
          link: "",
        },
        {
          icon: "personal",
          link: "",
        },
      ],
    },
    {
      memberName: "John Doe",
      memberRole: "User Interface / Exprerience Designer",
      memberSocial: [
        {
          icon: "linkedin",
          link: "",
        },
        {
          icon: "behance",
          link: "",
        },
      ],
    },
    {
      memberName: "John Doe",
      memberRole: "Frontend / Full Stack Developer",
      memberSocial: [
        {
          icon: "linkedin",
          link: "",
        },
        {
          icon: "github",
          link: "",
        },
        {
          icon: "stackoverflow",
          link: "",
        },
      ],
    },
    {
      memberName: "John Doe",
      memberRole: "User Interface / Exprerience Designer",
      memberSocial: [
        {
          icon: "linkedin",
          link: "",
        },
        {
          icon: "personal",
          link: "",
        },
      ],
    },
  ];

  return (
    <div className="team-section" ref={teamRef}>
      <h2>About the team</h2>
      <p>
        We are Web & Mobile Apps Design & Development students from Langara
        College, and we finished this project within 13 weeks.
      </p>

      <div className="team-members">
        {members.map((member, index) => (
          <MemberCard member={member} key={index} />
        ))}
      </div>

      <div className="last-project">
        <p>More by the team:</p>
        <a href="https://www.fuelture.ca/" target="_blank" rel="noreferrer">
          <button>Project Fuelture</button>
        </a>
      </div>
    </div>
  );
};

export default TeamSection;
