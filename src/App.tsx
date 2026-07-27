import { motion, useReducedMotion } from 'framer-motion'
import './index.css'

const team = [
  { code: '01', name: 'Scout', role: 'Research & framing', text: 'Maps the problem space, constraints, and the shortest path to a useful first release.', color: 'orange' },
  { code: '02', name: 'Forge', role: 'Build & ship', text: 'Turns a clear brief into production-ready interfaces, integrations, and software.', color: 'lime' },
  { code: '03', name: 'Signal', role: 'Test & refine', text: 'Pressure-tests the work, catches edge cases, and keeps the loop moving toward clarity.', color: 'blue' },
]

const process = [
  ['01', 'Name the opportunity', 'A focused working session turns a fuzzy ambition into a crisp brief, audience, and definition of done.'],
  ['02', 'Assemble the right team', 'We compose the smallest useful mix of AI sub-agents and human direction for the work in front of us.'],
  ['03', 'Make the first useful thing', 'Fast, visible increments keep decisions grounded in something real—not another slide deck.'],
  ['04', 'Learn in production', 'We observe what matters, refine the system, and leave you with an asset your team can own.'],
]

function NetworkMark() {
  return <svg className="network-mark" viewBox="0 0 360 260" role="img" aria-label="A network of coordinated agent nodes">
    <path className="wire" d="M38 185 105 84 190 144 261 53 322 181 190 144 105 203Z" />
    <path className="wire faint" d="m38 185 152-41 132 37M105 84l156-31M105 203l85-59" />
    {[[38,185,'orange'],[105,84,'lime'],[190,144,'blue'],[261,53,'orange'],[322,181,'lime'],[105,203,'blue']].map(([x,y,c]) => <circle key={`${x}-${y}`} className={`node ${c}`} cx={x} cy={y} r="10" />)}
    <circle className="core" cx="190" cy="144" r="22" /><text x="190" y="149" textAnchor="middle">D</text>
  </svg>
}

function App() {
  const reduceMotion = useReducedMotion()
  const reveal = (delay = 0) => ({ initial: { opacity: 0, y: reduceMotion ? 0 : 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: .65, delay } })
  return <div className="site-shell">
    <header className="nav wrap">
      <a className="brand" href="#top" aria-label="Derricode home"><span className="brand-dot" />DERRICODE</a>
      <nav aria-label="Primary navigation"><a href="#method">Method</a><a href="#team">The team</a><a href="#contact" className="nav-cta">Start a conversation <span>↗</span></a></nav>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...reveal(.05)}><span className="pulse" />AI-native software studio</motion.p>
          <motion.h1 {...reveal(.12)}>Make the next<br /><em>move</em> useful.</motion.h1>
          <motion.p className="lede" {...reveal(.2)}>Derricode brings AI sub-agents and sharp human direction together to build software products and automations that earn their place in your business.</motion.p>
          <motion.div className="hero-actions" {...reveal(.28)}><a className="button button-dark" href="#contact">Tell us what you’re solving <span>↗</span></a><a className="text-link" href="#method">See how we work <span>↓</span></a></motion.div>
        </div>
        <motion.div className="hero-art" {...reveal(.18)}><div className="art-label">ORCHESTRATION / 001</div><NetworkMark /><div className="art-caption"><span>Signal in, software out.</span><span className="mono">[ LIVE / READY ]</span></div></motion.div>
      </section>

      <section className="ticker" aria-label="Derricode capabilities"><div className="ticker-track"><span>PRODUCTS</span><i>✳</i><span>WORKFLOWS</span><i>✳</i><span>INTEGRATIONS</span><i>✳</i><span>OPERATIONS</span><i>✳</i><span>PRODUCTS</span><i>✳</i><span>WORKFLOWS</span></div></section>

      <section id="method" className="intro wrap section"><div className="section-kicker">01 — The useful bit</div><div className="intro-grid"><h2>Not AI theater.<br /><span>Actual leverage.</span></h2><div><p className="big-copy">Your best ideas deserve a faster route to reality. We use a coordinated team of specialized agents to research, design, build, and improve—without losing the judgment that makes the work matter.</p><a className="text-link dark-link" href="#contact">Bring us a hard problem <span>↗</span></a></div></div></section>

      <section id="team" className="team-section section"><div className="wrap"><div className="section-kicker">02 — A team, not a tool</div><div className="team-heading"><h2>Different jobs.<br /><span>One direction.</span></h2><p>Sub-agents are good at focused work. Derricode is good at giving that work a reason to exist.</p></div><div className="team-list">{team.map((member, i) => <motion.article className="team-row" key={member.name} initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * .08 }}><span className="row-number">{member.code}</span><div className={`member-orb ${member.color}`} aria-hidden="true">{member.name[0]}</div><div className="member-name"><h3>{member.name}</h3><p>{member.role}</p></div><p className="member-text">{member.text}</p><span className="row-arrow">↗</span></motion.article>)}</div></div></section>

      <section className="proof wrap section"><div className="section-kicker">03 — What changes</div><div className="proof-grid"><h2>More signal.<br /><span>Less ceremony.</span></h2><div className="proof-notes"><div><b>01</b><p>Decisions happen closer to the work.</p></div><div><b>02</b><p>Small releases make learning visible.</p></div><div><b>03</b><p>Your team gets momentum, not dependency.</p></div></div></div></section>

      <section className="process-section section"><div className="wrap"><div className="section-kicker">04 — The loop</div><div className="process-grid"><h2>From question<br /><span>to working proof.</span></h2><div className="process-list">{process.map(([num,title,text]) => <div className="process-item" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></div></section>

      <section id="contact" className="contact wrap section"><div className="contact-card"><div className="section-kicker">05 — Your move</div><h2>Have a problem<br /><em>worth solving?</em></h2><p>Tell us where the friction is. We’ll bring a point of view, a practical next step, and no unnecessary theatre.</p><a className="button button-light" href="mailto:hello@derricode.com">hello@derricode.com <span>↗</span></a><div className="contact-mark">D<span>/</span></div></div></section>
    </main>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} DERRICODE</span><span>Built for the next useful thing.</span><a href="#top">Back to top ↑</a></footer>
  </div>
}

export default App
