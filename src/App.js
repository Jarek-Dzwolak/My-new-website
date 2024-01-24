import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cv from "./pages/Cv/Cv";

function App() {
  return (
    <div className="App">
      <Header />
      <Cv />
      <Footer />
    </div>
  );
}

export default App;
