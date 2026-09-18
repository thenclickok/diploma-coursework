import TicketInfo from "./TicketInfo";
import completedImage from "../images/completed.svg";
import inProgressImage from "../images/in-progress.svg";
import failedImage from "../images/failed.svg";

const StatusBoard = () => {
  return (
    <div className="status-board">
      <TicketInfo result="completed" image={completedImage}>
        <p>Tickets Completed</p>
      </TicketInfo>

      <TicketInfo result="in-progress" image={inProgressImage}>
        <p>Tickets in Progress</p>
      </TicketInfo>

      <TicketInfo result="failed" image={failedImage}>
        <p>Tickets Failed</p>
      </TicketInfo>
    </div>
  );
};

export default StatusBoard;
