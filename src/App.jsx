import { useState } from 'react'
import './App.css'

const sections = [
  { id: 'story', label: 'The Story' },
  { id: 'praxis', label: 'The Praxis' },
  { id: 'theories', label: 'Theories' },
  { id: 'code', label: 'The Code' },
  { id: 'gallery', label: 'The Pages' },
  { id: 'key', label: 'The Key' },
]

const documentationPanels = [
  {
    id: 'overview',
    label: 'Overview',
    kicker: '01 · The object',
    title: 'A language event, not a locked box.',
    text: 'The manuscript is organized at several scales at once: glyph, token, line, page, section, and image. The Code view keeps those layers together instead of reducing the work to a single substitution key.',
    signals: ['Repeated signs', 'Section registers', 'Image-text coupling'],
  },
  {
    id: 'glyphs',
    label: 'Glyphs & Tokens',
    kicker: '02 · The visible script',
    title: 'A glyph is not automatically a letter.',
    text: 'A visible sign may be a sound, syllable, morpheme, ligature, category marker, or positional variant. EVA and Currier notation let us compare shapes; they do not tell us what those shapes mean.',
    signals: ['Uncertain spaces', 'Ligature candidates', 'Morphology-like families'],
  },
  {
    id: 'ciphers',
    label: 'Cipher Models',
    kicker: '03 · Mechanisms to test',
    title: 'No single key gets the whole room.',
    text: 'Simple substitution, homophony, position-dependent systems, transposition, nomenclators, ligatures, and steganography each explain some features and fail on others. A good model must predict unseen pages.',
    signals: ['Substitution', 'Transposition', 'Steganography'],
  },
  {
    id: 'linguistics',
    label: 'Linguistic Signals',
    kicker: '04 · The statistical trace',
    title: 'Order survives the mystery.',
    text: 'Frequency, repetition, autocorrelation, word length, section-specific vocabulary, and co-occurrence patterns suggest a constrained process. These are clues about structure, not a translation into English.',
    signals: ['Autocorrelation', 'Word clusters', 'Currier A / B'],
  },
  {
    id: 'tests',
    label: 'Tests',
    kicker: '05 · The discipline',
    title: 'A key must open pages it never saw.',
    text: 'Every proposed reading should be tested against held-out folios, alternate transcriptions, shuffled controls, and competing generators. The Praxis preserves failed predictions as part of the record.',
    signals: ['Held-out pages', 'Blinded annotation', 'Competing models'],
  },
]

