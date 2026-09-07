import Header from "./Header";
import JobBoard from "./JobBoard";
import ProfileDisplay from "./ProfileDisplay";
import StyledButton from "./StyledButton";
import VariableDisplay from "./VariableDisplay";
import JobCounter from "./JobCounter";
import AdvancedJobCounter from "./AdvancedJobCounter";
import DynamicForm from "./DynamicForm";
import BotListManager from "./BotListManager";
import DynamicBotManager from "./DynamicBotManager";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileDisplay />
      <VariableDisplay />
      <JobBoard />
      <StyledButton />
      <JobCounter />
      <AdvancedJobCounter />
      <DynamicForm />
      <BotListManager />
      <DynamicBotManager />
    </div>
  );
}

export default App;
