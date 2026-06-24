export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="nav-logo">
        &lt;<span>MINA</span>/&gt;
      </div>
      <div className="nav-links">
        {["skills", "projects", "about", "contact"].map((s) => (
          <a
            key={s}
            href={`#${s}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(s);
            }}
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}
