import React, { useState } from "react";

const AdvancedJobCounter = () => {
  const [environment, setEnvironment] = useState("Production");
  const [jobCount, updateJobCount] = useState(0);

  const toggleEnvironment = () => {
    setEnvironment((prevEnv) =>
      prevEnv === "Production" ? "UAT" : "Production",
    );
  };

  const handleAddJob = () => {
    updateJobCount((prevCount) => prevCount + 1);
    console.log(`Jobs: ${jobCount + 1}`);
  };

  const handleRemoveJob = () => {
    if (jobCount > 0) {
      updateJobCount((prevCount) => prevCount - 1);
      console.log(`Jobs: ${jobCount - 1}`);
    }
  };

  const handleResetJobs = () => {
    updateJobCount((jobCount) => 0);
    console.log("Jobs: 0");
  };

  let jobMessage = "";
  if (jobCount === 0) {
    jobMessage = "No jobs available.";
  } else if (jobCount >= 1 && jobCount <= 5) {
    jobMessage = "Few jobs available.";
  } else {
    jobMessage = "Many jobs available.";
  }

  return (
    <div className="advanced-job-counter">
      <h1>
        Advanced <br /> Job Counter
      </h1>
      <h2>{environment} Environment</h2>
      <button className="enviro-button" onClick={toggleEnvironment}>
        Switch to {environment === "Production" ? "UAT" : "Production"}
      </button>
      <p>{jobMessage}</p>
      <p>Current Jobs: {jobCount}</p>
      <div className="button-group">
        <button onClick={handleAddJob}>Add Job</button>
        <button onClick={handleRemoveJob}>Remove Job</button>
        <button onClick={handleResetJobs}>Reset Job Count</button>
      </div>
    </div>
  );
};

export default AdvancedJobCounter;
