import { useState } from 'react'
import './App.css'

const sections = [
  { id: 'story', label: 'The Story' },
  { id: 'praxis', label: 'The Praxis' },
  { id: 'gallery', label: 'The Pages' },
  { id: 'key', label: 'The Key' },
]

function BotanicalPlate({ variant = 'plant', label }) {
  return (
    <div className={`plate plate-${variant}`} role="img" aria-label={label}>
      <div className="plate-border" />
      {variant === 'cosmos' ? (
        <svg viewBox="0 0 500 360" aria-hidden="true">
          <circle className="orbit orbit-one" cx="250" cy="180" r="135" />
          <circle className="orbit orbit-two" cx="250" cy="180" r="88" />
          <circle className="sun" cx="250" cy="180" r="24" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <circle key={angle} className="star-dot" cx={250 + Math.cos((angle * Math.PI) / 180) * 135} cy={180 + Math.sin((angle * Math.PI) / 180) * 135} r="5" />
          ))}
          <path className="cosmic-line" d="M80 275 C145 230 150 125 250 180 S360 125 420 80" />
          <path className="cosmic-line thin" d="M68 92 C160 140 168 245 250 180 S350 245 432 275" />
        </svg>
      ) : variant === 'vessels' ? (
        <svg viewBox="0 0 500 360" aria-hidden="true">
          <path className="vessel" d="M150 70 h68 l-8 40 c38 30 43 112 25 160 h-102 c-18-48-13-130 25-160z" />
          <path className="vessel" d="M292 100 h62 l-7 32 c30 24 35 91 20 132 h-88 c-15-41-10-108 20-132z" />
          <path className="liquid" d="M138 203 h88 c-2 28-9 48-13 67 h-63 c-4-19-10-39-12-67z" />
          <path className="liquid" d="M282 198 h82 c-2 22-6 43-10 66 h-62 c-4-23-8-44-10-66z" />
          <path className="stripe" d="M145 150 h77 M140 172 h84 M286 160 h75 M282 180 h81" />
        </svg>
      ) : (
        <svg viewBox="0 0 500 360" aria-hidden="true">
          <path className="stem" d="M250 292 C245 240 250 175 267 72" />
          <path className="branch" d="M252 218 C210 196 181 160 160 112 M255 170 C300 150 328 120 348 82 M250 254 C208 248 168 226 133 192" />
          <path className="leaf" d="M164 113 C126 104 105 72 118 47 C151 48 177 72 164 113z" />
          <path className="leaf" d="M348 84 C377 45 414 43 430 62 C413 96 383 107 348 84z" />
          <path className="leaf" d="M135 193 C91 191 67 164 75 139 C111 137 135 155 135 193z" />
          <path className="leaf" d="M267 73 C249 37 264 7 292 2 C312 31 301 57 267 73z" />
          <circle className="flower" cx="268" cy="70" r="18" />
          <circle className="flower-core" cx="268" cy="70" r="5" />
          <path className="root" d="M250 290 C218 311 203 330 182 343 M250 290 C278 310 292 331 321 344 M250 295 C244 319 242 335 237 350" />
        </svg>
      )}
      <span className="plate-caption">{label}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  const goTo = (id) => {
    setActive(id)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="wordmark" onClick={() => goTo('hero')} aria-label="Return to beginning">
          <span className="wordmark-mark">◌</span>
          <span>Voynich <em>Praxis</em></span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          {menuOpen ? 'Close' : 'Navigate'}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {sections.map((section) => (
            <button className={active === section.id ? 'active' : ''} key={section.id} onClick={() => goTo(section.id)}>{section.label}</button>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-copy">
            <p className="eyebrow">A School of Translation · Lost World Series</p>
            <h1>The Voynich<br /><i>Praxis</i></h1>
            <p className="hero-subtitle">Woodstock 14th Century Style</p>
            <p className="hero-intro">A holistic experiment in reading a manuscript as a world: its plants, bodies, rhythms, silences, and the consciousness that may have drawn them.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo('story')}>Enter the story <span>↘</span></button>
              <button className="button button-quiet" onClick={() => goTo('praxis')}>What is a praxis?</button>
            </div>
          </div>
          <div className="hero-note">“The horse on the road”<br /><small>Seeing what our habits teach us not to see.</small></div>
        </section>

        <section className="section story" id="story">
          <div className="section-heading"><p className="eyebrow">I · The voice in the vellum</p><h2>The tea of<br /><i>memory</i></h2></div>
          <div className="story-grid">
            <BotanicalPlate label="Plate I · The plant as teacher" />
            <div className="prose">
              <p className="lead">As I lay deep in thoughts, I began to write and draw. The vellum before me waited like a patient friend.</p>
              <p>I was drinking the tea made by Mother—not the mother who bore me, for we are all children of the same earth, but the Mother who tends the sacred grove where the blue-starred flowers bloom in spirals.</p>
              <p>With each sip, the boundaries between what I knew and what I remembered began to blur, like ink spreading through water. This is how it always begins: with the dissolution of the false walls we build between ourselves and the world that breathes around us.</p>
              <p className="script-line">qokedy · qokedy · dal · qokedy · qokedy</p>
            </div>
          </div>
        </section>

        <section className="section praxis" id="praxis">
          <div className="praxis-inner">
            <p className="eyebrow">II · A method without a cage</p>
            <h2>Translation is not<br /><i>extraction.</i></h2>
            <p className="large-copy">We tell ourselves stories in order to live. We impose a narrative line upon disparate images, freezing the shifting <strong>phantasmagoria</strong> of experience into something we can carry.</p>
            <div className="principles">
              <article><span>01</span><h3>Keep the whole</h3><p>A leaf is never only a leaf. Read image, text, material, place, ritual, and the reader’s own assumptions together.</p></article>
              <article><span>02</span><h3>Notice the stranger</h3><p>The horse on the road is a practice of attention: make room for what the current model cannot predict.</p></article>
              <article><span>03</span><h3>Return the question</h3><p>Every key opens a door and changes the room. A translation should preserve mystery rather than erase it.</p></article>
            </div>
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section-heading centered"><p className="eyebrow">III · Pages that look back</p><h2>An atlas of<br /><i>becoming</i></h2><p>Three recurring worlds: the plant, the circle, and the vessel. Not answers—portals for attention.</p></div>
          <div className="plates-grid"><BotanicalPlate variant="cosmos" label="Plate II · The cosmic wheel" /><BotanicalPlate variant="vessels" label="Plate III · The vessels of transformation" /></div>
        </section>

        <section className="section key-section" id="key">
          <div className="key-card"><div><p className="eyebrow">IV · The modern artifact</p><h2>The key<br /><i>manifests</i></h2><p>“This is it—the key to everything.” A phrase from a contemporary recording becomes another layer in the manuscript’s conversation: then and now, image and voice, symbol and arrival.</p><p className="quote">“You see there… they’re coming.”</p></div><div className="artifact"><div className="artifact-frame"><span>✦</span><span>◌</span><span>✧</span><span>⌁</span><b>KEY</b></div><small>Portal Key · an original modern artifact</small></div></div>
        </section>
      </main>

      <footer className="site-footer"><div><span className="wordmark-mark">◌</span> Voynich Praxis</div><p>A living notebook for the Lost World Series.</p><a href="https://ravrxkms.manus.space/" target="_blank" rel="noreferrer">Visit our other world ↗</a></footer>
    </div>
  )
}

export default App
