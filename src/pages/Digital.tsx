import '../styles/digital.css'

export default function Digital() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <h1>Digital Marketing</h1>
        <p>
          Data-driven marketing strategies that drive growth, maximize ROI, and build lasting
          customer relationships through analytics, optimization, and creative campaigns.
        </p>
      </section>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">250%</div>
          <div className="stat-label">Avg. ROI Increase</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">500K+</div>
          <div className="stat-label">Leads Generated</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">50+</div>
          <div className="stat-label">Campaigns Managed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">95%</div>
          <div className="stat-label">Client Retention</div>
        </div>
      </div>

      {/* Services & Expertise */}
      <h2 className="section-title">Services & Expertise</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon"><img src="/chart-line-area.svg" alt="Analytics" width={32} height={32} /></div>
          <h3 className="service-title">Analytics & Insights</h3>
          <p className="service-description">Transform raw data into actionable insights that drive business growth and decision-making.</p>
          <div className="service-tags">
            <span>Google Analytics</span><span>Conversion Tracking</span><span>User Behavior</span><span>KPI Dashboards</span>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon"><img src="/megaphone-1.svg" alt="Campaign Planning" width={32} height={32} /></div>
          <h3 className="service-title">Campaign Planning</h3>
          <p className="service-description">Design and execute multi-channel marketing campaigns that reach and convert your target audience.</p>
          <div className="service-tags">
            <span>Strategy Development</span><span>Multi-Channel</span><span>Budget Optimization</span><span>A/B Testing</span>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon"><img src="/magnifying-glass-tilted-right.svg" alt="SEO & SEM" width={32} height={32} /></div>
          <h3 className="service-title">SEO & SEM</h3>
          <p className="service-description">Increase visibility and drive qualified traffic through search engine optimization and marketing.</p>
          <div className="service-tags">
            <span>Keyword Research</span><span>On-Page SEO</span><span>Google Ads</span><span>Performance</span>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon"><img src="/mail-incoming.svg" alt="Email Marketing" width={32} height={32} /></div>
          <h3 className="service-title">Email Marketing</h3>
          <p className="service-description">Build and nurture relationships through targeted, personalized email campaigns.</p>
          <div className="service-tags">
            <span>Automation</span><span>Segmentation</span><span>Copywriting</span><span>Analytics</span>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon"><img src="/stopwatch.svg" alt="Conversion Optimization" width={32} height={32} /></div>
          <h3 className="service-title">Conversion Optimization</h3>
          <p className="service-description">Maximize ROI by optimizing every touchpoint in the customer journey.</p>
          <div className="service-tags">
            <span>Funnel Analysis</span><span>Landing Pages</span><span>CRO Testing</span><span>UX Improvements</span>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon"><img src="/thunderbolt-filled.svg" alt="Growth Strategies" width={32} height={32} /></div>
          <h3 className="service-title">Growth Strategies</h3>
          <p className="service-description">Develop and implement scalable strategies for sustainable business growth.</p>
          <div className="service-tags">
            <span>Market Analysis</span><span>Customer Acquisition</span><span>Retention</span><span>Scaling</span>
          </div>
        </div>
      </div>

      {/* Marketing Philosophy */}
      <h2 className="section-title">Marketing Philosophy</h2>
      <div className="philosophy-section">
        <p>Digital marketing isn't just about driving traffic — it's about understanding your audience, delivering value, and creating meaningful connections that convert into long-term customer relationships.</p>
        <p>I approach every campaign with a data-first mindset. By analyzing user behavior, market trends, and performance metrics, I craft strategies that don't just look good on paper, but deliver measurable results.</p>
        <p>Whether it's optimizing conversion funnels, running paid campaigns, or building organic growth strategies, I focus on what matters most: sustainable growth and real ROI for your business.</p>
      </div>

      {/* My Process */}
      <h2 className="section-title">My Process</h2>
      <div className="process-grid">
        <div className="process-card">
          <div className="process-number">01</div>
          <div>
            <h3 className="process-title">Research & Strategy</h3>
            <p className="process-description">Deep dive into your market, audience, and competitors to build a data-backed strategy.</p>
          </div>
        </div>
        <div className="process-card">
          <div className="process-number">02</div>
          <div>
            <h3 className="process-title">Execute & Optimize</h3>
            <p className="process-description">Launch campaigns with continuous testing and optimization for maximum performance.</p>
          </div>
        </div>
        <div className="process-card">
          <div className="process-number">03</div>
          <div>
            <h3 className="process-title">Analyze & Scale</h3>
            <p className="process-description">Monitor results, extract insights, and scale what works for sustainable growth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
