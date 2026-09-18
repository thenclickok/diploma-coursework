import TicketInfo from "./TicketInfo";
import completedImage from "../images/completed.svg";
import inProgressImage from "../images/in-progress.svg";
import failedImage from "../images/failed.svg";

const StatusBoard = ({ jobs = [] }) => {
  const completedCount = jobs.filter(
    (job) => job.status === "Completed",
  ).length;
  const inProgressCount = jobs.filter((job) => job.status === "Running").length;
  const failedCount = jobs.filter((job) => job.status === "Failed").length;
  return (
    <div className="status-board">
      <TicketInfo
        result="completed"
        image={completedImage}
        count={completedCount}
      >
        <p>Tickets Completed:</p>
      </TicketInfo>

      <TicketInfo
        result="in-progress"
        image={inProgressImage}
        count={inProgressCount}
      >
        <p>Tickets in Progress:</p>
      </TicketInfo>

      <TicketInfo result="failed" image={failedImage} count={failedCount}>
        <p>
          Tickets <br /> Failed:
        </p>
      </TicketInfo>
    </div>
  );
};

export default StatusBoard;
