import { motion, useReducedMotion } from 'framer-motion'
import './index.css'

const services = [
  { code: '01', name: 'AI implementation', role: 'Strategy to working system', text: 'Turn a business priority into a practical AI implementation: clear use cases, the right tools, and a system your team can operate.', color: 'orange' },
  { code: '02', name: 'AI automations', role: 'Workflows that move work forward', text: 'Connect the steps between inboxes, documents, apps, and people with automations designed around the way your business already works.', color: 'lime' },
  { code: '03', name: 'Full-stack applications', role: 'Web, mobile & MCP integrations', text: 'Design and build complete applications across web and mobile, including MCP servers or client integrations that connect AI assistants to approved tools and data.', color: 'blue' },
]

const process = [
  ['01', 'Find the highest-leverage start', 'A focused working session maps the business goal, current workflow, constraints, and the smallest useful first release.'],
  ['02', 'Design the system', 'We define the user experience, data flow, integrations, and operating boundaries before implementation begins.'],
  ['03', 'Build in visible increments', 'Working software, automation steps, and integration decisions stay close to the surface so feedback can shape the next move.'],
  ['04', 'Hand over a system you can run', 'We document the moving parts, refine the workflow, and leave your team with a clear path to operate and extend the work.'],
]

function NetworkMark() {
  return <svg className="network-mark" viewBox="0 0 360 260" role="img" aria-label="A network of coordinated AI and software nodes">
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
      <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#process">How it works</a><a href="#contact" className="nav-cta">Start a project <span>↗</span></a></nav>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...reveal(.05)}><span className="pulse" />AI implementation & software studio</motion.p>
          <motion.h1 {...reveal(.12)}>Build what<br /><em>moves</em> business.</motion.h1>
          <motion.p className="lede" {...reveal(.2)}>Derricode helps businesses implement AI, automate workflows, and build full-stack applications across web, mobile, and MCP integrations.</motion.p>
          <motion.div className="hero-actions" {...reveal(.28)}><a className="button button-dark" href="#contact">Plan your next system <span>↗</span></a><a className="text-link" href="#services">Explore services <span>↓</span></a></motion.div>
        </div>
        <motion.div className="hero-art" {...reveal(.18)}><div className="art-label">SYSTEMS / 001</div><NetworkMark /><div className="art-caption"><span>Business need in, useful system out.</span><span className="mono">[ BUILD / READY ]</span></div></motion.div>
      </section>

      <section className="ticker" aria-label="Derricode services"><div className="ticker-track"><span>AI IMPLEMENTATION</span><i>✳</i><span>AUTOMATIONS</span><i>✳</i><span>WEB + MOBILE</span><i>✳</i><span>MCP INTEGRATIONS</span><i>✳</i><span>AI IMPLEMENTATION</span><i>✳</i><span>AUTOMATIONS</span></div></section>

      <section id="services" className="intro wrap section"><div className="section-kicker">01 — What we build</div><div className="intro-grid"><h2>Three ways to<br /><span>make progress.</span></h2><div><p className="big-copy">The right technical answer starts with the business problem. We help you choose where AI belongs, connect the work that slows your team down, and ship the applications your customers and operators need.</p><a className="text-link dark-link" href="#contact">Talk through an opportunity <span>↗</span></a></div></div></section>

      <section id="offerings" className="team-section section"><div className="wrap"><div className="section-kicker">02 — Our services</div><div className="team-heading"><h2>Clear scope.<br /><span>Useful software.</span></h2><p>From a first implementation to a connected product, we keep the technology grounded in how your business needs to work.</p></div><div className="team-list">{services.map((service, i) => <motion.article className="team-row" key={service.name} initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * .08 }}><span className="row-number">{service.code}</span><div className={`member-orb ${service.color}`} aria-hidden="true">{service.name[0]}</div><div className="member-name"><h3>{service.name}</h3><p>{service.role}</p></div><p className="member-text">{service.text}</p><span className="row-arrow" aria-hidden="true">↗</span></motion.article>)}</div></div></section>

      <section className="proof wrap section"><div className="section-kicker">03 — The outcome</div><div className="proof-grid"><h2>More capability.<br /><span>Less friction.</span></h2><div className="proof-notes"><div><b>01</b><p>AI work starts with a defined business use case.</p></div><div><b>02</b><p>Automations connect real tools and repeatable steps.</p></div><div><b>03</b><p>Applications and integrations leave your team with something they can use and extend.</p></div></div></div></section>

      <section id="process" className="process-section section"><div className="wrap"><div className="section-kicker">04 — How it works</div><div className="process-grid"><h2>From business need<br /><span>to working system.</span></h2><div className="process-list">{process.map(([num,title,text]) => <div className="process-item" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></div></section>

      <section id="contact" className="contact wrap section"><div className="contact-card"><div className="section-kicker">05 — Start a project</div><h2>Ready to put AI<br /><em>to work?</em></h2><p>Tell us about the business problem, workflow, or product you want to move forward. We’ll bring a practical point of view and a clear next step.</p><a className="button button-light" href="mailto:hello@derricode.com">hello@derricode.com <span>↗</span></a><div className="contact-mark">D<span>/</span></div></div></section>
    </main>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} DERRICODE</span><span>AI systems, automations, and applications.</span><a href="#top">Back to top ↑</a></footer>
  </div>
}

export default App
