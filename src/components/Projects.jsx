import { useScrollFade } from "../hooks/useScrollFade";
import "./Projects.css";

const PROJECTS = [
  {
    id: "001",
    featured: true,
    title: "VapeStorm",
    desc: "A fully deployed Egyptian vape store — multi-page frontend with a Supabase backend for real-time product management, cart logic, and checkout flow. Live in production on Netlify.",
    stack: ["HTML/CSS/JS", "Supabase", "Netlify", "REST API"],
    url: "https://vapestorm-full.vercel.app/",
    visual: "vapestorm",
  },
  {
    id: "002",
    title: "OmniFood",
    desc: "OmniFood is a modern, responsive landing page for an AI-powered food subscription service that delivers personalized, healthy meals tailored to users' tastes and nutritional needs. Built with HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS3", "JavaScript"],
    url: "https://omnifood-woad.vercel.app/",
    visual: "portfolio",
  },
  {
    id: "03",
    featured: false,
    title: "Pizza Menu",
    desc: "A simple and responsive Pizza Menu application built with React. This project displays a list of pizzas with their ingredients, prices, and availability status. It was created to practice React fundamentals such as components, props, JSX, conditional rendering, and dynamic data rendering.",
    stack: ["React", "CSS3", "JSX"],
    url: "https://react-pizza-menu-two.vercel.app/",
    visual: "portfolio",
  },
  {
    id: "04",
    featured: false,
    title: "This Portfolio",
    desc: "A clean, professional portfolio built with React. Designed and coded by me, deployed on Netlify. Check the source code on GitHub.",
    stack: ["React", "GitHub", "CSS3"],
    url: "https://example.com",
    visual: "portfolio",
  },
  {
    id: "05",
    featured: false,
    title: "CafeBrew",
    desc: "A responsive landing page for a fictional coffee shop called CafeBrew. Built with HTML, CSS, and JavaScript, this project features a modern design, smooth scrolling, and interactive elements to showcase the cafe's menu and ambiance.",
    stack: ["HTML", "GitHub", "CSS3", "JavaScript"],
    url: "https://cafe-seven-olive.vercel.app/",
    visual: "portfolio",
  },
];

/* ── SVG Thumbnails ─────────────────────────────────── */
function VapeStormThumb() {
  return (
    <svg
      viewBox="0 0 600 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
    >
      <defs>
        <radialGradient id="vg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="300" fill="#060d14" />
      <ellipse cx="300" cy="150" rx="200" ry="120" fill="url(#vg1)" />
      {/* Product card */}
      <rect
        x="60"
        y="80"
        width="120"
        height="140"
        rx="2"
        fill="none"
        stroke="#00ff88"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <rect x="65" y="85" width="110" height="16" fill="#0d1e2e" rx="1" />
      <text
        x="75"
        y="97"
        fill="#00ff88"
        fontSize="7"
        fontFamily="monospace"
        opacity="0.8"
      >
        VapeStorm
      </text>
      <rect x="65" y="107" width="50" height="50" fill="#0a2010" rx="1" />
      <text x="90" y="137" fill="#00ff88" fontSize="16" textAnchor="middle">
        💨
      </text>
      <rect x="120" y="107" width="50" height="50" fill="#0a1520" rx="1" />
      <text x="145" y="137" fill="#00ccff" fontSize="16" textAnchor="middle">
        🔋
      </text>
      <rect
        x="65"
        y="163"
        width="110"
        height="24"
        fill="#00ff88"
        rx="1"
        opacity="0.9"
      />
      <text
        x="120"
        y="179"
        fill="#000"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        ADD TO CART
      </text>
      {/* Cart */}
      <rect
        x="200"
        y="60"
        width="180"
        height="180"
        rx="2"
        fill="none"
        stroke="#00ccff"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <rect x="210" y="70" width="160" height="30" fill="#0d1e2e" rx="1" />
      <text
        x="220"
        y="90"
        fill="#00ccff"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.8"
      >
        🛒 Cart (3 items)
      </text>
      <rect x="210" y="108" width="160" height="16" fill="#0a2010" rx="1" />
      <rect
        x="210"
        y="130"
        width="160"
        height="16"
        fill="#0a2010"
        rx="1"
        opacity="0.8"
      />
      <rect
        x="210"
        y="152"
        width="160"
        height="16"
        fill="#0a2010"
        rx="1"
        opacity="0.6"
      />
      <rect
        x="210"
        y="176"
        width="160"
        height="28"
        fill="#00ccff"
        rx="1"
        opacity="0.9"
      />
      <text
        x="290"
        y="195"
        fill="#000"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="bold"
        textAnchor="middle"
      >
        CHECKOUT →
      </text>
      {/* DB badge */}
      <rect
        x="400"
        y="80"
        width="140"
        height="60"
        rx="1"
        fill="none"
        stroke="#ff00aa"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <text
        x="470"
        y="108"
        fill="#ff00aa"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.7"
        textAnchor="middle"
      >
        Supabase DB
      </text>
      <text
        x="470"
        y="122"
        fill="#ff00aa"
        fontSize="7"
        fontFamily="monospace"
        opacity="0.5"
        textAnchor="middle"
      >
        products: 24 rows
      </text>
      <line
        x1="380"
        y1="110"
        x2="400"
        y2="110"
        stroke="#ff00aa"
        strokeWidth="0.5"
        opacity="0.4"
        strokeDasharray="3,2"
      />
    </svg>
  );
}

