import { Link } from "react-router-dom";

import gameIcon from "../assets/Visuals/gamedevIcon_cream.png";
import softwareIcon from "../assets/Visuals/Software_Icon.png";
import modelingIcon from "../assets/Visuals/3Dmodeling_icon.png";
import artIcon from "../assets/Visuals/Art_Icon.png";

function Projects() {
  return (
    <main className="projects-page">
      <section id="projects" className="projects-section">
        <h1>Project Categories</h1>

        <div className="projects-stack">
          <div className="projects-card">
            <div className="project-content">
              <p>Software Development</p>

              <Link className="project-button" to="/programming">
                View Projects
              </Link>
            </div>

            <img
              src={softwareIcon}
              alt="Software development icon"
              className="card-icon"
            />
          </div>

          <div className="projects-card">
            <div className="project-content">
              <p>Game Development</p>

              <Link className="project-button" to="/gamedev">
                View Projects
              </Link>
            </div>

            <img
              src={gameIcon}
              alt="Game development icon"
              className="card-icon"
            />
          </div>

          <div className="projects-card">
            <div className="project-content">
              <p>3D Modeling & Animation</p>

              <Link className="project-button" to="/renderingandanim">
                View Projects
              </Link>
            </div>

            <img
              src={modelingIcon}
              alt="3D modeling icon"
              className="card-icon"
            />
          </div>

          <div className="projects-card">
            <div className="project-content">
              <p>Graphic Design & Traditional Art</p>

              <Link className="project-button" to="/art">
                View Projects
              </Link>
            </div>

            <img
              src={artIcon}
              alt="Art icon"
              className="card-icon"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;