const cipherModels = [
  ['Simple substitution', 'One visible symbol maps to one hidden symbol. A useful baseline, but unlikely to explain every layer.'],
  ['Homophonic substitution', 'Several visible signs may represent one underlying unit, flattening ordinary frequency patterns.'],
  ['Position-dependent', 'The key changes by page, line, section, or state—one possible source of A/B variation.'],
  ['Ligatures & compounds', 'A complex glyph may compress several smaller elements into one visual unit.'],
  ['Steganography', 'A second message may hide in positions, intervals, colors, omissions, or diagram routes.'],
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
  const [activeDoc, setActiveDoc] = useState('overview')
  const [expandedModel, setExpandedModel] = useState(0)

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

        <section className="section theories" id="theories">
          <div className="theories-inner">
            <div className="section-heading">
              <p className="eyebrow">III · Two doors into the manuscript</p>
              <h2>The postcard<br /><i>from the dream</i></h2>
              <p>A working theory, not a final answer: the pages may be both transmissions from a world and a diary of what that world felt like from inside.</p>
            </div>
            <div className="theory-grid">
              <article className="theory-card postcard-theory">
                <span className="theory-number">A · OUTWARD</span>
                <h3>The Postcard</h3>
                <p className="theory-lead">A postcard never carries the whole country. It carries the signs that might make someone remember it.</p>
                <p>This reading treats each folio as a selected transmission. The plant, the circle, the body in the green channel, and the recurring marks are not a complete map; they are clues sent toward a reader who may already know the larger world.</p>
                <p className="theory-question">What did the maker choose to show—and what could safely remain unsaid?</p>
              </article>
              <article className="theory-card diary-theory">
                <span className="theory-number">B · INWARD</span>
                <h3>The Dream Diary</h3>
                <p className="theory-lead">Perhaps the manuscript is not a map of a place, but a notebook of experiences that could not be allowed to disappear.</p>
                <p>This reading follows recurrence, sudden changes of scale, bodies in vessels, impossible plants, and words that may be remembered sounds. The author may be recording a world encountered through ritual, imagination, sleep, or another form of attention.</p>
                <p className="theory-question">What was seen, remembered, or transformed before morning?</p>
              </article>
            </div>
            <div className="synthesis">
              <span className="theory-number">THE WORKING SYNTHESIS</span>
              <p>A <strong>postcard diary</strong>: a sequence of compressed observations sent outward from an unfamiliar world. It may be intimate and communicative at the same time. The page does not tell us whether the world was external, visionary, symbolic, or all three. It asks whether we can learn to see the horse on the road.</p>
            </div>
          </div>
        </section>

        <section className="section code-section" id="code">
          <div className="code-inner">
            <div className="code-heading">
              <div>
                <p className="eyebrow">IV · The documentation room</p>
                <h2>Read the<br /><i>structure</i></h2>
              </div>
              <p>The manuscript may be undeciphered, but it is not without behavior. Select a lens to move through the evidence behind the Postcard and Dream Diary theories.</p>
            </div>
            <div className="doc-tabs" role="tablist" aria-label="Cryptography and linguistics documentation">
              {documentationPanels.map((panel) => (
                <button key={panel.id} className={activeDoc === panel.id ? 'doc-tab active' : 'doc-tab'} onClick={() => setActiveDoc(panel.id)} role="tab" aria-selected={activeDoc === panel.id}>{panel.label}</button>
              ))}
            </div>
            {documentationPanels.filter((panel) => panel.id === activeDoc).map((panel) => (
              <div className="doc-panel" key={panel.id} role="tabpanel">
                <div className="doc-panel-copy"><p className="theory-number">{panel.kicker}</p><h3>{panel.title}</h3><p>{panel.text}</p></div>
                <div className="signal-list"><p className="signal-label">Signals to preserve</p>{panel.signals.map((signal, index) => <span key={signal}><b>0{index + 1}</b>{signal}</span>)}</div>
              </div>
            ))}
            <div className="models-block">
              <div className="models-intro"><p className="theory-number">MECHANISMS TO TEST</p><h3>Possible keys,<br /><i>kept plural</i></h3><p>No mechanism is accepted just because it produces a beautiful answer. Open a model to see what it explains—and what it leaves unresolved.</p></div>
              <div className="model-list">{cipherModels.map(([name, description], index) => <button className={expandedModel === index ? 'model-item expanded' : 'model-item'} key={name} onClick={() => setExpandedModel(expandedModel === index ? -1 : index)}><span className="model-index">0{index + 1}</span><span className="model-name">{name}</span><span className="model-toggle">{expandedModel === index ? '−' : '+'}</span>{expandedModel === index && <span className="model-description">{description}</span>}</button>)}</div>
            </div>
            <div className="code-footer-note"><span>POSTCARD / DREAM DIARY</span><p>A key is credible only when it opens pages it never saw.</p></div>
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section-heading centered"><p className="eyebrow">V · Pages that look back</p><h2>An atlas of<br /><i>becoming</i></h2><p>Three recurring worlds: the plant, the circle, and the vessel. Not answers—portals for attention.</p></div>
          <div className="plates-grid"><BotanicalPlate variant="cosmos" label="Plate II · The cosmic wheel" /><BotanicalPlate variant="vessels" label="Plate III · The vessels of transformation" /></div>
        </section>

        <section className="section key-section" id="key">
          <div className="key-card"><div><p className="eyebrow">VI · The modern artifact</p><h2>The key<br /><i>manifests</i></h2><p>“This is it—the key to everything.” A phrase from a contemporary recording becomes another layer in the manuscript’s conversation: then and now, image and voice, symbol and arrival.</p><p className="quote">“You see there… they’re coming.”</p></div><div className="artifact"><div className="artifact-frame"><span>✦</span><span>◌</span><span>✧</span><span>⌁</span><b>KEY</b></div><small>Portal Key · an original modern artifact</small></div></div>
        </section>
      </main>

      <footer className="site-footer"><div><span className="wordmark-mark">◌</span> Voynich Praxis</div><p>A living notebook for the Lost World Series.</p><a href="https://ravrxkms.manus.space/" target="_blank" rel="noreferrer">Visit our other world ↗</a></footer>
    </div>
  )
}

export default App
