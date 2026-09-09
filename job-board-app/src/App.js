import "./App.css";
import Header from "./components/Header";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

function App() {
  const jobs = [
    { id: 1, name: "Email Extractor", status: "Running" },
    { id: 2, name: "Data Analyser", status: "Completed" },
    { id: 3, name: "Report Generator", status: "Running" },
  ];

  return (
    <div className="App">
      <Header />
      <JobList jobs={jobs} />
      <Footer />
    </div>
  );
}

export default App;
