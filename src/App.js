import React from "react";
import Navbar from "./Components/navbar/navbar.js";
import Footer from "./Components/footer/footer.js";
import Home from "./Components/Home/home.jsx";
import Skills from "./Components/Skills/skills.jsx";
import Projects from "./Components/proyecto/proyecto.js";
import About from "./Components/Aboutme/aboutme.js";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
	  <Projects/>
	  <Skills/>
	  <About/>
      <Footer />
    </div>
  );
}

export default App;
