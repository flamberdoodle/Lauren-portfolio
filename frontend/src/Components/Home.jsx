function Home() {
  return (
    <main className="home-page">
      <section className="home-text">
        <h1>Hello<span className="accent">.</span></h1>
        <h2>I&apos;m Lauren</h2>
        <h2>Software Developer</h2>

        <div className="home-buttons">
          <a className="primary-button" href="/contact">Contact Me</a>
          <a className="secondary-button" href="/resume.pdf">My Resume</a>
        </div>
      </section>

      <section className="home-visual">
        <div className="profile-circle">
          Image Here
        </div>
      </section>
    </main>
  );
}

export default Home;