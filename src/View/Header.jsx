import React from 'react'
import { useState } from "react";
import "./Header.css"
import Logo from "./img/Logo.png"

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className="header">
        <img className="logo" src={Logo} alt="Logo Header" />

        {/* use of the imported image */}

        <button onClick={toggleMenu} className="Header-button">
          <svg
            className="Header-nav-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        {/*Hamburguer navbar*/}
        {/* ternary operator to add a class that is used in css to show the navbar on mobile version */}
        <nav className={`Header-nav ${menu ? "isActive" : ""}`}>
          <ul className="Header-ul">
            <li className="Header-li">
              <a href="#section_1">
                <p> About me  </p>
              </a>
            </li>

            <li className="Header-li">
              <a href="#section_2">
                <p> Portfolio </p>
              </a>
            </li>

            <li className="Header-li">
              <a href="#section_3">
                <p> Contact</p>
              </a>
            </li>

          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header