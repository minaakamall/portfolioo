import Cursor   from './components/Cursor'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import About    from './components/About'
import Contact  from './components/Contact'

export default function App() {
  return (
    <>
      {/* Atmosphere */}
      <div className="grid-bg" />
      <div className="scanline" />

      {/* Interactive cursor */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 MINA — BUILT WITH ❤ &amp; LOTS OF CONSOLE.LOG()</p>
        <div className="footer-dot" />
        <p>CAIRO, EGYPT</p>
      </footer>
    </>
  )
}
