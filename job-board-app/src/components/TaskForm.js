/* for module 5.1 I used TaskForm instead of JobForm to add component 
to current React page which already has a component for adding jobs*/
import { useState } from "react";

//onAddTask comes from the prop in the TaskForm component in App.js
const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //alert if form submitted without a category selected
    if (!taskType) {
      alert("Please select a task category.");
      return;
    }

    console.log("Submitted Task Data:", {
      name: taskName,
      type: taskType,
      status: taskStatus,
    });

    /*by putting if(onAddTask), it prevents an error if 
    I forget to put the onAddTask as a prop in a TaskForm component
    because that would make onAddTask undefined and page would crash)*/
    if (onAddTask) {
      onAddTask({
        name: taskName,
        type: taskType,
        status: taskStatus,
      });
    }

    //reset inputs
    setTaskName("");
    setTaskType("");
    setTaskStatus("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <h2>
          To Do List: <br /> Add Task
        </h2>
        <input
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          className="task-input"
          placeholder="Enter a new task"
          aria-label="Enter task name"
          required
        />
        <div className="button-group" aria-label="Enter task category">
          <button
            type="button"
            /*for className I needed either .button or .button.active
            so I had to put a template literal around the code identifying 
            which button was clicked*/
            className={`button ${taskType === "Code Review" ? "active" : ""}`}
            onClick={() => setTaskType("Code Review")}
          >
            Code Review
          </button>
          <button
            type="button"
            className={`button ${taskType === "UI Refinement" ? "active" : ""}`}
            onClick={() => setTaskType("UI Refinement")}
          >
            UI Refinement
          </button>
          <button
            type="button"
            className={`button ${taskType === "Bug Fixing" ? "active" : ""}`}
            onClick={() => setTaskType("Bug Fixing")}
          >
            Bug Fixing
          </button>
        </div>
        <select
          className="task-status"
          value={taskStatus}
          onChange={(e) => {
            setTaskStatus(e.target.value);
          }}
          aria-label="Enter task status"
          required
        >
          <option
            value=""
            disabled
            hidden
            //hidden takes away the Job Status text from options when user clicks dropdown, reduce clutter
          >
            Select Task Status
          </option>
          <option value="started">Task Started</option>
          <option value="in-progress">Task In-Progress</option>
          <option value="completed">Task Completed</option>
          <option value="paused">Task Paused</option>
        </select>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
