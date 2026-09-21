import { useState } from "react";

const TicketInfo = ({ result, image, count, children, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    /*showDetails is false so "ticket-details" div doesn't 
    show until user clicks a div in the status board like 
    "completed" to make showDetails true*/
    <div
      className={`ticket-info ${result}`}
      onClick={() => setShowDetails(!showDetails)}
    >
      <img src={image} alt={result} width="50" height="50" />
      {children}
      <p className="ticket-count">{count}</p>
      {showDetails && <div className="ticket-details">{details}</div>}
    </div>
  );
};
export default TicketInfo;
