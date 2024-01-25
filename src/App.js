import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Bio from "./components/Bio/Bio";
import Skills from "./components/Projekty/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
