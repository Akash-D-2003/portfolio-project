import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import logo from "../../images/logo.png";
import arrow from "../../images/arrow-up.png";

function Header() {
  const header = document.querySelector("header");
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
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
    <div className="header">
      <div className="header-nav">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul id={isSticky ? "sticky" : ""} className={menuOpen ? "nav_top-0" : "nav_top-100"}>
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
          <a
            href="mailto:akashtharmaraj@gmail.com"
            className="btn-header d-flex gap-3 align-items-center"
          >
            Contact me
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
