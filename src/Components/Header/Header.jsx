import React, { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../../images/logo.png";
import arrow from "../../images/arrow-up.png";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 800) {
        setActiveSection("home");
        setIsSticky(false);
      } else if (scrollY >= 800 && scrollY < 1400) {
        setActiveSection("skill");
        setIsSticky(true);
      } else if (scrollY >= 1400 && scrollY < 3800) {
        setActiveSection("project");
        setIsSticky(true);
      } else if (scrollY >= 3800) {
        setActiveSection("contact");
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("scroll", window.scrollY);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header" id="header">
      <div className="header-nav">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul id={isSticky ? "sticky" : ""} className={menuOpen ? "nav_top-0" : "nav_top-100"}>
          <li>
            <a className={activeSection === "home" ? "scroll_point" : ""} href="#header">
              Home
            </a>
          </li>
          <li>
            <a className={activeSection === "skill" ? "scroll_point" : ""} href="#skill">
              Skill
            </a>
          </li>
          <li>
            <a className={activeSection === "project" ? "scroll_point" : ""} href="#project">
              Project
            </a>
          </li>
          <li>
            <a className={activeSection === "contact" ? "scroll_point" : ""} href="#contact">
              Contact
            </a>
          </li>
          <div className="close-menu" onClick={toggleMenu}>
            <IoIosClose />
          </div>
        </ul>
        <div className="d-flex align-items-center">
          <div onClick={toggleMenu}>
            <BiMenuAltRight className="header-menu" />
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
