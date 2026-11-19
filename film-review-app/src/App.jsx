import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

function App() {

  return (
    <div className="wrapper" >
      <Header />
      <main className="main-content">
        <h1>Featured Films</h1>
        <p>This section will show the film list.</p>
      </main>
      <Footer />
    </div>
  )
};

export default App;
