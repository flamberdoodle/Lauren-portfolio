function GameDev() {
  return (
    <main className="projects-page">
      <section className="projects-section">
        <h1>Game Development</h1>

        <p className="section-description">
          Multiplayer, mixed reality, virtual reality, and gameplay systems
          developed in Unity and Unreal Engine.
        </p>

        <div className="projects-stack">

          <div className="projects-card">
            <div className="project-content">
              <p>Mixed Reality Multiplayer Environment</p>

              <a className="project-link" href="#">
                View Project →
              </a>
            </div>
          </div>

          <div className="projects-card">
            <div className="project-content">
              <p>Branching Dialogue System</p>

              <a className="project-link" href="#">
                View Project →
              </a>
            </div>
          </div>

          <div className="projects-card">
            <div className="project-content">
              <p>Item Interaction System</p>

              <a className="project-link" href="#">
                View Project →
              </a>
            </div>
          </div>

          <div className="projects-card">
            <div className="project-content">
              <p>Virtual Reality Experiences</p>

              <a className="project-link" href="#">
                View Project →
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default GameDev;