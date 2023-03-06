import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./style.css"
import data from "./data.js";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-header">
     
        <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
          <MdMenu />
        </button>
      </div>
      <div
        className={`${
          showLinks ? "links-container show-container" : "links-container"
        }`}
      >
        <ul className="links">
          {data.map((dir) => {
            const { id, name, URL, icon } = dir;
            return (
              <li key={id}>
                <a href={URL}>
                  {icon} {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
