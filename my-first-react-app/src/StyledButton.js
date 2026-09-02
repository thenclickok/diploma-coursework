import { useState } from "react";

const StyledButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // I took this styling out of h1 inline css and put it in an object below
  const headingStyle = {
    textAlign: "center",
    color: "orange",
    backgroundColor: "lightblue",
    border: "4px dotted black",
    width: "fit-content",
    margin: "10px auto",
    padding: "5px 10px",
    borderRadius: "10px",
  };

  const changeState = () => {
    setIsDisabled(!isDisabled);
  };

  // The 'e' stands for the event object passed by the browser for either mouseenter (hover) or mouseleave (no-hover)
  const handleHover = (e) => {
    if (e.type === "mouseenter") {
      setIsHovered(true);
    } else if (e.type === "mouseleave") {
      setIsHovered(false);
    }
  };

  return (
    <div className="styled-button">
      <h1
        style={headingStyle}
        /*if I used more than one object (like layoutStyle & visualStyle) I would have to 
         put them in double curly braces AND use spread operator to start each one (like {{...layoutStyle, ...visualStyle}}*/
      >
        I am learning to style buttons in React
      </h1>
      <button
        disabled={isDisabled}
        className={isDisabled ? "clicked-button" : ""}
        style={{
          padding: "10px",
          //change the css dynamically with shorthand if else statement
          backgroundColor: isHovered && !isDisabled ? "#AA336A" : "pink",
          color: isHovered && !isDisabled ? "white" : "darkgreen",
          border: "2px solid black",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "5px 5px 10px black",
          margin: "20px 0",
          transition: "background-color 0.2s ease, color 0.2s ease",
        }}
        onClick={changeState}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        Click to Disable Me
      </button>
    </div>
  );
};

export default StyledButton;
