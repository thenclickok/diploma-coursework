const ProfileCard = ({ image, name, jobTitle, bio, skills }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <h3>{jobTitle}</h3>
      <p>{bio}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
