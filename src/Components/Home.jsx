import React from "react";
import menImage from "../../src/images/men-image.png";
import ringImage from "../../src/images/image-ring.png";
import dIcon from "../../src/images/dwonload-icon.png";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-content-center">
            <h2>I am Akash D</h2>
            <h3 className="mt-4">
              Front-End <span>Developer</span>
            </h3>
            <p className="mt-5">
              Enthusiastic junior front-end developer with a comprehensive Six month training in
              HTML5, CSS3, Bootstrap, JavaScript and React JS.
            </p>
          </div>
          <div className="col-lg-6 men-img">
            <a href="../../public/fonts/Akash d-resume.pdf" download className="cv-box">
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
            <img className="w-100" src={menImage} alt="men-image" />
            <img className="ring-img" src={ringImage} alt="ring-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
