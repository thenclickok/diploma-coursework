//the onDeleteJob is a prop of JobList
const JobItem = ({ job, onDeleteJob }) => {
  //implement conditional rendering based on job status

  return (
    <div className={`job-item ${job.status}`}>
      <ul>
        <li>Name: {job.name}</li>
        <li>Status: {job.status}</li>
        <li>ID: {job.id}</li>
      </ul>
      <button className="button" onClick={() => onDeleteJob(job.id)}>
        Delete Job
      </button>
    </div>
  );
};

export default JobItem;
