import TaskCard from "./TaskCard";

const TaskColumn = ({ status, tasks, onDeleteTask }) => {
  const filteredTasks = tasks.filter((item) => item.status === status);

  return (
    <div className="task-column">
      <ol>
        <h3>{status}</h3>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))}
      </ol>
    </div>
  );
};

export default TaskColumn;
