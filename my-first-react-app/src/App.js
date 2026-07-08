import "./App.css";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import woman1 from "./woman1.jpg";
import man1 from "./man1.jpg";
import woman2 from "./woman2.jpg";

function App() {
  const profiles = [
    {
      image: woman1,
      name: "Jane Doe",
      jobTitle: "Pilot",
      bio: "Jane is a skilled pilot with over 10 years of experience flying commercial aircraft.",
      skills: ["Aviation", "Navigation", "Communication"],
    },
    {
      image: man1,
      name: "Jake Harper",
      jobTitle: "Electrician",
      bio: "Jake is a licensed electrician who specialises in residential and commercial electrical systems.",
      skills: ["Electrical Work", "Troubleshooting", "Safety Protocols"],
    },
    {
      image: woman2,
      name: "Emily Smith",
      jobTitle: "Chef",
      bio: "Emily is a talented chef who has worked in some of the top restaurants in the country.",
      skills: ["Culinary Arts", "Menu Planning", "Food Safety"],
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="profile-cards-container">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            jobTitle={profile.jobTitle}
            bio={profile.bio}
            skills={profile.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
