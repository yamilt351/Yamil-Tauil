import React from "react";
import data from "./data";
import "./skills.css";

function Skills() {
  return (
    <section className="skil-section" id="Skills">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-container">
        {data.map((datas) => {
          const { Skill, Tools, id } = datas;
          return (
            <div className="container" key={id}>
              <h2 className="subtitle">{Skill}</h2>
              <ul>
                {Tools.map((skills) => {
                  const { id, name, icon, skillIcon } = skills;
                  return (
                    <li key={id} className="item" >
                      {icon} {skillIcon} {name}
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

export default Skills;
