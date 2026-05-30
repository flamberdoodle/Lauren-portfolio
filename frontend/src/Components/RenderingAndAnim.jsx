import chessSet from "../assets/Visuals/Lauren_Chess_Lighting.png";

function RenderingAndAnim() {
  return (
    <main className="projects-page">
      <section className="projects-section">
        <h1>Rendering & Animation</h1>

        <p className="section-description">
          Projects involving Maya, OpenGL, computer graphics, animation,
          lighting, rendering pipelines, and 3D asset creation.
        </p>

        <p className="projects-heading">
          3D Chess Set
        </p>

        <div className="main-image-wrapper">  
          <img
            src={chessSet}
            alt="3D Chess Set"
            className="main-image"
          />
        </div>

        <div className="project-description-card">
          <h3>Overview</h3>

          <p>
            Created a complete 3D chess environment in Autodesk Maya using
            polygonal modeling, UV mapping, materials, lighting, and rendering
            techniques. The project focused on creating realistic assets and
            presenting them in a polished final scene.
          </p>

          <h3>Tools Used</h3>

          <ul>
            <li>Autodesk Maya</li>
            <li>UV Mapping</li>
            <li>Lighting & Rendering in Unity</li>
            <li>Material Creation in Adobe Substance Painter 3D</li>
          </ul>
        </div>

        <div className="video-container">
          <video
            controls
            className="project-video"
          >
            <source src="Videos/Chess_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="project-description-card">
          <h3>Overview</h3>

          <p>
            
          </p>

          <h3>Tools Used</h3>

          <ul>
            <li>Animation keyeing done in Unity</li>
          </ul>
        </div>
        
        <p className="projects-heading">
          3D Hand
        </p>

        <div className="project-description-card">
          <h3>Overview</h3>

          <p>
            Coming soon!
          </p>

          <h3>Tools Used</h3>

          <ul>
            
          </ul>
        </div>

        {/* <div className="projects-stack">
          <div className="projects-card">
            <div className="project-content">
              <p>3D Chess Set</p>

              <a
                className="project-link"
                href="#chess-set"
              >
                View Project →
              </a>
            </div>

            <img
              src="/images/chess_icon.png"
              alt="Chess Set"
              className="card-icon"
            />
          </div>

          <div className="projects-card">
            <div className="project-content">
              <p>Hand Animation</p>

              <a
                className="project-link"
                href="#hand-animation"
              >
                Coming Soon →
              </a>
            </div>

            <img
              src="/images/hand_icon.png"
              alt="Hand Animation"
              className="card-icon"
            />
          </div> */}

          {/* <div className="projects-card">
            <div className="project-content">
              <p>OBJ Viewer</p>

              <a
                className="project-link"
                href="#obj-viewer"
              >
                View Project →
              </a>
            </div>

            <img
              src="/images/render_icon.png"
              alt="OBJ Viewer"
              className="card-icon"
            />
          </div>

          <div className="projects-card">
            <div className="project-content">
              <p>BVH Skeleton Animation Viewer</p>

              <a
                className="project-link"
                href="#bvh-viewer"
              >
                View Project →
              </a>
            </div>

            <img
              src="/images/animation_icon.png"
              alt="BVH Viewer"
              className="card-icon"
            />
          </div> */}
        {/* </div>*/}
      </section>
    </main>
  );
}

export default RenderingAndAnim;