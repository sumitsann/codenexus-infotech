import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar></Navbar>
        <Header></Header>
      </header>
    </main>
  );
}

export default App;
