import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import "react-circular-progressbar/dist/styles.css";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
