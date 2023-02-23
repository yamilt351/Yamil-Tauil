import React from "react";
import "./home.css";
function Home() {
  return (
    <section className="home-container">
      <div className="text-container" id="Home">
        <h1 className="name">I am Yamil Tauil </h1>
        <p className="text">
          Im Javascript Backend Developer. I use: Nodejs, Express, Javascript,
          Mongo, JWT, Jest,Swagger, HTML, CSS, React. And im learning MySQL,
          Docker, and Typescript
        </p>
        <div className="resume">
          <a href="https://github.com/yamilt351">
            <button className="button">MY RESUME</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
