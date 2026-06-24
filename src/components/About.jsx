import { useScrollFade } from '../hooks/useScrollFade'
import './About.css'

const PILLS = ['React', 'Supabase', 'JavaScript', 'CSS3', 'Git', 'Netlify', 'Vite', 'HTML5']

export default function About() {
  const textRef    = useScrollFade()
  const termRef    = useScrollFade()

  return (
    <section id="about" className="about-section">
      <div className="about-grid">

        <div ref={textRef} className="about-text fade-in">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-num">03</span>
            <div className="section-line" />
          </div>
          <h2>
            Building the web,<br />
            <em>one commit at a time.</em>
          </h2>
          <p>
            I'm Mina, a junior frontend developer based in Egypt with a passion
            for creating web experiences that are fast, beautiful, and functional.
          </p>
          <p>
            I learn by building real things — from my first HTML page to a fully
            deployed e-commerce store with a live backend. Every project teaches
            me something new.
          </p>
          <p>
            Currently focused on deepening my React knowledge and expanding into
            full-stack development.
          </p>
          <div className="about-pills">
            {PILLS.map((p) => <span key={p} className="pill">{p}</span>)}
          </div>
        </div>

        <div ref={termRef} className="about-visual fade-in" style={{ transitionDelay: '0.15s' }}>
          <div className="about-card">
            <div className="terminal-line"><span className="cmd">const</span> <span className="val">mina</span> = {'{'}</div>
            <div className="terminal-line">&nbsp;&nbsp;<span className="str">name:</span> <span className="val">"Mina"</span>,</div>
            <div className="terminal-line">&nbsp;&nbsp;<span className="str">role:</span> <span className="val">"Frontend Dev"</span>,</div>
            <div className="terminal-line">&nbsp;&nbsp;<span className="str">location:</span> <span className="val">"Cairo, Egypt"</span>,</div>
            <div className="terminal-line">&nbsp;&nbsp;<span className="str">focus:</span> <span className="val">"React &amp; UI"</span>,</div>
            <div className="terminal-line">&nbsp;&nbsp;<span className="str">available:</span> <span className="cmd">true</span>,</div>
            <div className="terminal-line">&nbsp;&nbsp;<span className="str">loves:</span> [<span className="val">"building"</span>,</div>
            <div className="terminal-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="val">"designing"</span>,</div>
            <div className="terminal-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="val">"shipping"</span>]</div>
            <div className="terminal-line">{'};'}<span className="terminal-cursor" /></div>
          </div>
        </div>

      </div>
    </section>
  )
}
