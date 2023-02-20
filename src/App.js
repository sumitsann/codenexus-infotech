import "./App.css";
import {
  Download,
  Faq,
  Features,
  Footer,
  Header,
  Navbar,
  Subscribe,
} from "./components";

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features></Features>
      <Download />
      <Subscribe />
      <Faq />
      <Footer></Footer>
    </main>
  );
}

export default App;
