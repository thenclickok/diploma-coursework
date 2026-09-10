import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

function App() {
  const jobs = [
    { id: 1, name: "Email Extractor", status: "Running" },
    { id: 2, name: "Data Analyser", status: "Completed" },
    { id: 3, name: "Report Generator", status: "Running" },
    { id: 4, name: "Stats Compiler", status: "Pending" },
  ];

  const [showJobs, setShowJobs] = useState(true);

  const handleToggle = () => {
    setShowJobs((prev) => !prev);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={handleToggle} className="toggle-button">
        {showJobs ? "Hide Jobs" : "Show Jobs"}{" "}
      </button>
      <main className="content-container">
        {showJobs && <JobList jobs={jobs} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
