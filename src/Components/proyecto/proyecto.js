import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import data from "./data";
import "./style.css";

function Projects() {
  return (
    <section className="project-section" id="Proyects">
      <h1 className="project-title">Projects</h1>
      <div className="project-container">
        {data.map((datas) => {
          const {
            id,
            name,
            Documentation,
            Deploy,
            img,
            url,
            alt,
            description,
          } = datas;
          return (
            <div className="container-link" key={id}>
              <h2 className="subtitle-project">{name}</h2>
              <p>Deployed:{Deploy}</p>
              <img src={img} className="project-image" alt={alt}></img>
              <div className="buttons">
                <button className="git-button">
                  <a href={Documentation}>{<FaGithub />} Check the Code</a>
                </button>
                <button className="git-button">
                  <a href={url}>{<MdPreview />} Check how it's works</a>
                </button>
              </div>
              <ul className="tech-container">
                {description.map((soft) => {
                  const { id, tec, icon, ver } = soft;

                  return (
                    <li key={id}>
                      {icon} {tec} {ver}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
