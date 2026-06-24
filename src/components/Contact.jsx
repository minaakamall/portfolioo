import './Contact.css'

/* ── UPDATE THESE WITH YOUR REAL LINKS ── */
const LINKS = [
  { label: 'EMAIL ME',  icon: '✉',  href: 'mailto:mina@example.com' },
  { label: 'GITHUB',    icon: '⌥',  href: 'https://github.com/YOUR_USERNAME' },
  { label: 'LINKEDIN',  icon: '◈',  href: 'https://linkedin.com/in/YOUR_USERNAME' },
  { label: 'VAPESTORM', icon: '⬡',  href: 'https://vapestorm.netlify.app' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="section-header" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <span className="section-num">04</span>
          <div className="section-line" style={{ maxWidth: 40 }} />
        </div>
        <h2>Let's <span className="accent">Connect</span></h2>
        <p>
          Open to freelance projects, collaborations, or just a good conversation
          about web dev. Reach out — I respond fast.
        </p>
        <div className="contact-links">
          {LINKS.map((l) => (
            <a key={l.label} className="contact-link" href={l.href} target="_blank" rel="noreferrer">
              <span>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
