const JobItem = ({ job }) => {
  //implement conditional rendering based on job status
  return <div className={`job-item ${job.status}`}></div>;
};

export default JobItem;
