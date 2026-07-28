import { motion, useReducedMotion } from 'framer-motion'
import './index.css'

type Service = { number: string; title: string; summary: string; detail: string }

const services: Service[] = [
  { number: '01', title: 'AI implementation', summary: 'Make AI useful inside the business.', detail: 'We turn a real priority into a scoped use case, an operating model, and a working implementation your team can understand.' },
  { number: '02', title: 'AI automations', summary: 'Remove the handoffs that slow work down.', detail: 'We connect inboxes, documents, business tools, and approvals into workflows designed around how work actually happens.' },
  { number: '03', title: 'Software & integrations', summary: 'Build the product layer around the opportunity.', detail: 'We design and ship full-stack web and mobile applications, APIs, and MCP integrations that connect assistants to approved tools and data.' },
]

const process = [
  ['01', 'Discover', 'Start with the business goal, the people involved, the current workflow, and the constraints that matter.'],
  ['02', 'Shape the first release', 'Choose a focused first outcome. Define the experience, data, integrations, and boundaries before code makes the decision expensive.'],
  ['03', 'Implement in the open', 'Build working software and automation in visible increments so feedback is part of the delivery, not a final handoff.'],
  ['04', 'Iterate and enable', 'Refine what the system does, document the moving parts, and leave a clear path for your team to operate and extend it.'],
]

const capabilities = ['Responsive web products', 'Native-feeling mobile experiences', 'APIs and data workflows', 'MCP servers and client integrations', 'AI-assisted internal tools', 'Automation across existing software']

function NetworkMark() {
  return <svg className="network-mark" viewBox="0 0 420 300" role="img" aria-label="Connected nodes representing a business system">
    <path className="wire" d="M42 224 126 81 226 164 316 50 378 223 226 164 126 241Z" />
    <path className="wire faint" d="m42 224 184-60 152 59M126 81l190-31M126 241l100-77" />
    {[[42,224,'small'],[126,81,'small'],[226,164,'core-node'],[316,50,'small'],[378,223,'small'],[126,241,'small']].map(([x, y, c]) => <circle key={`${x}-${y}`} className={`node ${c}`} cx={x} cy={y} r={c === 'core-node' ? 18 : 9} />)}
    <circle className="core-ring" cx="226" cy="164" r="34" />
    <text x="226" y="170" textAnchor="middle">D</text>
  </svg>
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.65, delay }}>{children}</motion.div>
}

