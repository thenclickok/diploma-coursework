import TicketInfo from "./TicketInfo";
import completedImage from "../images/completed.svg";
import inProgressImage from "../images/in-progress.svg";
import failedImage from "../images/failed.svg";
import "./StatusBoard.css";

const StatusBoard = ({ jobs = [] }) => {
  //filter jobs for each status (to make unique jobs prop for each TicketInfo component)
  const completedJobs = jobs.filter((job) => job.status === "Completed");
  const inProgressJobs = jobs.filter((job) => job.status === "Running");
  const failedJobs = jobs.filter((job) => job.status === "Failed");

  return (
    <div className="status-board">
      <TicketInfo
        result="completed"
        image={completedImage}
        jobs={completedJobs}
      >
        <p>Tickets Completed:</p>
      </TicketInfo>

      <TicketInfo
        result="in-progress"
        image={inProgressImage}
        jobs={inProgressJobs}
      >
        <p>Tickets in Progress:</p>
      </TicketInfo>

      <TicketInfo result="failed" image={failedImage} jobs={failedJobs}>
        <p>
          Tickets <br /> Failed:
        </p>
      </TicketInfo>
    </div>
  );
};

export default StatusBoard;
