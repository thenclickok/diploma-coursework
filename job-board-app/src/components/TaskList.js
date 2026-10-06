import "./TaskList.css";

const TaskList = ({ tasks, onDeleteTask }) => {
  const STATUSES = ["started", "in-progress", "completed", "paused"];

  return (
    <div className="task-list">
      <h2>My To Do List</h2>
      <div className="task-list-grid">
        {STATUSES.map((status) => (
          <div key={status} className="task-column">
            <ol>
              <h3>{status}</h3>
              {tasks
                .filter((item) => item.status === status)
                .map((item) => (
                  <li key={item.id}>
                    <strong>{item.name}</strong> -{" "}
                    {item.categories && item.categories.length > 0
                      ? item.categories.join(", ")
                      : "No category"}{" "}
                    ({item.status}){" "}
                    <button
                      type="button"
                      className="clear-button"
                      onClick={() => onDeleteTask(item.id)}
                      aria-label={`Delete task ${item.name}`}
                    >
                      Delete Task
                    </button>
                  </li>
                ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
