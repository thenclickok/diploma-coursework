import TaskCard from "./TaskCard";

const TaskColumn = ({ status, tasks, onDeleteTask }) => {
  //filtering the tasks for each column's status, then sorting by when the task was created
  const filteredTasks = tasks
    .filter((item) => item.status === status)
    .sort((a, b) => {
      const timeA = new Date(a.createdAt || a.id).getTime();
      const timeB = new Date(b.createdAt || b.id).getTime();
      return timeB - timeA; //sorts by newest first
    });

  return (
    <div className="task-column">
      <ol>
        <h3>
          {status} ({filteredTasks.length})
        </h3>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))}
      </ol>
    </div>
  );
};

export default TaskColumn;
