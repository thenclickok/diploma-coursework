import React, { useState } from "react";

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

  const triggerJob = (id) => {
    setBots((prevBots) => {
      return prevBots.map((bot) =>
        bot.id === id ? { ...bot, status: "Running" } : bot,
      );
    });
  };
  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <h2>{bot.name}</h2>
            <p>Status: {bot.status}</p>
            <p>Task: {bot.task}</p>
            <button onClick={() => triggerJob(bot.id)}>Trigger Job</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotListManager;
