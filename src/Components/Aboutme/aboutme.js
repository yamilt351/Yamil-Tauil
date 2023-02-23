import React from "react";
import "./aboutme.css";
function About() {
  return (
    <section id="About">
      <h1 className="title-about">About me</h1>
      <div className="about-section">
        <div className="about-other-section">
          <img
            src="https://wallpapercave.com/wp/IiGAwmA.jpg"
            className="img-about" alt="linux-tux"
          ></img>
        </div>
        <div className="about-container">
          <p className="text-about">
            I’m a Backend Developer located in Argentina. I have a serious
            passion for server side components and databases .Well-organised
            person, problem solver, and creative person. Fan of Linux and linux
            ecosystem. Interested in the entire backend spectrum and working on
            ambitious projects with positive people!.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
