// App.js

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Bio from "./components/Bio/Bio";
import Skills from "./components/Skills/Skills";

function App() {
  const scrollTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header scrollTo={scrollTo} />
      <Bio scrollTo={scrollTo} />
      <Skills scrollTo={scrollTo} />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
