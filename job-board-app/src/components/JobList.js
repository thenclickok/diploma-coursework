import JobItem from "./JobItem";

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {/*map through jobs and render JobItem components*/}
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
