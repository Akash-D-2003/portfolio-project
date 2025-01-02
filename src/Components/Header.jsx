import React, { useState, useEffect } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import logo from "../images/logo.png";

function Header() {
  const header = document.querySelector("header");
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <img className="logo" src={logo} alt="logo" />
        </div>
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

        <div className="d-flex align-items-center">
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
