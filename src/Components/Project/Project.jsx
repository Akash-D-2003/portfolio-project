import React from "react";
import project1 from "../../images/project1.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import project5 from "../../images/project5.png";
import project6 from "../../images/project6.png";

function Project() {
  const projects = [
    {
      name: "1. Food Website Landing Page",
      image: project1,
      classAdd: "project1",
      skills: ["HTML", "CSS", "SASS", "JavaScript"],
      link: "https://akash-d-2003.github.io/omni_food/",
    },
    {
      name: "2. Plus Project",
      image: project3,
      classAdd: "project2",
      skills: ["HTML", "CSS", "JavaScript", "Slick Slider"],
      link: "https://akash-d-2003.github.io/plus_project/",
    },
    {
      name: "3. Viveriti Project",
      image: project4,
      classAdd: "project3",
      skills: ["HTML", "CSS", "JavaScript", "Responsive", "Animation"],
      link: "https://akash-d-2003.github.io/vivriti_website/",
    },
    {
      name: "4. Landing Page",
      image: project5,
      classAdd: "project4",
      skills: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "SASS"],
      link: "https://akash-d-2003.github.io/landing-page/",
    },
    {
      name: "5. React Food Website ",
      image: project6,
      classAdd: "project5",
      skills: ["React js", "Tailwind css"],
      link: "https://tomto.netlify.app/",
    },
  ];

  return (
    <div className="project-section" id="project">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="text-center position-relative">
              <h2>My Projects</h2>
              <h3 className=" position-absolute project-text">Projects</h3>
            </div>

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
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.name} />
                  </a>
                </div>
                <div className="col-lg-5">
                  <h3>{project.name}</h3>
                  <p className="mt-4">Technologies Used:</p>
                  <ul className="d-flex flex-wrap mt-3">
                    {project.skills.map((skill, index) => (
                      <li key={index} className="me-2">
                        {skill}
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
    </div>
  );
}

export default Project;
