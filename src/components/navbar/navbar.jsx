import React from "react";
import "./navbar.css";
// import { useLocation } from "react-router-dom";

export default function Navbar() {
//   const location = useLocation();
//   const isActive = location.pathname;

  return (
    <div className="my-nav">
      <div className="nav-start">
        <h3 className="nav-logo"><a href="/">Amit Bisht</a></h3>
      </div>
      <div className="nav-middle">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/19iAP1p1_MI-YxmJ7Dc7L85qgvqiuQseO/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-end">
        <h3>
          <a href="MailTo:a.bisht.289@gmail.com" target={"_blank"} rel={'noreferrer'}>
            Say hello &#128075;
          </a>
        </h3>
      </div>
    </div>
  );
}
