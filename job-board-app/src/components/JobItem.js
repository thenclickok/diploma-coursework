//the onDeleteJob is a prop of JobList
const JobItem = ({ job, onDeleteJob }) => {
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
      <button className="button" onClick={handleDelete}>
        Delete Job
      </button>
    </div>
  );
};

export default JobItem;
