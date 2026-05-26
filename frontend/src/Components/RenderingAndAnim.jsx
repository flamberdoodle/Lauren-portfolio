function RenderingAndAnim() {
  return (
    <main className="projects-page">
      <section className="projects-section">
        <h1>Rendering & Animation</h1>

        <p className="section-description">
          Projects involving Maya, OpenGL, computer graphics, animation,
          lighting, rendering pipelines, and 3D asset creation.
        </p>

        <div className="projects-stack">
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
              <p>Goldfish Animation</p>

              <a
                className="project-link"
                href="#goldfish"
              >
                View Project →
              </a>
            </div>

            <img
              src="/images/fish_icon.png"
              alt="Goldfish Animation"
              className="card-icon"
            />
          </div>

          <div className="projects-card">
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default RenderingAndAnim;