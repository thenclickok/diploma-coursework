/* for module 5.1 I used TaskForm instead of JobForm to add component 
to current React page which already has a component for adding jobs*/
import { useState } from "react";
import "./TaskForm.css";

//onAddTask comes from the prop in the TaskForm component in TaskManager.js
const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskCategories, setTaskCategories] = useState([]); //array allows multiple categories to be selected
  const [taskStatus, setTaskStatus] = useState("");

  const categoryOptions = ["Code Review", "UI Refinement", "Bug Fixing"];

  //dynamic inline CSS for buttons in task category selected by user
  const categoryStyles = {
    "Code Review": { backgroundColor: "mediumorchid" },
    "UI Refinement": { backgroundColor: "violet" },
    "Bug Fixing": { backgroundColor: "plum" },
    default: { backgroundColor: "rgb(250, 250, 109)" },
  };

  const statusOptions = [
    { value: "started", label: "Task Started" },
    { value: "in-progress", label: "Task In-Progress" },
    { value: "completed", label: "Task Completed" },
    { value: "paused", label: "Task Paused" },
  ];

  const handleCategoryToggle = (category) => {
    setTaskCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    ); //deselect: if category is included in prev TaskCategories array, filter it out;
    //select: if category is not included, add category to TaskCategories array
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //alert if form submitted without a category selected
    if (taskCategories.length === 0) {
      alert("Please select at least one task category.");
      return;
    }

    const newTask = {
      name: taskName,
      categories: taskCategories,
      status: taskStatus,
    };

    console.log("Submitted Task Data:", newTask);

    /*by putting if(onAddTask), it prevents an error if 
    I forget to put the onAddTask as a prop in a TaskForm component
    because that would make onAddTask undefined and page would crash)*/
    if (onAddTask) {
      onAddTask(newTask);
    }

    //reset inputs
    setTaskName("");
    setTaskCategories([]);
    setTaskStatus("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <h2>To Do List: </h2>
        <h3>Add Task</h3>
        <label htmlFor="task-name-input">Enter Task Name:</label>
        <input
          id="task-name-input"
          type="text"
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          placeholder="Enter a new task"
          aria-label="Enter task name"
          required
        />

        <div
          className="button-group"
          role="group"
          //screen readers ignore aria-label on generic div (role="group" is announced when user tabs into cluster)
          aria-label="Select at least one task category"
        >
          <h4>Select at least one category:</h4>

          {categoryOptions.map((category) => {
            const isSelected = taskCategories.includes(category);

            return (
              <button
                key={category}
                type="button"
                className="button"
                style={
                  isSelected ? categoryStyles[category] : categoryStyles.default
                }
                onClick={() => handleCategoryToggle(category)}
                aria-pressed={isSelected}
              >
                {category}
              </button>
            );
          })}

          {/*this section shows what categories the user has selected and uses aria to 
          wait until selection is made before summarising the selections*/}
          <div
            className="category-display"
            aria-live="polite"
            aria-atomic="true"
          >
            <p>
              <b>Selected Categories:</b>
            </p>
            {taskCategories.length > 0 ? (
              taskCategories.map((category) => <p key={category}>{category}</p>)
            ) : (
              <p>None</p>
            )}

            {taskCategories.length > 0 && (
              <button
                className="clear-button"
                type="button"
                onClick={() => setTaskCategories([])}
              >
                Clear Categories
              </button>
            )}
          </div>
        </div>

        <label htmlFor="task-status-select">Enter Task Status:</label>
        <select
          id="task-status-select"
          value={taskStatus}
          onChange={(e) => {
            setTaskStatus(e.target.value);
          }}
          aria-label="Enter task status"
          required
        >
          <option value="" disabled hidden>
            {/*hidden takes away the Job Status text from options when user clicks dropdown, reduce clutter*/}
            Select Task Status
          </option>

          {statusOptions.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
