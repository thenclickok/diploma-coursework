const JobItem = ({ job }) => {
  //implement conditional rendering based on job status
  return (
    <div className={`job-item ${job.status}`}>
      <ul>
        <li>Name: {job.name}</li>
        <li>Status: {job.status}</li>
        <li>ID: {job.id}</li>
      </ul>
    </div>
  );
};

export default JobItem;
