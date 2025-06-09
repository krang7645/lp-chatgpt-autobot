import './App.css'
import { useRef } from 'react'

function App() {
  const formRef = useRef(null)

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="lp-bg">
      {/* Hero Section */}
      <section className="section-bg hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="main-catch">ChatGPT Automation Master</h1>
            <p className="hero-lead">Get free templates and tools to automate your work with ChatGPT in 3 steps.</p>
            <button className="cta-btn big" onClick={handleScrollToForm}>Get Free Templates</button>
          </div>
          <div className="hero-img">
            <img src="/vite.svg" alt="LP Image" />
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="section-bg-alt">
        <div className="card bonus-card">
          <h2>What You Get</h2>
          <div className="bonus-grid">
            <div className="bonus-item">
              <span className="bonus-icon">📝</span>
              <span>Prompt Templates Collection</span>
            </div>
            <div className="bonus-item">
              <span className="bonus-icon">🔗</span>
              <span>Automation Tools Map</span>
            </div>
            <div className="bonus-item">
              <span className="bonus-icon">📊</span>
              <span>Google Sheets Template</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="section-bg">
        <div className="card problems-card">
          <h2>Is This For You?</h2>
          <ul className="problems-list">
            <li>✅ Not sure how to use ChatGPT effectively</li>
            <li>✅ Daily tasks are taking too much time</li>
            <li>✅ Unsure which tools to choose</li>
          </ul>
        </div>
      </section>

      {/* Sample / Preview */}
      <section className="section-bg-alt">
        <div className="card sample-card">
          <h2>Preview</h2>
          <div className="sample-flex">
            <img src="/vite.svg" alt="PDF Sample" className="sample-img-large" />
            <div className="sample-pdf">
              <span>See a sample of the PDF</span>
              <a href="#" className="pdf-link">View Sample</a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-bg" ref={formRef}>
        <div className="card form-card">
          <h2>Get Your Free Templates</h2>
          <form className="register-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <button className="cta-btn big" type="submit">Get Access</button>
          </form>
          <div className="line-invite">
            <span>or</span>
            <a href="#" className="line-btn">Get via LINE</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bg">
        <div className="footer-inner">
          <small>© 2024 ChatGPT Automation Master</small>
        </div>
      </footer>
    </div>
  )
}

export default App
