import { useState } from "react"; //required for the edit option
import "./JobItem.css";

//the onDeleteJob is a prop of JobList
const JobItem = ({ job, onDeleteJob, onUpdateJob }) => {
  //isEditing state is switched off by default
  const [isEditing, setIsEditing] = useState(false);

  //I need the editing form to show what values already exist before user attempts to change them
  const [name, setName] = useState(job.name);
  const [status, setStatus] = useState(job.status);
  const [details, setDetails] = useState(job.details);

  if (!job) {
    return <div className="job-item">Job data unavailable.</div>;
  }

  //error handling in case onDeleteJob prop from parent is not an actual function
  const handleDelete = () => {
    if (typeof onDeleteJob === "function") {
      //if it is a function, the user click with run the function to delete job using its unique ID
      onDeleteJob(job.id);
    } else {
      console.warn(
        "onDeleteJob is not a function; unable to delete job in JobItem.",
      );
    }
  };

  //switch job to edit mode by switching on setIsEditing
  const handleStartEdit = () => {
    setIsEditing(true);
  };

  //user decides not to edit so all fields go back to original job data values
  const handleCancel = () => {
    setName(job.name);
    setStatus(job.status);
    setDetails(job.details);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (typeof onUpdateJob === "function") {
      onUpdateJob({
        ...job, // preserves original job.id
        name,
        status,
        details,
      });
      setIsEditing(false);
    } else {
      console.warn(
        "onUpdateJob is not a function; unable to save changes in JobItem.",
      );
    }
  };

  // --- EDIT MODE VIEW ---
  if (isEditing) {
    return (
      <div className={`job-item ${status}`}>
        <div className="edit-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Edit Job Name"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Edit Job Status"
          >
            <option value="Running">Running</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            aria-label="Edit Job Details"
          />

          <div>
            <button className="button" onClick={handleSave}>
              Save
            </button>
            <button className="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- STANDARD READ-ONLY VIEW ---
  return (
    //conditional rendering based on job status below (see stylesheet)
    /*toLowerCase() means the className in the stylesheet 
    can be lowercase as per convention*/
    //after job.name etc I have an option to display if the jobs object is type undefined ("Untitled Job")
    <div className={`job-item ${job.status.toLowerCase()}`}>
      <ul>
        <li>
          <b>Name:</b> {job.name || "Untitled Job"}
        </li>
        <li>
          <b>Status:</b> <span>{job.status || "Unknown"}</span>
        </li>
        <li>
          <b>ID:</b> {job.id ?? "N/A"}
        </li>
        <li>
          <b>Details:</b> {job.details}
        </li>
      </ul>
      <button className="button" onClick={handleStartEdit}>
        Edit
      </button>
      <button className="button" onClick={handleDelete}>
        Delete Job
      </button>
    </div>
  );
};

export default JobItem;
