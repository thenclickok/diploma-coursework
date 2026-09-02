import { useState } from "react";

const BotListManager = () => {
  const [bots, setBots] = useState([
    {
      id: 1,
      name: "Email Extractor",
      status: "Running",
      task: "Extracting emails",
    },
    {
      id: 2,
      name: "Notification Sender",
      status: "Completed",
      task: "Sending notifications",
    },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" },
  ]);

  const [name, setName] = useState("");
  const [status, setStatus] = useState("Stopped");
  const [task, setTask] = useState("");

  // A separate state for the array filter
  const [filterStatus, setFilterStatus] = useState("All");

  const addBot = (newBot) => {
    setBots((prevBots) => [
      ...prevBots,
      {
        // Use the highest existing ID + 1 so IDs never collide
        id: prevBots.length
          ? Math.max(...prevBots.map((bot) => bot.id)) + 1
          : 1,
        name: newBot.name,
        status: newBot.status,
        task: newBot.task,
      },
    ]);
  };

  const deleteBot = (id) => {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents page reload before form is submitted

    //Call addBot with the current input states
    addBot({ name, status, task });

    //Clear form fields after submission
    setName("");
    setStatus("Stopped");
    setTask("");
  };

  const triggerJob = (id) => {
    setBots((prevBots) => {
      return prevBots.map((bot) =>
        bot.id === id ? { ...bot, status: "Running" } : bot,
      );
    });
  };

  const statusColors = {
    Running: "green",
    Completed: "blue",
    Stopped: "red",
  };

  //Display bots based on the button clicked by the user
  const filteredBots =
    filterStatus === "All"
      ? bots
      : bots.filter((bot) => bot.status === filterStatus);

  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <div className="bot-box">
        <div>
          <form onSubmit={handleSubmit} className="add-new-bot">
            <h2>Add New Bot</h2>
            <input
              type="text"
              placeholder="Bot Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setName(name.trim())} // Trim whitespace when user leaves the input field
              required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Running">Running</option>
              <option value="Completed">Completed</option>
              <option value="Stopped">Stopped</option>
            </select>

            <input
              type="text"
              placeholder="Task Description"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onBlur={() => setTask(task.trim())} // Trim whitespace when user leaves the input field
              required
            />
            <button type="submit">Submit new bot</button>
          </form>
          <div className="filter-buttons">
            <h2>Filter Bots by Status</h2>
            <button onClick={() => setFilterStatus("Running")}>
              Show Running Bots
            </button>
            <button onClick={() => setFilterStatus("Stopped")}>
              Show Stopped Bots
            </button>
            <button onClick={() => setFilterStatus("Completed")}>
              Show Completed Bots
            </button>
            <button onClick={() => setFilterStatus("All")}>
              Show All Bots
            </button>
          </div>
        </div>
        <ul>
          <h2>Current Bots:</h2>
          {filteredBots.map((bot) => (
            <li key={bot.id}>
              <h2>{bot.name}</h2>
              <p>
                Status:{" "}
                <span style={{ color: statusColors[bot.status] }}>
                  {bot.status}
                </span>
              </p>
              <p>Task: {bot.task}</p>
              <button onClick={() => triggerJob(bot.id)}>
                Trigger Job
              </button>{" "}
              <button onClick={() => deleteBot(bot.id)}>Delete Bot</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BotListManager;
