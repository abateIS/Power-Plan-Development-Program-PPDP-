import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Programs from "./pages/Programs.js";
import Projects from "./pages/Projects.js";
import Team from "./pages/Team.js";
import Contact from "./pages/Contact.js";


function App() {
  return (
    <Router>
      <NavBar />
      <main className="mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;