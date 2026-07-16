import myLogo from "./my-logo.png";

function Header() {
  return (
    <header className="App-header">
      <img src={myLogo} className="App-logo" alt="logo" />
      <h1>Welcome to My First React App</h1>
      <p>Check out a variety of components below</p>
    </header>
  );
}

export default Header;
