import React, { useState, useEffect } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import logo from "../images/logo.png";

function Header() {
  const header = document.querySelector("header");
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleDarkTheme() {
    document.querySelector("body").classList.toggle("darktheme");
    document.querySelector(".home-section").classList.toggle("light-theme");
    header.classList.toggle("theme-header");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id={isSticky ? "sticky" : ""}>
      <div className="header-nav">
        <div className="logo">
          <h2>
            <img className="logo" src={logo} alt="logo" />
          </h2>
          <ul style={{ top: menuOpen ? "0" : "-100%" }}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <div className="close-menu" onClick={toggleMenu}>
              <MdOutlineClose />
            </div>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <div className="me-5 d-flex align-items-center">
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" onClick={handleDarkTheme} className="checkbox-label">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <span className="ball"></span>
            </label>
            <IoSunnySharp className="dark ms-2" />
          </div>
          <div onClick={toggleMenu}>
            <AiOutlineMenu className="header-menu" />
          </div>
          <a href="#contact" className="btn-header">
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
