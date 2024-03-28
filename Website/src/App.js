import "./css/styles.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import { MainNavBar } from "./Components/mainnavbar.js"
import { Roadmap } from "./Roadmap.js"
import { About } from "./About.js"
import { Homepage } from "./Components/homepage.js"
import { Contact } from "./Components/contactme.js"
import { Footer } from "./Components/footer.js"

export default function App() {
  useEffect(() => {
    Aos.init({duration: 2000,
              once: false,
              mirror: true});
  }, []);
  return (
    <div className="App">
      <Router>
        <div className="navigation">
          <MainNavBar />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<Roadmap />} />
          <Route path="/projects" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer>
          <div class="links">
            <a class="bgit" target="_blank" href="[Github]"></a>
            <a class="blinked" target="_blank" href="[Linkedin]"></a>
          </div>
        </Footer>
      </Router>
    </div>
  );
}
