import React from "react";

import dIcon from "../../src/images/dwonload-icon.png";
import resume from "../../public/fonts/Akash-d-resume.pdf";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="home-section position-relative" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-content-center">
              <h2>I am Akash D</h2>
              <h3 className="mt-4">
                Front-End <span>Developer</span>
              </h3>
              <p className="mt-5">
                Aspiring <span> Front-End developer</span> eager to kickstart a career in creating
                engaging and user friendly web interfaces. Equipped with a solid understanding of
                front-end technologies and a passion for <span> pixel-perfect design. </span>
                Seeking an opportunity to apply academic knowledge and gain hands-on experience in a
                professional environment where creativity and innovation are valued.
              </p>
            </div>
            <div className="col-lg-6 men-img">
              <a href={resume} download className="cv-box">
                <div className="dwonload-box">
                  <div className="img">
                    <img src={dIcon} alt="icon" />
                    <h4>CV</h4>
                  </div>
                  <span style={{ "--i": 0 }}></span>
                  <span style={{ "--i": 1 }}></span>
                  <span style={{ "--i": 2 }}></span>
                </div>
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
            <a href="!#">
              <FaInstagram className="img" />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="snow"></div> */}
    </>
  );
}

export default Home;
