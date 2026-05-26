function Home() {
  return (
    <main className="home-page">
      <section className="home-text">
        <h1>Hello<span className="accent">.</span></h1>
        <h2>I&apos;m Lauren</h2>
        <ul className="home-list">
          <li>Software Developer</li>
          <li>Game Developer</li>
          <li>3D Modeler</li>
        </ul>

        <div className="home-buttons">
          <a className="primary-button" href="/contact">Contact Me</a>
          <a className="secondary-button" href="/current_resume_2026.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
      </section>

      <section className="home-visual">
        <div className="card-back"></div>

        <div className="card-front">
            <p>Image</p>
        </div>
      </section>
    </main>
  );
}

export default Home;