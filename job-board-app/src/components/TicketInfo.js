import { useState, useEffect } from "react";

const TicketInfo = ({ result, image, count, children, details }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    //trigger animation class
    setIsAnimating(true);

    //remove the class after animation runs for 500 milliseconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [count]); /*the count is the second parameter 
    so useEffect/animation runs for any change to count*/

  return (
    /*showDetails is false so "ticket-details" div doesn't 
    show until user clicks a div in the status board like 
    "completed" to make showDetails true*/

    /*the css class "status-pop" will only apply to the 
    div which contains a modified count*/

    <div
      className={`ticket-info ${result} ${isAnimating ? "status-pop" : ""}`}
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
