import React from "react";
import "./Navbar.css";
import { GiSoundWaves } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className="logo">
        <GiSoundWaves color="#fff" size={33} />
        <p className="logo-text">
          CodeNexus <span>Infotech</span>
        </p>
      </div>
      <menu>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
