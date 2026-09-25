import JobItem from "./JobItem";
import "./JobList.css";

const JobList = ({ jobs = [], onDeleteJob, onUpdateJob }) => {
  //error handling if jobs is undefined because parent component calls JobList without jobs prop for example: assign jobs prop to an empty array
  //error handling if jobs doesn't exist or is empty: see if statement below
  //FYI I can set onDeleteJob to a function if I don't use the error handling in Job Item (ie onDeleteJob = ()=>{})
  if (!jobs || jobs.length === 0) {
    return <p className="no-jobs">No jobs available.</p>;
  }
  return (
    <div className="job-list">
      {/*map through jobs and render JobItem components*/}
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          onDeleteJob={onDeleteJob}
          onUpdateJob={onUpdateJob}
        />
      ))}
    </div>
  );
};

export default JobList;
