import "./TaskList.css";
import TaskColumn from "./TaskColumn";

const TaskList = ({ tasks, onDeleteTask }) => {
  const STATUSES = ["started", "in-progress", "completed", "paused"];

  return (
    <div className="task-list">
      <h2>My To Do List</h2>
      <div className="task-list-grid">
        {STATUSES.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
