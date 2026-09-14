import JobItem from "./JobItem";

const JobList = ({ jobs, onDeleteJob }) => {
  return (
    <div className="job-list">
      {/*map through jobs and render JobItem components*/}
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} onDeleteJob={onDeleteJob} />
      ))}
    </div>
  );
};

export default JobList;
