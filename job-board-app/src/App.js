import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

function App() {
  const [jobs, setJobs] = useState([
    { id: 1, name: "Email Extractor", status: "Running" },
    { id: 2, name: "Data Analyser", status: "Completed" },
    { id: 3, name: "Report Generator", status: "Running" },
    { id: 4, name: "Stats Compiler", status: "Pending" },
  ]);

  const [showJobs, setShowJobs] = useState(true);

  //form state variables get useState()
  const [name, setName] = useState("");
  /*if i left status empty at start, user might think Running is selected 
  but status is still "" until user actually chooses one 
  (this stops user having trouble submitting a partially empty form)*/
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");

  const addJob = (newJob) => {
    //jobs.some() checks if ID already exists and if it does, user gets alerted
    const idExists = jobs.some((job) => job.id === newJob.id);
    if (idExists) {
      //the boolean idExists is true if jobs.some() is true so NO new job can be made
      alert("This ID is already taken. Please choose a different one");
      return false; /*return false so handleSubmit knows it failed 
      (so it won't wipe the whole form for the user just because the ID is already taken)*/
    }

    setJobs((prevJobs) => [
      ...prevJobs,
      {
        name: newJob.name,
        status: newJob.status,
        id: newJob.id,
      },
    ]);

    return true; /*handleSubmit now knows addJob succeeded 
    and can clear the form for the next user input*/
  };

  const handleToggle = () => {
    setShowJobs((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = addJob({ name, status, id });

    //only reset form if job was added (because success = true)

    if (success) {
      setName("");
      setStatus("");
      setId("");
    }
  };

  return (
    <div className="App">
      <Header />
      <button onClick={handleToggle} className="button">
        {showJobs ? "Hide Jobs" : "Show Jobs"}{" "}
      </button>
      <form onSubmit={handleSubmit} className="new-job-container">
        <h2>Add Job</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" Job Name"
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="" disabled>
            Job Status
          </option>
          <option value="Running">Running</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <input
          type="number"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.valueAsNumber || "")}
          placeholder=" Job ID"
          required
        />

        <button type="submit" className="button">
          Submit New Job
        </button>
      </form>

      <main className="content-container">
        {showJobs && <JobList jobs={jobs} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
