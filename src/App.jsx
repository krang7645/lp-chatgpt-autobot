import './App.css'
import { useEffect, useRef } from 'react'

function App() {
  const formRef = useRef(null)

  // スムーススクロール
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  // アニメーション効果
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)
    document.querySelectorAll('.benefit-card, .problem-item, .preview-card').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // フォーム送信
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    if (name && email) {
      window.alert('ご登録ありがとうございます！\n特典資料をメールでお送りいたします。')
      e.target.reset()
    }
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
          <form className="register-form" onSubmit={handleSubmit} autoComplete="off">
            <input type="text" placeholder="Your Name" required id="name" name="name" />
            <input type="email" placeholder="Email Address" required id="email" name="email" />
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
