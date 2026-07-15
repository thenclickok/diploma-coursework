import "./App.css";
import Header from "./Header";
import JobBoard from "./JobBoard";
import ProfileDisplay from "./ProfileDisplay";
import StyledButton from "./StyledButton";
import VariableDisplay from "./VariableDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileDisplay />
      <VariableDisplay />
      <JobBoard />
      <StyledButton />
    </div>
  );
}

export default App;
