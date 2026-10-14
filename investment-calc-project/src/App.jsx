import Header from './components/Header.jsx'
import './App.css'

function App() {
  const title = 'Investment Calculator';
  const subtitle = 'Every penny counts.';
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      {/* additional components goes here */}
    </>
  )
}

export default App
