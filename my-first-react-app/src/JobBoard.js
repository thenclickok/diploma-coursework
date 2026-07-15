const JobBoard = () => {
  const companyName = "Tech Corp";
  const jobCount = 10;

  const getJobMessage = () => {
    switch (true) {
      case jobCount === 0:
        return "No jobs";
      case jobCount >= 1 && jobCount <= 5:
        return `Few jobs to do. Job count is currently: ${jobCount}`;
      case jobCount > 5:
        return `It's getting busy. Job count is currently: ${jobCount}`;
      default:
        return "Job count unknown. Check back later.";
    }
  };

  const expectedJobs = () => {
    const expectedCount = jobCount * 1.5;
    return expectedCount;
  };

  return (
    <div className="JobBoard">
      <h1>{companyName}</h1>
      <p>{getJobMessage()}</p>
      <p>Expected number of jobs next week: {expectedJobs()}</p>
    </div>
  );
};

export default JobBoard;
