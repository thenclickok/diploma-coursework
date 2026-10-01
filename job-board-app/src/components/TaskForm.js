/* for module 5.1 I used TaskForm instead of JobForm to add component 
to current React page which already has a component for adding jobs*/
import { useState } from "react";
import "./TaskForm.css";

//onAddTask comes from the prop in the TaskForm component in App.js
const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskCategories, setTaskCategories] = useState([]); //array allows multiple categories to be selected
  const [taskStatus, setTaskStatus] = useState("");

  const categoryOptions = ["Code Review", "UI Refinement", "Bug Fixing"];
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
    if (taskCategories === 0) {
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
        <input
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
          aria-label="Select at least one task category"
        >
          {/*for className I needed either .button or .button.active
            so I had to put a template literal around the code identifying 
            which button was clicked*/}
          {categoryOptions.map((category) => {
            const isSelected = taskCategories.includes(category);
            return (
              <button
                key={category}
                type="button"
                className={`button ${isSelected ? "active" : ""}`}
                onClick={() => handleCategoryToggle(category)}
                aria-pressed={isSelected}
              >
                {category}
              </button>
            );
          })}

          {/*this section shows what categories the user has selected*/}
          <div className="category-display">
            <p>
              <b>Selected Categories:</b>
            </p>
            {taskCategories.length > 0 ? (
              taskCategories.map((category) => <p key={category}>{category}</p>)
            ) : (
              <p>None</p>
            )}
          </div>
        </div>

        <select
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
