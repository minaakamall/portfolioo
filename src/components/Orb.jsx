import './Orb.css'

const DOT_POSITIONS = [
  { top: '10%', left: '20%', size: 4, color: 'neon',  delay: '0s' },
  { top: '80%', left: '15%', size: 3, color: 'neon2', delay: '0.4s' },
  { top: '20%', left: '85%', size: 5, color: 'neon',  delay: '0.8s' },
  { top: '70%', left: '80%', size: 3, color: 'neon2', delay: '1.2s' },
  { top: '50%', left: '5%',  size: 4, color: 'neon',  delay: '1.6s' },
  { top: '10%', left: '60%', size: 3, color: 'neon2', delay: '2.0s' },
  { top: '90%', left: '60%', size: 4, color: 'neon',  delay: '2.4s' },
  { top: '40%', left: '95%', size: 3, color: 'neon2', delay: '2.8s' },
]

export default function Orb() {
  return (
    <div className="hero-visual">
      <div className="orb-container">
        <div className="orb-ring ring1" />
        <div className="orb-ring ring2" />
        <div className="orb-ring ring3" />
        <div className="orb-core" />
        <div className="orb-dots">
          {DOT_POSITIONS.map((d, i) => (
            <div
              key={i}
              className={`orb-dot dot-${d.color}`}
              style={{
                top: d.top,
                left: d.left,
                width: d.size,
                height: d.size,
                animationDelay: d.delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
