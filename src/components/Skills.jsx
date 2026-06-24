import { useScrollFade } from "../hooks/useScrollFade";
import "./Skills.css";

const SKILLS = [
  {
    icon: "⚛",
    title: "Frontend",
    desc: "Building fast, reactive UIs with modern component-based architecture and clean state management.",
    tags: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: "🗄",
    title: "Backend & Data",
    desc: "Connecting frontend to real data with serverless backends, REST APIs, and database integrations.",
    tags: ["Supabase", "REST APIs", "SQL"],
  },
  {
    icon: "🚀",
    title: "Deploy & Tools",
    desc: "Getting projects live with modern deployment pipelines, version control, and dev tooling.",
    tags: ["Netlify", "Git", "GitHub"],
  },
];

function SkillCard({ skill, index }) {
  const ref = useScrollFade();
  return (
    <div
      ref={ref}
      className="skill-card fade-in"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="skill-icon">{skill.icon}</div>
      <h3>{skill.title}</h3>
      <p>{skill.desc}</p>
      <div className="skill-tags">
        {skill.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-num">01</span>
        <div className="section-line" />
        <h2 className="section-title">
          My <span className="accent">Stack</span>
        </h2>
      </div>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <SkillCard key={s.title} skill={s} index={i} />
        ))}
      </div>
    </section>
  );
}
