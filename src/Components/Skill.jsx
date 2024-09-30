import React, { useState, useRef, useEffect } from "react";
import skillArrow from "../../src/images/skill-arrow.png";
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaBootstrap, FaReact } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

function Skill() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 style={{ color: "#c95d2e" }} />, lineClass: "html" },
    { name: "CSS", icon: <FaCss3Alt style={{ color: "#147bbc" }} />, lineClass: "css" },
    { name: "JavaScript", icon: <FaJs style={{ color: "#f0db4f" }} />, lineClass: "js" },
    { name: "SASS", icon: <FaSass style={{ color: "#cc6699" }} />, lineClass: "sass" },
    { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#563d7c" }} />, lineClass: "boot" },
    { name: "jQuery", icon: <SiJquery style={{ color: "#0769ad" }} />, lineClass: "jq" },
    { name: "React", icon: <FaReact style={{ color: "#61dbfb" }} />, lineClass: "react" },
  ];

  const [scroll, setScrolled] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="skill-section" id="skill">
      <div className="container">
        <h2>
          My Skills <img src={skillArrow} alt="Skill arrow" />
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="skill-box mt-5 row justify-content-between" ref={sectionRef}>
              {skills.map((skill, index) => (
                <div key={index} className="skills mt-5 col-lg-5">
                  <div className="bar d-flex flex-column">
                    <div className="icon">{skill.icon}</div>
                    <div className="info">
                      <span>{skill.name}</span>
                    </div>
                    <div className={`skill-line ${skill.lineClass}`}>
                      <span className={scroll ? "line" : "hide-line"}></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
