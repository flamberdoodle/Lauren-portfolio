// Navigation bar component for the portfolio website; uses Bootstrap for styling and responsiveness
// maybe change the dropdown later to just be buttons on the portfolio page instead of in the navbar?

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <a className="navbar-logo" href="#home">
                Lauren Schroeder
            </a>

                <ul className="navbar-links">

                    {/* Navigation links */}
                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>

                <li>
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                    {/* <a className="nav-link dropdown-toggle" href="#projects" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </a> */}
                    {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="#programming">
                                Programming
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#GameDev">
                                Game Development
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#RenderingAndAnim">
                                Rendering and Animation
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#art">
                                Art
                            </a>
                        </li>
                    </ul> */}
                {/* </li> */}

        <li>
          <a href="#experience">
            Experience
          </a>
        </li>

        <li>
          <a href="#skills">
            Skills
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>

      {/* <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a> */}
    </nav>
  );
}

export default Navbar;