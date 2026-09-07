import { useState } from "react";

const DynamicBotManager = () => {
  const [bots, setBots] = useState([
    { id: "1", name: "Email Bot", status: "Active" },
    { id: "2", name: "Data Bot", status: "Inactive" },
  ]);

  const [newBot, setNewBot] = useState({ id: "", name: "", status: "" });

  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setNewBot({
      ...newBot,
      [name]: value,
    });
  };

  const addBotToList = () => {
    if (
      newBot.id.trim() !== "" &&
      newBot.name.trim() !== "" &&
      newBot.status.trim() !== ""
    ) {
      setBots([...bots, newBot]);
      setNewBot({ id: "", name: "", status: "" });
      setError("");
    } else {
      setError("Please fill out all fields before adding a bot.");
    }
  };

  const deleteBot = (id) => {
    setBots(bots.filter((bot) => id !== bot.id));
  };

  const filteredBots = bots.filter((bot) => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return true; // If search term is empty, show all bots

    //toLowerCase() ensures case-insensitive matching
    //as user types a search term, the page will display only the bots that match

    return (
      bot.name.toLowerCase().includes(query) ||
      bot.status.toLowerCase() === query
    );
  });

  return (
    <div className="dynamic-bot-manager">
      <h1>Dynamic Bot Manager</h1>
      <div className="main-box">
        <div className="left-side">
          <div className="add-new-bot">
            <h2>Add New Bot</h2>
            <input
              type="text"
              name="id"
              value={newBot.id}
              onChange={handleInputChange}
              placeholder="Bot ID"
            />
            <input
              type="text"
              name="name"
              value={newBot.name}
              onChange={handleInputChange}
              placeholder="Bot Name"
            />
            <input
              type="text"
              name="status"
              value={newBot.status}
              onChange={handleInputChange}
              placeholder="Bot Status"
            />

            <button onClick={addBotToList}>Add Bot</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="filter-bots">
            <h2>Filter Bots</h2>
            <input
              type="text"
              placeholder="Search by name or status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <ul>
          <h2>Current Bots:</h2>
          {filteredBots.map((bot) => (
            <li key={bot.id}>
              <p>
                <b>Bot ID:</b> {bot.id}
              </p>
              <p>
                <b>Bot Name:</b> {bot.name}
              </p>
              <p>
                <b>Bot Status:</b> {bot.status}
              </p>
              <button onClick={() => deleteBot(bot.id)}>Delete Bot</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicBotManager;
