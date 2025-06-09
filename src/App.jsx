import './App.css'
import { useRef } from 'react'

function App() {
  const formRef = useRef(null)

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="lp-bg">
      {/* ファーストビュー */}
      <section className="section-bg hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="main-catch">ChatGPTで作業を手放す<br />3ステップテンプレート無料配布中！</h1>
            <p className="hero-lead">今すぐ使える「ChatGPT指示テンプレ」と「自動化ツール早見表」を無料でプレゼント！</p>
            <button className="cta-btn big" onClick={handleScrollToForm}>無料で特典を受け取る</button>
          </div>
          <div className="hero-img">
            <img src="/vite.svg" alt="LPイメージ" />
          </div>
        </div>
      </section>

      {/* 特典・メリット */}
      <section className="section-bg-alt">
        <div className="card bonus-card">
          <h2>無料特典内容</h2>
          <div className="bonus-grid">
            <div className="bonus-item">
              <span className="bonus-icon">📝</span>
              <span>ChatGPT指示テンプレ集</span>
            </div>
            <div className="bonus-item">
              <span className="bonus-icon">🔗</span>
              <span>自動化ツールマップ</span>
            </div>
            <div className="bonus-item">
              <span className="bonus-icon">📊</span>
              <span>Googleスプレッドシート保存用テンプレ</span>
            </div>
          </div>
        </div>
      </section>

      {/* 悩み・解決 */}
      <section className="section-bg">
        <div className="card problems-card">
          <h2>こんなお悩みありませんか？</h2>
          <ul className="problems-list">
            <li>✅ ChatGPTの活用方法がわからない</li>
            <li>✅ 日々の作業が時間を奪っている</li>
            <li>✅ ツール選びで迷っている</li>
          </ul>
        </div>
      </section>

      {/* 実績・サンプル */}
      <section className="section-bg-alt">
        <div className="card sample-card">
          <h2>特典サンプル</h2>
          <div className="sample-flex">
            <img src="/vite.svg" alt="PDFサンプル" className="sample-img-large" />
            <div className="sample-pdf">
              <span>PDFの中身一部公開</span>
              <a href="#" className="pdf-link">サンプルを見る</a>
            </div>
          </div>
        </div>
      </section>

      {/* 登録フォーム */}
      <section className="section-bg" ref={formRef}>
        <div className="card form-card">
          <h2>無料特典を受け取る</h2>
          <form className="register-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="お名前" required />
            <input type="email" placeholder="メールアドレス" required />
            <button className="cta-btn big" type="submit">特典を受け取る</button>
          </form>
          <div className="line-invite">
            <span>または</span>
            <a href="#" className="line-btn">LINEで受け取る</a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer-bg">
        <div className="footer-inner">
          <small>© 2024 ChatGPT自動化テンプレLP</small>
        </div>
      </footer>
    </div>
  )
}

export default App
