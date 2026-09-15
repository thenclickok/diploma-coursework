//the onDeleteJob is a prop of JobList
const JobItem = ({ job, onDeleteJob }) => {
  //implement conditional rendering based on job status

  return (
    <div className={`job-item ${job.status}`}>
      <ul>
        <li>
          <b>Name:</b> {job.name}
        </li>
        <li>
          <b>Status:</b> <span>{job.status}</span>
        </li>
        <li>
          <b>ID:</b> {job.id}
        </li>
        <li>
          <b>Details:</b> {job.details}
        </li>
      </ul>
      <button className="button" onClick={() => onDeleteJob(job.id)}>
        Delete Job
      </button>
    </div>
  );
};

export default JobItem;
