import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import './App.css';

function App() {
  const title = 'Investment Calculator';
  const subtitle = 'Every penny counts.';
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <UserInput />
    </>
  )
}

export default App;
