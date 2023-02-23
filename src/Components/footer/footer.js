import React from "react";
import data from "./data.js";
import "./footerStyle.css"

function Footer() {
  return (
    <footer className="footer" id="Footer">
      <div className="footer-container">
        <ul className="links-footer">
          {data.map((data) => {
            const { id, url, name, icon } = data;
            return (
              <li key={id}>
                <a href={url} download>
                  {icon} {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
