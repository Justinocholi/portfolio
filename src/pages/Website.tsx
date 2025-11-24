import '../styles/website.css'

export default function Website() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <h1>Website Projects</h1>
        <p>
          Clean, fast, and responsive websites. I focus on sharp visuals,
          accessible UI, and delightful interactions tailored to your brand.
        </p>
      </section>

      {/* Projects Grid */}
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src="/cows.jpg" alt="Farmbarn Africa" />
          </div>
          <div className="project-content">
            <h3>Farmbarn Africa</h3>
            <p>
              E-commerce website for agricultural products and services.
              Includes product catalog, order management, and analytics.
            </p>
            <div className="tags">
              <span>React</span><span>TypeScript</span><span>Vite</span>
            </div>
            <div className="actions">
              <a href="https://www.linkedin.com/posts/joshua-ocholi2k7_farmbarn-ecommerce-webdevelopment-activity-7350598577565351936-EYlC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADG520UBJQT9aPr4Cwvv2hBBv3b2XiY4Zdg" target="_blank" rel="noreferrer" className="btn btn-secondary">Overview</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="/meca.jpg" alt="MECA Platform" />
          </div>
          <div className="project-content">
            <h3>MECA Platform</h3>
            <p>
              Community platform prototype with authentication, profiles, and content feeds.
              Built with component-driven architecture.
            </p>
            <div className="tags">
              <span>React</span><span>CSS</span><span>SPA</span>
            </div>
            <div className="actions">
              <a href="#" className="btn btn-secondary">Case Study</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="/top.jpg" alt="Personal Portfolio" />
          </div>
          <div className="project-content">
            <h3>Personal Portfolio</h3>
            <p>
              Modern portfolio site showcasing development, artistry, and social media work.
              Responsive design and smooth interactions.
            </p>
            <div className="tags">
              <span>React</span><span>Router</span><span>CSS</span>
            </div>
            <div className="actions">
              <a href="/" className="btn btn-secondary">View Live</a>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <h2 className="section-title">Platform Expertise</h2>
      <div className="platform-grid">
        <div className="platform-card">
          <div className="platform-icon">⚡</div>
          <div className="platform-title">Performance & Speed</div>
          <p className="platform-description">Optimized builds, caching, and Core Web Vitals focus.</p>
          <div className="platform-tags"><span>Core Web Vitals</span><span>Code Splitting</span><span>Lazy Loading</span></div>
        </div>
        <div className="platform-card">
          <div className="platform-icon">♿</div>
          <div className="platform-title">Accessible Design</div>
          <p className="platform-description">Inclusive UI with proper semantics and color contrast.</p>
          <div className="platform-tags"><span>WCAG</span><span>Semantics</span><span>Keyboard Nav</span></div>
        </div>
        <div className="platform-card">
          <div className="platform-icon">🔧</div>
          <div className="platform-title">Maintainable Code</div>
          <p className="platform-description">Component-driven architecture with clear separation of concerns.</p>
          <div className="platform-tags"><span>Typescript</span><span>Reusable Components</span><span>Linting</span></div>
        </div>
        <div className="platform-card">
          <div className="platform-icon">📈</div>
          <div className="platform-title">Scalable Architecture</div>
          <p className="platform-description">Modular patterns and CI-ready workflows for growth.</p>
          <div className="platform-tags"><span>SPA/MPA</span><span>Routing</span><span>CI/CD</span></div>
        </div>
        <div className="platform-card">
          <div className="platform-icon">🔍</div>
          <div className="platform-title">SEO & Discoverability</div>
          <p className="platform-description">Semantic markup and metadata for search-friendly pages.</p>
          <div className="platform-tags"><span>Meta Tags</span><span>Open Graph</span><span>Sitemaps</span></div>
        </div>
        <div className="platform-card">
          <div className="platform-icon">🛡️</div>
          <div className="platform-title">Security & Reliability</div>
          <p className="platform-description">Best practices for safe, stable deployments.</p>
          <div className="platform-tags"><span>HTTPS</span><span>Headers</span><span>Monitoring</span></div>
        </div>
      </div>
    </div>
  )
}
