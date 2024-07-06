import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <NavBar />

      <Home />

      <About>
        <Qualifications />
      </About>

      <Skills />

      <Work />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
