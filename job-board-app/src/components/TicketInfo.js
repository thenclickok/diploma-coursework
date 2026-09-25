import { useState, useEffect, useRef } from "react";
import "./TicketInfo.css";

const TicketInfo = ({ result, image, jobs = [], children }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const count = jobs.length;

  /*useRef here is to prevent animation running on page load
  as I just want animation happening when the count value changes*/
  const prevCountRef = useRef(); // useRef = undefined

  useEffect(() => {
    //skip animation on first page load
    if (prevCountRef.current === undefined) {
      prevCountRef.current = count; //after page load, assign this variable to count
      return;
    }

    //if count changes value, trigger animation class
    if (prevCountRef.current !== count) {
      setIsAnimating(true);
      prevCountRef.current = count; //update the count after animation runs

      //remove the status-pop class after animation runs for 500 milliseconds
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);

      return () => clearTimeout(timer);
    }
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
      <p>{count}</p>

      {/* The hidden details list - paragraph shows if no jobs, list shows if any jobs */}
      {showDetails && (
        <div className="ticket-details">
          {jobs.length === 0 ? (
            <p className="no-data">No tickets to display</p>
          ) : (
            <ul>
              {jobs.map((job) => (
                <li key={job.id}>
                  <strong>ID #{job.id}:</strong> "<i>{job.name}</i>"
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default TicketInfo;
