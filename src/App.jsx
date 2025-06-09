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
    <div className="app-root">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="free-badge">🎁 無料配布中</div>
            <h1>今すぐ使える！<br />ChatGPTで仕事を自動化する<br />3ステップテンプレ</h1>
            <p className="subtitle">「ChatGPTで作業を手放す」ためのテンプレとツール早見表を無料でプレゼント！</p>
            <a href="#form" className="cta-button">無料で特典を受け取る</a>
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">🎯 今すぐ手に入る特典内容</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📝</div>
              <h3>ChatGPT指示テンプレ集</h3>
              <p>即効性のある厳選されたプロンプトテンプレートで、ChatGPTを最大限活用できます</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🗺️</div>
              <h3>自動化ツールマップ</h3>
              <p>用途別に最適なツールが一目でわかる完全ガイドマップ</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Googleスプレッドシート<br />保存用テンプレ</h3>
              <p>効果的な自動化の記録と管理ができるテンプレート</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="problems">
        <div className="container">
          <h2 className="section-title">こんなお悩みありませんか？</h2>
          <div className="problems-list">
            <div className="problem-item">
              <span className="check-icon">✅</span>
              <span>ChatGPTの活用方法がわからない</span>
            </div>
            <div className="problem-item">
              <span className="check-icon">✅</span>
              <span>日々の作業が時間を奪っている</span>
            </div>
            <div className="problem-item">
              <span className="check-icon">✅</span>
              <span>ツール選びで迷っている</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sample / Preview */}
      <section className="cta-section">
        <div className="container">
          <h2 style={{ marginBottom: 30, fontSize: '2rem' }}>これらの悩みを3ステップで解決！</h2>
          <a href="#form" className="cta-button">無料で特典を受け取る</a>
        </div>
      </section>

      {/* Registration Form */}
      <section className="showcase">
        <div className="container">
          <h2 className="section-title">📸 テンプレート内容を一部公開</h2>
          <div className="preview-container">
            <div className="preview-card">
              <div className="preview-image">
                <div>
                  <div style={{ fontSize: '2rem' }}>📝</div>
                  <div>指示テンプレ集<br />プレビュー</div>
                </div>
              </div>
              <h3>プロンプトテンプレート</h3>
              <p>業務効率化に特化した実用的なテンプレート集</p>
            </div>
            <div className="preview-card">
              <div className="preview-image">
                <div>
                  <div style={{ fontSize: '2rem' }}>🗺️</div>
                  <div>ツールマップ<br />サンプル</div>
                </div>
              </div>
              <h3>自動化ツールマップ</h3>
              <p>用途別ツール選択ガイドの一部をご紹介</p>
            </div>
            <div className="preview-card">
              <div className="preview-image">
                <div>
                  <div style={{ fontSize: '2rem' }}>📊</div>
                  <div>スプレッドシート<br />テンプレ</div>
                </div>
              </div>
              <h3>管理用テンプレート</h3>
              <p>効果測定と継続改善のためのシート</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="form-section" id="form" ref={formRef}>
        <div className="container">
          <h2 className="section-title">🎁 無料特典を今すぐ受け取る</h2>
          <div className="form-container">
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="name">お名前 *</label>
                <input type="text" id="name" name="name" required placeholder="山田太郎" />
              </div>
              <div className="form-group">
                <label htmlFor="email">メールアドレス *</label>
                <input type="email" id="email" name="email" required placeholder="example@email.com" />
              </div>
              <button type="submit" className="submit-btn">無料で特典を受け取る</button>
            </form>
            <div className="line-option">
              <p>または</p>
              <a href="#" className="line-btn">📱 LINEで受け取る</a>
            </div>
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
