import formatRelativeTime from "../helpers/formatDate";

const TaskCard = ({ task, onDeleteTask }) => {
  const timeCreated = task.createdAt || task.id; //fallback to id if createdAt is not available

  return (
    <li className="task-card">
      <h4>{task.name.toUpperCase()}</h4>
      <p>
        {task.categories && task.categories.length > 0
          ? task.categories.join(", ")
          : "No category"}{" "}
        ({task.status})
      </p>
      <i className="task-timestamp">Added {formatRelativeTime(timeCreated)}</i>
      <button
        type="button"
        className="clear-button"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete task ${task.name}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
