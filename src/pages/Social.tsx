import '../styles/social.css'

export default function Social() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <h1>Social Media Management</h1>
        <p>
          Amplifying brands through strategic content, authentic engagement, and data-driven
          growth across all major social platforms.
        </p>
      </section>

      {/* What I Offer */}
      <h2 className="section-title">What I Offer</h2>
      <div className="offer-grid">
        <div className="offer-card">
          <div className="offer-icon"><img src="/bullseye.svg" alt="Content Strategy" /></div>
          <h3>Content Strategy</h3>
          <p>Data-driven content plans that resonate and drive engagement.</p>
          <div className="offer-tags">
            <span>Content Calendar</span><span>Audience Research</span><span>Platform Optimization</span><span>Trend Analysis</span>
          </div>
        </div>
        <div className="offer-card">
          <div className="offer-icon"><img src="/people.svg" alt="Community Management" /></div>
          <h3>Community Management</h3>
          <p>Build and nurture engaged communities that become brand advocates.</p>
          <div className="offer-tags">
            <span>Active Engagement</span><span>Response Management</span><span>Community Growth</span><span>Brand Loyalty</span>
          </div>
        </div>
        <div className="offer-card">
          <div className="offer-icon"><img src="/bar-chart.svg" alt="Growth & Analytics" /></div>
          <h3>Growth & Analytics</h3>
          <p>Use insights and metrics to optimize performance and reach.</p>
          <div className="offer-tags">
            <span>Performance Tracking</span><span>A/B Testing</span><span>Growth Strategies</span><span>ROI Analysis</span>
          </div>
        </div>
        <div className="offer-card">
          <div className="offer-icon"><img src="/message.svg" alt="Brand Messaging" /></div>
          <h3>Brand Messaging</h3>
          <p>Craft consistent, compelling brand voices across social platforms.</p>
          <div className="offer-tags">
            <span>Voice Development</span><span>Copywriting</span><span>Brand Guidelines</span><span>Storytelling</span>
          </div>
        </div>
      </div>

      {/* Platform Expertise */}
      <h2 className="section-title">Platform Expertise</h2>
      <div className="expertise-grid">
        <div className="expertise-card gradient-instagram">
          <div className="expertise-title">Instagram</div>
          <div className="expertise-metric">50K+ Reach</div>
        </div>
        <div className="expertise-card gradient-twitter">
          <div className="expertise-title">Twitter/X</div>
          <div className="expertise-metric">30K+ Impressions</div>
        </div>
        <div className="expertise-card gradient-linkedin">
          <div className="expertise-title">LinkedIn</div>
          <div className="expertise-metric">20K+ Connections</div>
        </div>
        <div className="expertise-card gradient-tiktok">
          <div className="expertise-title">TikTok</div>
          <div className="expertise-metric">100K+ Views</div>
        </div>
        <div className="expertise-card gradient-youtube">
          <div className="expertise-title">YouTube</div>
          <div className="expertise-metric">25K+ Subscribers</div>
        </div>
        <div className="expertise-card gradient-facebook">
          <div className="expertise-title">Facebook</div>
          <div className="expertise-metric">40K+ Engagement</div>
        </div>
      </div>

      {/* Clients I Manage */}
      <h2 className="section-title">Clients I Manage</h2>
      <p className="section-subtitle center">
        Building engaged communities and driving authentic growth across diverse brands and personalities.
      </p>
      <div className="clients-grid">
        <div className="client-card">
          <div className="client-header gradient-twitter"><i className="fab fa-twitter"></i></div>
          <div className="client-body">
            <div className="client-name">Haha Hyenas NFT</div>
            <div className="client-handle">@hahahyenasnft</div>
            <div className="client-tag">NFT community and digital art collective</div>
            <div className="client-actions">
              <a className="btn btn-light" target="_blank" rel="noreferrer" href="https://x.com/hahahyenasnft?s=21&t=J43VucQEVPTaJEpFndRxWA">View Profile</a>
            </div>
          </div>
        </div>

        <div className="client-card">
          <div className="client-header gradient-instagram"><i className="fab fa-instagram"></i></div>
          <div className="client-body">
            <div className="client-name">The Six Lovitoz</div>
            <div className="client-handle">@thesix_lovitoz</div>
            <div className="client-tag">Music collective and creative artists</div>
            <div className="client-actions">
              <a className="btn btn-light" target="_blank" rel="noreferrer" href="https://www.instagram.com/thesix_lovitoz?igsh=cGg0YWI2cDkzOTR3">View Profile</a>
            </div>
          </div>
        </div>

        <div className="client-card">
          <div className="client-header gradient-instagram"><i className="fab fa-instagram"></i></div>
          <div className="client-body">
            <div className="client-name">Vagz Perfumes</div>
            <div className="client-handle">@vagzperfumes</div>
            <div className="client-tag">Beauty & Lifestyle</div>
            <div className="client-actions">
              <a className="btn btn-light" target="_blank" rel="noreferrer" href="https://www.instagram.com/vagzperfumes?igsh=dTRsdmJhcWhiam41">View Profile</a>
            </div>
          </div>
        </div>

        <div className="client-card">
          <div className="client-header gradient-instagram"><i className="fab fa-instagram"></i></div>
          <div className="client-body">
            <div className="client-name">Campus Digest MX</div>
            <div className="client-handle">@campusdigestmx</div>
            <div className="client-tag">Education & News</div>
            <div className="client-actions">
              <a className="btn btn-light" target="_blank" rel="noreferrer" href="https://www.instagram.com/campusdigestmx?igsh=bm5lbHp5MW01Yml1">View Profile</a>
            </div>
          </div>
        </div>

        <div className="client-card">
          <div className="client-header gradient-instagram"><i className="fab fa-instagram"></i></div>
          <div className="client-body">
            <div className="client-name">Dee Bible Study</div>
            <div className="client-handle">@dee_biblestudy</div>
            <div className="client-tag">Faith community</div>
            <div className="client-actions">
              <a className="btn btn-light" target="_blank" rel="noreferrer" href="https://www.instagram.com/dee_biblestudy?igsh=a3R3bGpwczliZjVx&utm_source=qr">View Profile</a>
            </div>
          </div>
        </div>

        <div className="client-card">
          <div className="client-header gradient-instagram"><i className="fab fa-instagram"></i></div>
          <div className="client-body">
            <div className="client-name">Bad Boi Abaga</div>
            <div className="client-handle">@bad.boiabaga.10</div>
            <div className="client-tag">Music & Entertainment</div>
            <div className="client-actions">
              <a className="btn btn-light" target="_blank" rel="noreferrer" href="https://www.instagram.com/bad.boiabaga.10">View Profile</a>
            </div>
          </div>
        </div>

        <div className="client-card">
          <div className="client-header gradient-twitter"><i className="fab fa-twitter"></i></div>
          <div className="client-body">
            <div className="client-name">Munchild Abaga</div>
            <div className="client-handle">@munchildabaga</div>
            <div className="client-tag">Content Creator</div>
            <div className="client-actions">
              <a className="btn btn-light" target="_blank" rel="noreferrer" href="https://x.com/munchildabaga?s=21&t=J43VucQEVPTaJEpFndRxWA">View Profile</a>
            </div>
          </div>
        </div>

        <div className="client-card">
          <div className="client-header gradient-twitter"><i className="fab fa-twitter"></i></div>
          <div className="client-body">
            <div className="client-name">Daddy of Buj</div>
            <div className="client-handle">@daddyofbuj</div>
            <div className="client-tag">Entertainment</div>
            <div className="client-actions">
              <a className="btn btn-light" target="_blank" rel="noreferrer" href="https://x.com/daddyofbuj?s=21&t=J43VucQEVPTaJEpFndRxWA">View Profile</a>
            </div>
          </div>
        </div>
      </div>

      {/* My Approach */}
      <h2 className="section-title">My Approach</h2>
      <div className="approach-list">
        <div className="approach-item">
          <div className="approach-icon"><img src="/calendar-2.svg" alt="Planning" /></div>
          <div className="approach-content">
            <h3>Strategic Planning</h3>
            <p>Every successful social presence starts with a solid strategy — analyzing brand, audience, and goals to create a customized content roadmap.</p>
          </div>
        </div>
        <div className="approach-item">
          <div className="approach-icon"><img src="/message.svg" alt="Engagement" /></div>
          <div className="approach-content">
            <h3>Authentic Engagement</h3>
            <p>Building relationships that spark conversations and foster genuine community connections through meaningful content.</p>
          </div>
        </div>
        <div className="approach-item">
          <div className="approach-icon"><img src="/bar-chart.svg" alt="Optimization" /></div>
          <div className="approach-content">
            <h3>Data-Driven Optimization</h3>
            <p>Continuous analysis to refine strategies, test new approaches, and maximize ROI across platforms.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
