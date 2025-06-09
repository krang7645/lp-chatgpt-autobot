import './App.css'
import { useRef } from 'react'

function App() {
  const formRef = useRef(null)

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="lp-container">
      {/* ヒーローセクション */}
      <section className="hero">
        <h1>ChatGPTで作業を手放す<br />3ステップテンプレート無料配布中！</h1>
        <p className="hero-lead">今すぐ使える「ChatGPT指示テンプレ」と「自動化ツール早見表」を無料でプレゼント！</p>
        <button className="cta-btn" onClick={handleScrollToForm}>無料で特典を受け取る</button>
      </section>

      {/* 特典説明セクション */}
      <section className="bonus">
        <h2>無料特典内容</h2>
        <ul>
          <li>✅ ChatGPT指示テンプレ集</li>
          <li>✅ 自動化ツールマップ</li>
          <li>✅ Googleスプレッドシート保存用テンプレ</li>
        </ul>
      </section>

      {/* 解決する悩みセクション */}
      <section className="problems">
        <h2>こんなお悩みありませんか？</h2>
        <ul>
          <li>・ChatGPTの活用方法がわからない</li>
          <li>・日々の作業が時間を奪っている</li>
          <li>・ツール選びで迷っている</li>
        </ul>
      </section>

      {/* 実績・サンプルセクション */}
      <section className="sample">
        <h2>特典サンプル</h2>
        <div className="sample-images">
          <img src="/vite.svg" alt="PDFサンプル" className="sample-img" />
          <div className="sample-pdf">
            <span>PDFの中身一部公開</span>
            <a href="#" className="pdf-link">サンプルを見る</a>
          </div>
        </div>
      </section>

      {/* 登録フォームセクション */}
      <section className="register" ref={formRef}>
        <h2>無料特典を受け取る</h2>
        <form className="register-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="お名前" required />
          <input type="email" placeholder="メールアドレス" required />
          <button className="cta-btn" type="submit">特典を受け取る</button>
        </form>
        <div className="line-invite">
          <span>または</span>
          <a href="#" className="line-btn">LINEで受け取る</a>
        </div>
      </section>
    </div>
  )
}

export default App
