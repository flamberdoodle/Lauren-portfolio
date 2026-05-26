function Contact() {
  return (
    <main className="about-page">
      <section id="about" className="about-section">
        <h1>Contact Me</h1>

        <div className="about-card">
          <div className="card-fill">
            <p>
              Email: <a href="mailto: lbschroeder1122@gmail.com" className="project-link">lbschroeder1122@gmail.com</a>
              <br /> <br />
              LinkedIn: <a href="https://www.linkedin.com/in/lauren-schroeder-z1122/" className="project-link">https://www.linkedin.com/in/lauren-schroeder-z1122/</a>
              <br /> <br />
              GitHub: <a href="https://github.com/flamberdoodle" className="project-link">https://github.com/flamberdoodle</a>
            </p>
          </div>
          <div className="card-border"></div>
        </div>
      </section>
    </main>
  );
}

export default Contact;