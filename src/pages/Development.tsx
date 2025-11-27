import '../styles/development.css'

export default function Development() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <h1>Full-Stack Development</h1>
        <p>
          Crafting web applications with clean code, modern technologies, and a focus on user experience.
          From concept to deployment, I build solutions that scale.
        </p>
      </section>

      {/* Technical Expertise */}
      <section>
        <h2 className="section-title">Technical Expertise</h2>
        <div className="expertise-grid">
          <article className="expertise-card">
            <div className="expertise-icon"><i className="fas fa-code" /></div>
            <h3>Frontend Development</h3>
            <p>Building responsive, modern web applications with React, Next.js, and Vite.</p>
            <div className="tags">
              <span>React</span><span>Next.js</span><span>Vite</span><span>TypeScript</span><span>Tailwind CSS</span>
            </div>
          </article>

          <article className="expertise-card">
            <div className="expertise-icon"><i className="fas fa-server" /></div>
            <h3>Backend Development</h3>
            <p>Creating robust server-side solutions and RESTful APIs.</p>
            <div className="tags">
              <span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>MongoDB</span><span>Supabase</span>
            </div>
          </article>

          <article className="expertise-card">
            <div className="expertise-icon"><i className="fas fa-mobile-alt" /></div>
            <h3>Responsive Design</h3>
            <p>Crafting seamless experiences across devices and screen sizes.</p>
            <div className="tags">
              <span>Mobile First</span><span>PWAs</span><span>Cross-Browser</span>
            </div>
          </article>

          <article className="expertise-card">
            <div className="expertise-icon"><i className="fas fa-cloud" /></div>
            <h3>Cloud & DevOps</h3>
            <p>Deploying and maintaining scalable applications.</p>
            <div className="tags">
              <span>AWS</span><span>Vercel</span><span>Docker</span><span>CI/CD</span>
            </div>
          </article>

          <article className="expertise-card">
            <div className="expertise-icon"><i className="fas fa-pencil-ruler" /></div>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and beautiful user interfaces.</p>
            <div className="tags">
              <span>Figma</span><span>Adobe XD</span><span>Prototyping</span><span>Design Systems</span>
            </div>
          </article>

          <article className="expertise-card">
            <div className="expertise-icon"><i className="fas fa-tachometer-alt" /></div>
            <h3>Performance</h3>
            <p>Optimizing applications for speed and efficiency.</p>
            <div className="tags">
              <span>Lighthouse</span><span>Core Web Vitals</span><span>SEO</span><span>Accessibility</span>
            </div>
          </article>
        </div>
      </section>

      {/* Journey */}
      <section className="journey">
        <h2 className="section-title">My Journey</h2>
        <p>
          My journey into development started with a foundation in cybersecurity, where I learned to think critically
          about systems, security, and architecture. This background gives me a unique perspective on building robust,
          secure applications.
        </p>
        <p>
          Transitioning into full-stack development, I’ve honed my skills across the entire stack — from designing
          beautiful, responsive frontends to architecting scalable backend systems. I believe great software is a blend
          of technical excellence and thoughtful design.
        </p>
        <p>
          Whether it’s building a complex dashboard, a sleek landing page, or a full-featured web application, I
          approach every project with attention to detail and a commitment to quality.
        </p>
      </section>
    </div>
  )
}
