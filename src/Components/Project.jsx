import React from "react";
import project1 from "../../src/images/project1.png";
import project2 from "../../src/images/project2.png";
import project3 from "../../src/images/project3.png";
import project4 from "../../src/images/project4.png";

function Project() {
  const projects = [
    {
      name: "1. Food Website Landing Page",
      image: project1,
      classAdd: "project1",
      links: ["HTML", "CSS", "JavaScript"],
      link: "https://akash-d-2003.github.io/omni_food/",
    },
    {
      name: "2. Unislink Home Page",
      image: project2,
      classAdd: "project2",
      links: ["HTML", "CSS", "JavaScript", "SASS"],
      link: "https://akash-d-2003.github.io/unislink/",
    },
    {
      name: "3. Plus Project",
      image: project3,
      classAdd: "project3",
      links: ["HTML", "CSS", "JavaScript", "Slick Slider"],
      link: "https://akash-d-2003.github.io/plus_project/",
    },
    {
      name: "4. Viveriti Project",
      image: project4,
      classAdd: "project4",
      links: ["HTML", "CSS", "JavaScript", "Responsive", "```Animation```"],
      link: "https://akash-d-2003.github.io/vivriti_website/",
    },
  ];

  return (
    <section className="project-section" id="project">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <h2 className="text-center">My Projects</h2>
            <p className="mt-4 p-heading text-center">
              I've utilized front-end technologies across multiple projects to craft dynamic and
              visually captivating web applications.
            </p>
          </div>
        </div>
        <div className="row justify-content-center p-box mt-5">
          <div className="col-lg-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`row justify-content-between align-items-center mb-10 p-box ${project.classAdd}`}
              >
                <div className="col-lg-6">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="col-lg-5">
                  <h3>{project.name}</h3>
                  <p className="mt-4">Technologies Used:</p>
                  <ul className="d-flex flex-wrap mt-3">
                    {project.links.map((value, index) => (
                      <li key={index} className="me-2">
                        {value}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="btn mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    Visit page
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;