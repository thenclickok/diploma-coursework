import Header from "./components/Header.jsx";
import FilmList from "./components/FilmList.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

function App() {

  return (
    <div className="wrapper" >
      <Header />
      <main className="main-content">
        <h1>Featured Films</h1>
        <FilmList />
      </main>
      <Footer />
    </div>
  )
};

export default App;
