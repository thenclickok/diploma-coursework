import TicketInfo from "./TicketInfo";
import completedImage from "../images/completed.svg";
import inProgressImage from "../images/in-progress.svg";
import failedImage from "../images/failed.svg";
import "./StatusBoard.css";

const StatusBoard = ({ jobs = [] }) => {
  //filter actual list of jobs for each of the three statuses
  const completedJobs = jobs.filter((job) => job.status === "Completed");
  const inProgressJobs = jobs.filter((job) => job.status === "Running");
  const failedJobs = jobs.filter((job) => job.status === "Failed");

  //render the details list (hidden list in each ticket info commponent)
  const renderDetails = (jobList) => {
    if (jobList.length === 0) {
      return <p className="no-data">No tickets to display</p>;
    }
    return (
      <ul>
        {jobList.map((job) => (
          <li key={job.id}>
            <strong>ID #{job.id}:</strong> "<i>{job.name}</i>"
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="status-board">
      <TicketInfo
        result="completed"
        image={completedImage}
        count={completedJobs.length}
        details={renderDetails(completedJobs)}
      >
        <p>Tickets Completed:</p>
      </TicketInfo>

      <TicketInfo
        result="in-progress"
        image={inProgressImage}
        count={inProgressJobs.length}
        details={renderDetails(inProgressJobs)}
      >
        <p>Tickets in Progress:</p>
      </TicketInfo>

      <TicketInfo
        result="failed"
        image={failedImage}
        count={failedJobs.length}
        details={renderDetails(failedJobs)}
      >
        <p>
          Tickets <br /> Failed:
        </p>
      </TicketInfo>
    </div>
  );
};

export default StatusBoard;