function PortfolioThumb() {
  return (
    <svg
      viewBox="0 0 340 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
    >
      <rect width="340" height="200" fill="#060d14" />
      <circle
        cx="170"
        cy="90"
        r="60"
        fill="none"
        stroke="#00ff88"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="170"
        cy="90"
        r="40"
        fill="none"
        stroke="#00ff88"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <circle cx="170" cy="90" r="20" fill="rgba(0,255,136,0.15)" />
      <text x="170" y="95" fill="#00ff88" fontSize="12" textAnchor="middle">
        ⚛
      </text>
      <text
        x="170"
        y="170"
        fill="#00ff88"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.6"
        textAnchor="middle"
      >
        React Portfolio
      </text>
    </svg>
  );
}

function ComingSoonThumb() {
  return (
    <svg
      viewBox="0 0 340 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
    >
      <rect width="340" height="200" fill="#060d14" />
      <rect
        x="60"
        y="40"
        width="220"
        height="120"
        rx="2"
        fill="none"
        stroke="#00ccff"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <rect x="70" y="50" width="200" height="20" fill="#0d1e2e" rx="1" />
      <text
        x="170"
        y="64"
        fill="#00ccff"
        fontSize="8"
        fontFamily="monospace"
        textAnchor="middle"
        opacity="0.8"
      >
        next project_
      </text>
      <text
        x="170"
        y="110"
        fill="#4a7a99"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        coming soon...
      </text>
    </svg>
  );
}

const THUMBS = {
  vapestorm: VapeStormThumb,
  portfolio: PortfolioThumb,
  coming: ComingSoonThumb,
};

/* ── Card ───────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const ref = useScrollFade();
  const Thumb = THUMBS[project.visual];
  const featured = project.featured;

  return (
    <div
      ref={ref}
      className={`project-card fade-in${featured ? " featured" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="project-img" style={{ background: "#060d14" }}>
        <Thumb />
        <div className="project-overlay">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="overlay-btn"
            >
              {project.url === "#" ? "THIS SITE ↗" : "LIVE SITE ↗"}
            </a>
          ) : (
            <span className="overlay-btn-disabled">COMING SOON</span>
          )}
        </div>
      </div>

      <div className="project-body">
        <div className="project-num">
          PROJECT {project.id}
          {featured ? " — FEATURED" : ""}
        </div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-stack">
          {project.stack.map((t) => (
            <span key={t} className="stack-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-num">02</span>
        <div className="section-line" />
        <h2 className="section-title">
          Selected <span className="accent">Work</span>
        </h2>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
