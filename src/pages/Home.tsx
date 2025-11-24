import '../styles/home.css'
import MusicCard from '../components/MusicCard'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            <span className="highlight">Hi, I'm</span> <span className="gray">Joshua</span>
          </h1>
          <h2>Full-Stack Developer • Artist • Social Media Manager • Digital Marketer</h2>
          <p>
            I craft exceptional web experiences, produce creative music, and drive digital growth. With expertise spanning
            code, creativity, and marketing strategy, I bring ideas to life across multiple dimensions.
          </p>
          <div className="hero-buttons">
            <a href="/website" className="btn btn-primary">See My Work</a>
            <a href="#contact" className="btn btn-secondary">Hire Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <img src="/bottom.jpg" alt="Joshua" />
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="what-i-do" id="development">
        <h2 className="section-title">What I Do</h2>
        <p className="section-subtitle">Blending technical expertise with creative vision across multiple domains</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon icon-blue"><i className="fas fa-code" /></div>
            <h3>Full-Stack Development</h3>
            <p>Web apps, landing pages, dashboards, and user-focused solutions built with modern technologies.</p>
          </div>
          <div className="service-card">
            <div className="service-icon icon-orange"><i className="fas fa-palette" /></div>
            <h3>Artist</h3>
            <p>Afrobeats, trap, EDM, alternative sound, visual storytelling, and creative expression.</p>
          </div>
          <div className="service-card">
            <div className="service-icon icon-purple"><i className="fas fa-bullhorn" /></div>
            <h3>Social Media Management</h3>
            <p>Content strategy, audience growth, brand messaging that resonates and engages.</p>
          </div>
          <div className="service-card">
            <div className="service-icon icon-green"><i className="fas fa-chart-line" /></div>
            <h3>Digital Marketing</h3>
            <p>Analytics, campaign planning, engagement optimization for measurable results.</p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section" id="social">
        <h2 className="section-title">Connect Across Platforms</h2>
        <p className="section-subtitle">Follow my journey across social media - from code to creativity</p>

        <div className="social-platforms">
          <a href="https://www.youtube.com/@MunchildAbaga" className="platform-btn youtube">
            <i className="fab fa-youtube" />
            <div>
              <div style={{ fontSize: '1.2rem' }}>YouTube</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>@MunchildAbaga</div>
            </div>
          </a>
          <a href="https://www.instagram.com/bad.boiabaga.10/" className="platform-btn instagram">
            <i className="fab fa-instagram" />
            <div>
              <div style={{ fontSize: '1.2rem' }}>Instagram</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>@BadboiAbaga</div>
            </div>
          </a>
          <a href="https://x.com/MunchildAbaga" className="platform-btn twitter">
            <i className="fab fa-twitter" />
            <div>
              <div style={{ fontSize: '1.2rem' }}>X</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>@MunchildAbaga</div>
            </div>
          </a>
        </div>

        <div className="social-feed">
          <div className="feed-card">
            <div className="feed-image">
              <a href="https://youtu.be/sLUgnYqv3Mk" target="_blank">
                <img src="https://img.youtube.com/vi/sLUgnYqv3Mk/maxresdefault.jpg" alt="YouTube Thumbnail" />
              </a>
            </div>
            <div className="feed-content">
              <p className="feed-title">I'll Be Fine – Snippet</p>
              <div className="feed-stats">
                <span><i className="fas fa-eye" /> 12.4K</span>
                <span><i className="far fa-heart" /> 1.1K</span>
                <span><i className="far fa-comment" /> 63</span>
              </div>
              <a className="watch-btn" href="https://youtu.be/sLUgnYqv3Mk" target="_blank">Watch on YouTube →</a>
            </div>
          </div>

          <div className="feed-card">
            <div className="feed-image">
              <img src="/do you (2).png" alt="Do You" />
            </div>
            <div className="feed-content">
              <p>Do You (Snippet)</p>
              <div className="feed-stats">
                <span><i className="far fa-heart" /> 2.3K</span>
                <span><i className="far fa-comment" /> 187</span>
              </div>
              <a className="watch-btn" href="https://www.instagram.com/bad.boiabaga.10/reel/DO7coPeinAV/" target="_blank">Watch on Instagram →</a>
            </div>
          </div>

          <div className="feed-card">
            <div className="feed-image">
              <img src="/cows.jpg" alt="Farmbarn" />
            </div>
            <div className="feed-content">
              <p>Progress update from the Farmbarn build!</p>
              <div className="feed-stats">
                <span><i className="far fa-heart" /> 847</span>
                <span><i className="far fa-comment" /> 45</span>
              </div>
              <a className="watch-btn" href="https://www.linkedin.com/posts/joshua-ocholi2k7_farmbarn-ecommerce-webdevelopment-activity-7350598577565351936-EYlC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADG520UBJQT9aPr4Cwvv2hBBv3b2XiY4Zdg" target="_blank">Watch on linkedin →</a>
            </div>
          </div>

          <div className="feed-card">
            <div className="feed-image">
              <img src="https://img.youtube.com/vi/JV31CITw4Mk/hqdefault.jpg" alt="YouTube Thumbnail" className="youtube-thumbnail" />
            </div>
            <div className="feed-content">
              <p>Working on something special. Stay tuned.</p>
              <div className="feed-stats">
                <span><i className="far fa-heart" /> 623</span>
                <span><i className="far fa-comment" /> 32</span>
              </div>
            </div>
            <a className="watch-btn" href="https://www.youtube.com/watch?v=JV31CITw4Mk" target="_blank">Watch on youtube →</a>
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="artist-section" id="artist">
        <h2 className="section-title"><i className="fas fa-music" /> Artist Spotlight</h2>
        <p className="section-subtitle">I create Afrobeats, trap, EDM, and alternative-inspired sound — blending emotion and originality to craft music that moves both body and soul.</p>
        <div className="music-grid">
          <MusicCard src="/love.mp3" title="Love" />
          <MusicCard src="/Don't Know How I Got Here.mp3" title="Don't Know" />
          <MusicCard src="/Fell in Love Again (1).mp3" title="Again" />
        </div>
        <div className="artist-buttons">
          <a href="https://www.youtube.com/@MunchildAbaga" className="btn btn-primary"><i className="fas fa-headphones" /> Listen to More</a>
          <a href="#contact" className="btn btn-secondary">Connect With Me <i className="fas fa-external-link-alt" /></a>
        </div>
      </section>

      {/* About Me */}
      <section className="about-section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A journey through code, creativity, and digital innovation</p>
        <div className="about-content">
          <div className="about-image">
            <img src="/top.jpg" alt="Joshua" />
          </div>
          <div className="about-text">
            <div className="about-item">
              <div className="about-icon icon-cyan"><i className="fas fa-shield-alt" /></div>
              <div>
                <h4>My journey began in <strong>cybersecurity</strong></h4>
                <p>where I learned to think critically about systems, security, and user protection.</p>
              </div>
            </div>
            <div className="about-item">
              <div className="about-icon icon-blue-light"><i className="fas fa-code" /></div>
              <div>
                <h4>This foundation led me to <strong>full-stack development</strong></h4>
                <p>where I build scalable web applications that solve real problems and deliver exceptional user experiences.</p>
              </div>
            </div>
            <div className="about-item">
              <div className="about-icon icon-orange-light"><i className="fas fa-music" /></div>
              <div>
                <h4>Beyond code, I'm an <strong>artist and producer</strong></h4>
                <p>creating music that blends Afrobeats, trap, EDM, and alternative sounds — each track telling a unique story.</p>
              </div>
            </div>
            <div className="about-item">
              <div className="about-icon icon-green-light"><i className="fas fa-chart-line" /></div>
              <div>
                <h4>My work in <strong>social media management and digital marketing</strong></h4>
                <p>lets me combine analytical thinking with creative strategy to help brands grow and connect with their audiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What People Say</h2>
        <p className="section-subtitle">Testimonials from clients, collaborators, and team leads</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
            <p>"Joshua's full-stack expertise transformed our vision into a stunning, functional web application. His attention to detail and creative problem-solving exceeded all expectations."</p>
            <div className="testimonial-author"><h4>Tomiwa</h4><p>CEO, Farmbarn Africa.</p></div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
            <p>"Working with Joshua on our collaborative track was incredible. His unique sound blends genres seamlessly, and his production quality is absolutely top-tier."</p>
            <div className="testimonial-author"><h4>BerryVibez</h4><p>Artist</p></div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
            <p>"Joshua's digital marketing strategies helped us triple our engagement in just three months. His understanding of both the creative and analytical sides is remarkable."</p>
            <div className="testimonial-author"><h4>Blessing</h4><p>Marketing Director</p></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Have a project in mind? Want to collaborate? Let's talk!</p>
        <div className="contact-container">
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! I will get back to you soon.'); }}>
            <div className="form-row">
              <div className="form-group"><label>Name</label><input type="text" placeholder="Your name" required /></div>
              <div className="form-group"><label>Email</label><input type="email" placeholder="your@email.com" required /></div>
            </div>
            <div className="form-group">
              <label>Inquiry Type</label>
              <select required>
                <option value="">Select inquiry type</option>
                <option value="development">Web Development</option>
                <option value="music">Music Collaboration</option>
                <option value="social">Social Media Management</option>
                <option value="marketing">Digital Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group"><label>Message</label><textarea placeholder="Tell me about your project or inquiry..." required /></div>
            <a href="mailto:justinocholi001@gmail.com" className="submit-btn">Send Message <i className="fas fa-paper-plane" /></a>
          </form>
          <div className="contact-links">
            <h3>Social Links</h3>
            <a href="https://github.com/Justinocholi" className="contact-link"><i className="fab fa-github" /> <span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/joshua-ocholi2k7/" className="contact-link"><i className="fab fa-linkedin" /> <span>LinkedIn</span></a>
            <a href="https://x.com/MunchildAbaga" className="contact-link"><i className="fab fa-twitter" /> <span>X</span></a>
            <a href="https://www.instagram.com/munchildabaga/" className="contact-link"><i className="fab fa-instagram" /> <span>Instagram</span></a>
            <a href="https://www.youtube.com/@MunchildAbaga" className="contact-link"><i className="fab fa-youtube" /> <span>YouTube</span></a>
            <a href="mailto:justinocholi001@gmail.com" className="contact-link"><i className="fas fa-envelope" /> <span>Email</span></a>
          </div>
        </div>
      </section>
    </div>
  )
}
