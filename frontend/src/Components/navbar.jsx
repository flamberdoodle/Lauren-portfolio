// Navigation bar component for the portfolio website; uses Bootstrap for styling and responsiveness
// maybe change the dropdown later to just be buttons on the portfolio page instead of in the navbar?
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link className="navbar-logo" to="/home">
                Lauren Schroeder
            </Link>

                <ul className="navbar-links">

                    {/* Navigation links */}
                    <li>
                        <Link to="/home">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>

                <li>
                    <Link to="/projects">
                        Projects
                    </Link>
                </li>
                    {/* <a className="nav-link dropdown-toggle" to="/projects" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </a> */}
                    {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" to="/programming">
                                Programming
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="/GameDev">
                                Game Development
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="/RenderingAndAnim">
                                Rendering and Animation
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" to="/art">
                                Art
                            </a>
                        </li>
                    </ul> */}
                {/* </li> */}

        <li>
          <Link to="/experience">
            Experience
          </Link>
        </li>

        <li>
          <Link to="/skills">
            Skills
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>

      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link> */}
    </nav>
  );
}

export default Navbar;