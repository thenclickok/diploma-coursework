const TaskCard = ({ task, onDeleteTask }) => {
  return (
    <li className="task-card">
      <strong>{task.name}</strong> -{" "}
      {task.categories && task.categories.length > 0
        ? task.categories.join(", ")
        : "No category"}{" "}
      ({task.status}){" "}
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
