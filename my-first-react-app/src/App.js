import "./App.css";
import Header from "./Header";
import JobBoard from "./JobBoard";
import ProfileDisplay from "./ProfileDisplay";
import StyledButton from "./StyledButton";
import VariableDisplay from "./VariableDisplay";
import JobCounter from "./JobCounter";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileDisplay />
      <VariableDisplay />
      <JobBoard />
      <StyledButton />
      <JobCounter />
    </div>
  );
}

export default App;
