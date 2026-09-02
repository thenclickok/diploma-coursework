import { useState } from "react";

const DynamicForm = () => {
  const [userInput, setUserInput] = useState("");
  const [submittedItems, setSubmittedItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  console.log(`Component rendered. Current state: "${userInput}"`);

  const handleInputChange = (event) => {
    console.log("Event handler triggered: typing input.");
    setUserInput(event.target.value);
  };

  const handleReset = () => {
    console.log("Event handler triggered: clicking reset.");
    setUserInput("");
  };

  const handleSubmit = () => {
    const trimmedInput = userInput.trim();

    if (trimmedInput.length < 3) {
      setErrorMessage("Input must be at least 3 characters long!");
      return; //stop execution here so it doesn't submit
    }

    //if it was valid, clear error/add item to list/clear input
    setErrorMessage("");
    setSubmittedItems([...submittedItems, trimmedInput]);
    setUserInput(""); //clear the input after submit
  };

  return (
    <div className="dynamic-form">
      <h1>Dynamic Form</h1>
      <div className="input-submit-div">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div>
        <h2>Current Input:</h2>
        <p className="p-tag">{userInput}</p>
        <h2>Characters used: </h2>
        <p className="p-tag">{userInput.length}</p>
      </div>
      <div>
        <h2>Submitted Items:</h2>
        <ul className="submitted-list">
          {submittedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicForm;
