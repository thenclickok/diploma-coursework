import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const STORAGE_KEY = "tasks_list"; //key for local storage
const DEFAULT_TASKS = [];

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error("Error reading localStorage:", error);
      }
    }
    return DEFAULT_TASKS;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      const updated = [...prevTasks, { ...newTask, id: Date.now() }];
      console.log(updated);
      return updated; //return statement required because this block is inside curly braces
    });
  };

  const deleteTask = (idToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToDelete));
    /*for each task in the tasks array, make sure the task id 
    is NOT the same as the list item that needs deleting 
    (filter KEEPS everything that doesn't match the one to delete)*/
  };

  return (
    <div className="task-list-container">
      <TaskForm onAddTask={addTask} />
      {/*addTask function added as prop so TaskForm can send data to TaskManger.js*/}
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      {/*deleteTask function added as prop so TaskList can send data to TaskManager.js*/}
    </div>
  );
};
export default TaskManager;
