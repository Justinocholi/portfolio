import '../styles/home.css'
import MusicCard from '../components/MusicCard'

export default function Artist() {
  return (
    <div>
      {/* Hero */}
      <section className="hero" id="artist-hero" style={{ minHeight: '40vh' }}>
        <div className="hero-content">
          <h1><span className="highlight">Music & Artistry</span></h1>
          <h2>Afrobeats • Trap • EDM • Alternative</h2>
          <p>
            I create emotive, genre-blending music that tells stories and connects. Explore featured tracks and works-in-progress below.
          </p>
          <div className="hero-buttons">
            <a href="#tracks" className="btn btn-primary"><i className="fas fa-headphones" /> Featured Tracks</a>
            <a href="#gallery" className="btn btn-secondary"><i className="fas fa-camera" /> Gallery</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <img src="/top.jpg" alt="Artist" />
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="artist-section" id="tracks">
        <h2 className="section-title"><i className="fas fa-music" /> Featured Tracks</h2>
        <p className="section-subtitle">Press play to listen. Use the seek bar to scrub.</p>
        <div className="music-grid">
          <MusicCard src="/love.mp3" title="Love" />
          <MusicCard src="/Don't Know How I Got Here.mp3" title="Don't Know How I Got Here" />
          <MusicCard src="/Fell in Love Again (1).mp3" title="Fell in Love Again" />
        </div>
        <div className="artist-buttons">
          <a href="https://www.youtube.com/@MunchildAbaga" className="btn btn-primary" target="_blank" rel="noreferrer">YouTube <i className="fab fa-youtube" /></a>
          <a href="#contact" className="btn btn-secondary">Collaborate <i className="fas fa-envelope" /></a>
        </div>
      </section>

      {/* Gallery */}
      <section className="what-i-do" id="gallery">
        <h2 className="section-title">Visual Gallery</h2>
        <p className="section-subtitle">Cover art, moments, and creative snapshots.</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon icon-purple"><i className="fas fa-image" /></div>
            <h3>I'll Be Fine</h3>
            <p>A cover concept reflecting resilience.</p>
            <img src="/I’ll be fine (1).png" alt="I'll Be Fine" style={{ width: '100%', borderRadius: 12, marginTop: 12 }} />
          </div>
          <div className="service-card">
            <div className="service-icon icon-orange"><i className="fas fa-image" /></div>
            <h3>Do You</h3>
            <p>Playful aesthetic with vibrant tones.</p>
            <img src="/do you (2).png" alt="Do You" style={{ width: '100%', borderRadius: 12, marginTop: 12 }} />
          </div>
          <div className="service-card">
            <div className="service-icon icon-blue"><i className="fas fa-image" /></div>
            <h3>Farmbarn</h3>
            <p>Moments from the Farmbarn build.</p>
            <img src="/cows.jpg" alt="Farmbarn" style={{ width: '100%', borderRadius: 12, marginTop: 12 }} />
          </div>
        </div>
      </section>
    </div>
  )
}
