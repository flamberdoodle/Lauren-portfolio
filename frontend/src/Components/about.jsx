import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <main className="about-page">
      <section id="about" className="about-section">
        <h1>About Me</h1>

        <div className="about-card">
          <div className="card-fill">
            <p>
              Computer Science student at the University of Arizona with
              experience in software engineering, mixed reality development,
              virtual reality applications, artificial intelligence, and
              computer graphics. I enjoy building interactive experiences,
              solving complex technical problems, and developing innovative
              solutions that combine software engineering with emerging
              technologies.
            </p>
          </div>
          <div className="card-border"></div>
        </div>
      </section>

      <section id="experience" className="about-section">
        <h1>Experience</h1>

        <div className="experience-stack">
          <div className="experience-card">
            <div className="card-fill">
              <div>
                <h3>Software Data Sciences</h3>
                <h4>Software Engineering Intern – VR Interaction Systems</h4>

                <ul>
                  <li>
                    Developed VR applications using Unity and C# scripting to
                    enhance interactivity and immersion
                  </li>
                  <li>
                    Applied structured log-based debugging to resolve complex
                    issues efficiently
                  </li>
                  <li>
                    Worked independently and collaboratively while adapting to
                    new tools and workflows
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-border"></div>
          </div>

          <div className="experience-card">
            <div className="card-fill">
              <div>
                <h3>University of Arizona CDH Research Lab</h3>
                <h4>Student Researcher</h4>

                <ul>
                  <li>
                    Collaborated with developers and professors to build
                    technological innovations for a VR nurse-training
                    simulation
                  </li>
                  <li>
                    Troubleshot networking and connectivity issues in
                    mixed-reality environments
                  </li>
                  <li>
                    Expanded multiplayer mixed-reality tools and interaction
                    systems
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-border"></div>
          </div>

          <div className="experience-card">
            <div className="card-fill">
              <div>
                <h3>Michael&apos;s</h3>
                <h4>Cashier</h4>

                <ul>
                  <li>
                    Provided customer support in fast-paced retail
                    environments
                  </li>
                  <li>
                    Adapted to multiple operational roles and responsibilities
                  </li>
                  <li>
                    Developed communication, teamwork, and problem-solving
                    skills
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-border"></div>
          </div>
        </div>
      </section>

      <section id="skills" className="about-section">
        <h1>Skills</h1>

        <div className="skills-card">
          <div className="card-fill">
            <div className="skills-grid">

              <div>
                <h3>Programming Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>C#</li>
                  <li>JavaScript</li>
                  <li>SQL (SQLite)</li>
                  <li>MATLAB</li>
                </ul>
              </div>

              <div>
                <h3>Frameworks & Tools</h3>
                <ul>
                  <li>Django</li>
                  <li>React</li>
                  <li>Unity</li>
                  <li>Unreal Engine 5</li>
                  <li>MRTK</li>
                  <li>Mirror Networking</li>
                  <li>Git</li>
                  <li>Vector Databases</li>
                </ul>
              </div>

              <div>
                <h3>Graphics & 3D</h3>
                <ul>
                  <li>Autodesk Maya</li>
                  <li>OpenGL</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe After Effects</li>
                  <li>Adobe Creative Suite</li>
                </ul>
              </div>

              <div>
                <h3>Operating Systems</h3>
                <ul>
                  <li>Windows</li>
                  <li>Linux</li>
                  <li>Bash / Unix</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="card-border"></div>
        </div>
      </section>
    </main>
  );
}

export default About;