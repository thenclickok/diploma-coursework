import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import StatusBoard from "./components/StatusBoard";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";

// storage key just references the string given to identify the item in local storage
// these variables are outside of App() so they only get instantiated onnce when file loads instead of every single render
const STORAGE_KEY = "jobs_list";
const DEFAULT_JOBS = [
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
    status: "Failed",
    details: "Calculates conversion rates",
  },
];
//statuses below taken out of options elements in the add job form to streamline JSX
const JOB_STATUSES = ["Running", "Completed", "Failed"];

function App() {
  // Get jobs from localStorage, if no localstorage just use default jobs above

  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error("Error reading localStorage:", error);
      }
    }
    return DEFAULT_JOBS;
  });

  //Automatically save to local storage whenever jobs changes (add, delete, update)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  //this variable is for the toggle button to hide/show the jobs list
  const [showJobs, setShowJobs] = useState(true);

  /*these four state variables got combined into one formData state 
  to swap expressions with the handleInputChange function*/
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    id: "",
    details: "",
  });

  //these are for the search form and the To Do List add task
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState([]);

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

  const handleInputChange = (e) => {
    const { name, value, type, valueAsNumber } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? valueAsNumber || "" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = addJob(formData);

    //only reset form if job was added (because success = true)

    if (success) {
      setFormData({
        name: "",
        status: "",
        id: "",
        details: "",
      });
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

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, id: Date.now() }]);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={handleToggle} className="button">
        {showJobs ? "Hide Jobs" : "Show Jobs"}{" "}
      </button>
      <div className="options-container">
        <div className="filter-jobs">
          <h2>
            Filter Jobs <br /> by Name
          </h2>
          <input
            type="text"
            placeholder="Enter Job Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <StatusBoard jobs={jobs} />
        <form onSubmit={handleSubmit} className="new-job-container">
          <h2>Add Job</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder=" Job Name"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
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

            {JOB_STATUSES.map((status) => (
              /*originally, I had three options elements but swapped it out for map() 
              to streamine JSX and I put each options value in an array constant above*/
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="id"
            value={formData.id}
            //valueAsNumber changes the default string into a number so "5" becomes the number 5
            onChange={handleInputChange}
            placeholder=" Job ID"
            required
          />

          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            placeholder="Job Details"
            maxLength={100}
          ></textarea>

          <button type="submit" className="button">
            Submit New Job
          </button>
        </form>
      </div>

      {showJobs && (
        <main className="content-container">
          <JobList
            jobs={filteredJobs}
            onDeleteJob={deleteJob}
            onUpdateJob={updateJob}
          />
        </main>
      )}

      <div className="task-list-container">
        <TaskForm onAddTask={addTask} />
        {/*addTask function added as prop so TaskForm can send data to App.js*/}

        <div className="task-list">
          <h2>My To Do List</h2>
          <ol>
            {tasks.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> - {item.type} ({item.status})
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/*App.js gets the deleteJob function, 
then its JobList gets the onDeleteJob prop which takes the above function.
Then the onDeleteJob prop is passed to the JobList component 
and then to the JobItem component.*/

export default App;
