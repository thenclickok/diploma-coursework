import { useState, useEffect } from "react";
import Card from './components/Card';

const App = () => {
  const cardData = [
    {
      title: "React Development",
      description: "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl: "https://images.unsplash.com/vector-1751489957671-b9321ed106d6?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl: "https://images.unsplash.com/vector-1785812439916-1765b7d3671f?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    }
  ];

  const [darkMode, setDarkMode] = useState(false);

  const handleAddCard = (event) => {
    event.preventDefault();
    const form = event.target;
    const newCard = {
      title: form.title.value,
      description: form.description.value,
      buttonText: form.buttonText.value,
      imageUrl: form.imageURL.value
    }
  }
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else { 
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="container mx-auto p-4 dark:bg-slate-950 dark:text-slate-100">
      <h1 className="text-3xl font-bold text-center mb-8">My Card Application</h1>
      <div className="flex justify-center mb-8">{/*wrapping button in a flex-box div to center it*/}
      <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 text-sm font-bold rounded-lg border-2 border-black bg-gray-400 hover:bg-gray-300 hover:text-black dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 cursor-pointer">{darkMode ? "Light Mode" : "Dark Mode"}</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <form className="max-w-sm mx-auto mt-8 p-4 border rounded-lg bg-gray-400 hover:bg-gray-300 dark:bg-gray-300 dark:hover:bg-gray-400 dark:border-slate-700 dark:text-black">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Card</h2>
        <input type="text" placeholder="Title" min={2} max={100} className="border p-2 mb-2 w-full bg-white placeholder-black" />
        <input type="text" placeholder="Description" min={2} max={100} className="border p-2 mb-2 w-full bg-white placeholder-black" />
        <input type="text" placeholder="Button Text" min={2} max={100} className="border p-2 mb-2 w-full  bg-white placeholder-black" />
        <input type="text" placeholder="Image URL" min={2} max={100} className="border p-2 mb-2 w-full bg-white placeholder-black" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full cursor-pointer">Add Card</button>
      </form>
    </div>
  );
};

export default App;