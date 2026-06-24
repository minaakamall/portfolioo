import Orb from "./Orb";
import "./Hero.css";

const STATS = [
  { num: "1+", label: "Years Coding" },
  { num: "5+", label: "Projects Built" },
  { num: "∞", label: "Curiosity" },
];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="first">MINA</span>
          <br />
          <span className="last">Portfolio</span>
        </h1>

        <p className="hero-role">
          &gt; Web Optimization Expert &amp; UI Enthusiast_
        </p>

        <p className="hero-desc">
          Write clean, bug-free, and scalable code that never breaks. Turning
          chaotic business problems into smooth, automated digital workflows. :
          Developers who handle everything from the user interface to the
          server.
        </p>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            VIEW WORK
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("contact")}>
            CONTACT ME
          </button>
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Orb />
    </section>
  );
}
