import React from "react";
import home_bg from "../../images/home-hero.png";
import download from "../../images/download.png";
import emailicon from "../../images/email.png";
import resume from "../../../public/fonts/Akash-d-resume.pdf";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram, FaPhone, FaRoad } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="home-section position-relative" id="home">
        <div className="home_background">
          <img src={home_bg} alt="" />
        </div>
        <div className="container">
          <div className="d-flex align-items-center flex-column justify-content-center">
            <div>
              <h2>I'm Akash D</h2>
            </div>
            <h3 className="mt-4">FRONT-END DEVLOPER</h3>
          </div>
          <div className="mt-3 d-flex justify-content-center gap-5  home-box">
            <div>
              <a href={resume} download className="btn-home d-flex align-items-center">
                <span className="d-none d-md-block me-1">Download</span> Resume
                <img src={download} className="ms-3" alt="download icon" />
              </a>
            </div>
            <div>
              <a
                href="mailto:akashtharmaraj@gmail.com"
                className="btn-home btn-2 d-flex align-items-center"
              >
                <span className="	d-none d-md-block me-1">Contact</span>Email
                <img src={emailicon} className="ms-3" alt="email icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="social-media position-absolute">
          <div className="d-flex flex-column gap-5">
            <a href="tel:9361880362">
              <FaPhone className="img" />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-d-2b0029276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="img" />
            </a>
            <a href="https://github.com/Akash-D-2003" target="_blank" rel="noopener noreferrer">
              <FaGithub className="img" />
            </a>
            <a href="  https://wa.me/9361880362" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="img" />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="snow"></div> */}
    </>
  );
}

export default Home;
