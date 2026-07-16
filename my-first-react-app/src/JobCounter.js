import React, { useState } from "react";

const JobCounter = () => {
  const [jobCount, updateJobCount] = useState(0);

  const handleAddJob = () => {
    /*using a prevCount function inside the setter function 
    helps React use freshest state value*/
    updateJobCount((prevCount) => prevCount + 1);
    /*jobCount is delayed and will show old value so I need to
    do jobCount + 1 for the console log*/
    console.log(`Job count: ${jobCount + 1}`);
  };

  return (
    <div className="job-counter">
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
};

export default JobCounter;