function App() {
  return <div className="site-shell">
    <header className="nav wrap">
      <a className="brand" href="#top" aria-label="Derricode home"><span className="brand-mark">D</span><span>DERRICODE</span></a>
      <nav aria-label="Primary navigation"><a href="#approach">Approach</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact" className="nav-cta">Start a conversation <span>↗</span></a></nav>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}><span className="pulse" />AI implementation & software studio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>Make the next move<br /><em>useful.</em></motion.h1>
          <motion.p className="lede" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }}>Derricode helps businesses move from AI interest to working systems — implementing AI, automating operations, and building the software around the opportunity.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6, delay: .28 }}><a className="button button-blue" href="#contact">Talk through an opportunity <span>↗</span></a><a className="text-link" href="#approach">See our point of view <span>↓</span></a></motion.div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}><div className="art-label">SYSTEM MAP / 001</div><NetworkMark /><div className="art-caption"><span>Business need in. Useful system out.</span><span className="mono">[ BUILD / ITERATE ]</span></div><div className="art-index">01—04</div></motion.div>
      </section>

      <section className="signal-strip" aria-label="Derricode focus areas"><div className="wrap signal-inner"><span>AI implementation</span><i>+</i><span>workflow automation</span><i>+</i><span>web & mobile software</span><i>+</i><span>MCP integrations</span></div></section>

      <section id="approach" className="problem-section section"><div className="wrap problem-grid"><Reveal><div className="section-kicker">01 — The opportunity</div><h2>AI is easy to discuss.<br /><span>Implementation is the work.</span></h2></Reveal><Reveal delay={.1} className="problem-copy"><p className="big-copy">Most businesses do not need another abstract AI strategy. They need a clear decision about where the technology belongs, how it fits the way people work, and what should be built first.</p><p>That is where Derricode comes in. We connect business context to technical execution, without losing sight of the operators, customers, data, and systems involved.</p></Reveal></div></section>

      <section className="point-section section"><div className="wrap point-grid"><Reveal><div className="section-kicker light-kicker">02 — Our point of view</div><h2>Useful beats<br /><em>impressive.</em></h2></Reveal><Reveal delay={.12} className="point-notes"><div className="point-note"><b>01</b><p>Start with a meaningful business constraint, not a fashionable tool.</p></div><div className="point-note"><b>02</b><p>Design the human workflow and the technical system together.</p></div><div className="point-note"><b>03</b><p>Ship a first version that can be observed, operated, and improved.</p></div></Reveal></div></section>

      <section id="services" className="services-section section"><div className="wrap"><Reveal><div className="section-kicker">03 — Three ways to move</div><div className="section-heading"><h2>One partner for<br /><span>the connected work.</span></h2><p>Choose the starting point that matches the problem. The three pillars can stand alone or come together as one implementation.</p></div></Reveal><div className="service-list">{services.map((service, i) => <Reveal key={service.number} delay={i * .08}><article className="service-row"><span className="service-number">{service.number}</span><div className="service-symbol" aria-hidden="true">{service.number === '01' ? '◎' : service.number === '02' ? '↻' : '⌘'}</div><div className="service-title"><h3>{service.title}</h3><p>{service.summary}</p></div><p className="service-detail">{service.detail}</p><span className="service-arrow" aria-hidden="true">↗</span></article></Reveal>)}</div></div></section>

      <section className="systems-section section"><div className="wrap systems-grid"><Reveal><div className="section-kicker light-kicker">04 — The system, not the silo</div><h2>Agents, automation,<br /><em>software.</em></h2></Reveal><Reveal delay={.12} className="systems-copy"><p className="big-copy">An AI agent is only as useful as the context, tools, and permissions around it. Automation gives repeatable work a path. Software gives people a reliable interface.</p><div className="system-flow"><div><b>01</b><span>Agents</span><small>Reason over approved context</small></div><div className="flow-line" /><div><b>02</b><span>Automations</span><small>Move work between systems</small></div><div className="flow-line" /><div><b>03</b><span>Software</span><small>Make the result usable</small></div></div></Reveal></div></section>

      <section id="process" className="process-section section"><div className="wrap"><Reveal><div className="section-kicker">05 — Delivery, in practice</div><div className="process-intro"><h2>From discovery<br /><span>to iteration.</span></h2><p>Good implementation is a sequence of useful decisions. We keep each one visible, testable, and close to the business context.</p></div></Reveal><div className="process-list">{process.map(([number, title, text], i) => <Reveal key={number} delay={i * .06}><div className="process-item"><span className="process-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="process-marker" aria-hidden="true">↘</span></div></Reveal>)}</div></div></section>

      <section className="capabilities-section section"><div className="wrap capabilities-grid"><Reveal><div className="section-kicker">06 — Technical capabilities</div><h2>Built for the<br /><span>real stack.</span></h2></Reveal><Reveal delay={.1} className="capability-panel"><p>From a focused internal workflow to a customer-facing product, the implementation can meet your existing systems where they are.</p><ul>{capabilities.map((capability, i) => <li key={capability}><span>0{i + 1}</span>{capability}</li>)}</ul></Reveal></div></section>

      <section className="working-section section"><div className="wrap working-grid"><Reveal><div className="section-kicker">07 — Working with Derricode</div><h2>A thoughtful<br /><span>technical partner.</span></h2></Reveal><Reveal delay={.1} className="working-copy"><p className="big-copy">Bring the business question, the rough idea, or the workflow that keeps breaking. We will help make the next decision concrete.</p><div className="working-steps"><p><b>Direct</b><span>One clear line from question to implementation.</span></p><p><b>Specific</b><span>Plain-language tradeoffs and defined next steps.</span></p><p><b>Collaborative</b><span>Feedback loops that keep the system grounded.</span></p></div></Reveal></div></section>

      <section id="contact" className="contact wrap section"><div className="contact-card"><div><div className="section-kicker light-kicker">08 — Start a project</div><h2>Have a system<br /><em>in mind?</em></h2><p>Tell us what you are trying to improve, automate, or build. We will reply with a practical way to start.</p><a className="button button-light" href="mailto:hello@derricode.com">hello@derricode.com <span>↗</span></a></div><div className="contact-mark" aria-hidden="true">D<span>/</span></div></div></section>
    </main>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} DERRICODE</span><span>AI systems, automations, and applications.</span><a href="#top">Back to top ↑</a></footer>
  </div>
}

export default App
