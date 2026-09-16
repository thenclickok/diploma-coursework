import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      name: "Email Extractor",
      status: "Running",
      details: "Extracts daily lead emails",
    },
    {
      id: 2,
      name: "Data Analyser",
      status: "Completed",
      details: "Cleans and standardises raw CSV data",
    },
    {
      id: 3,
      name: "Report Generator",
      status: "Running",
      details: "Compiles weekly client PDF report",
    },
    {
      id: 4,
      name: "Stats Compiler",
      status: "Pending",
      details: "Calculates conversion rates",
    },
  ]);

  const [showJobs, setShowJobs] = useState(true);

  //form state variables get useState()
  const [name, setName] = useState("");
  /*if i left status empty at start, user might think Running is selected 
  but status is still "" until user actually chooses one 
  (this stops user having trouble submitting a partially empty form)*/
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [details, setDetails] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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
        details: newJob.details,
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

    const success = addJob({ name, status, id, details });

    //only reset form if job was added (because success = true)

    if (success) {
      setName("");
      setStatus("");
      setId("");
      setDetails("");
    }
  };

  const deleteJob = (id) => {
    setJobs((prevJobs) => {
      return prevJobs.filter((job) => job.id !== id);
    });
  };

  const filteredJobs = jobs.filter((job) => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return true; //if search field is empty return whole jobs array

    return job.name.toLowerCase().includes(query);
  });

  const updateJob = (updatedJob) => {
    //allows user to edit a job
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)),
    );
  };

  return (
    <div className="App">
      <Header />
      <button onClick={handleToggle} className="button">
        {showJobs ? "Hide Jobs" : "Show Jobs"}{" "}
      </button>
      <div className="options-container">
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
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option
              value=""
              disabled
              hidden
              //hidden takes away the Job Status text from options when user clicks dropdown, reduce clutter
            >
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
            //valueAsNumber changes the default string into a number so "5" becomes the number 5
            onChange={(e) => setId(e.target.valueAsNumber || "")}
            placeholder=" Job ID"
            required
          />

          <textarea
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Job Details"
            maxLength={100}
          ></textarea>

          <button type="submit" className="button">
            Submit New Job
          </button>
        </form>
        <div className="filter-jobs">
          <h2>
            Filter Jobs <br /> by Name
          </h2>
          <input
            type="text"
            placeholder="Enter Job Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
      </div>

      <main className="content-container">
        {showJobs && (
          <JobList
            jobs={filteredJobs}
            onDeleteJob={deleteJob}
            onUpdateJob={updateJob}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

/*App.js gets the deleteJob function, 
then its JobList gets the onDeleteJob prop which takes the above function.
Then the onDeleteJob prop is passed to the JobList component 
and then to the JobItem component.*/

export default App;
