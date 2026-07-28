import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import './index.css'

type RouteKey = '/' | '/services' | '/process' | '/capabilities' | '/contact' | '/404'

const navItems: { href: RouteKey; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/capabilities', label: 'Capabilities' },
]

const services = [
  { number: '01', title: 'AI implementation', summary: 'Turn a real business priority into a useful system.', detail: 'We scope the use case, shape the operating model, and implement the right combination of model, context, tools, and human review.' },
  { number: '02', title: 'AI automations', summary: 'Make repeatable work move without the handoffs.', detail: 'We connect inboxes, documents, approvals, and business software into workflows that fit the way your team already operates.' },
  { number: '03', title: 'Applications & integrations', summary: 'Build the product layer around the opportunity.', detail: 'We ship full-stack web and mobile apps, APIs, and MCP integrations that make AI capabilities reliable and usable.' },
]

const processSteps = [
  ['01', 'Discover the constraint', 'We start with the business goal, the people involved, the current workflow, and the constraints that matter.'],
  ['02', 'Shape the first release', 'We choose a focused first outcome and define the experience, data, integrations, and boundaries before code makes decisions expensive.'],
  ['03', 'Implement in the open', 'We build working software and automation in visible increments so feedback is part of delivery, not a final handoff.'],
  ['04', 'Iterate and enable', 'We refine what the system does, document the moving parts, and leave a clear path for your team to operate and extend it.'],
]

const capabilities = [
  ['01', 'Web products', 'Responsive, accessible interfaces with a clear path from first interaction to useful outcome.'],
  ['02', 'Mobile apps', 'Native-feeling mobile experiences for customer workflows and internal operations.'],
  ['03', 'APIs & data workflows', 'Typed services and integrations that move approved data between the systems you already use.'],
  ['04', 'MCP integrations', 'MCP servers and clients that give assistants explicit, permissioned access to tools and data.'],
  ['05', 'Internal AI tools', 'Focused copilots and operator interfaces grounded in the context your team needs.'],
  ['06', 'Automation', 'Event-driven workflows for documents, communication, approvals, and recurring operations.'],
]

function normalizePath(): RouteKey {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  return navItems.some((item) => item.href === path) || path === '/contact' ? path as RouteKey : '/404'
}

function Link({ href, children, className = '', onClick }: { href: RouteKey; children: ReactNode; className?: string; onClick?: () => void }) {
  const navigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
    onClick?.()
  }
  return <a href={href} className={className} onClick={navigate}>{children}</a>
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay }}>{children}</motion.div>
}

function NetworkMark() {
  return <svg className="network-mark" viewBox="0 0 420 300" role="img" aria-label="Connected nodes representing a business system">
    <path className="wire" d="M42 224 126 81 226 164 316 50 378 223 226 164 126 241Z" />
    <path className="wire faint" d="m42 224 184-60 152 59M126 81l190-31M126 241l100-77" />
    {[[42,224,'small'],[126,81,'small'],[226,164,'core-node'],[316,50,'small'],[378,223,'small'],[126,241,'small']].map(([x, y, c]) => <circle key={`${x}-${y}`} className={`node ${c}`} cx={x} cy={y} r={c === 'core-node' ? 18 : 9} />)}
    <circle className="core-ring" cx="226" cy="164" r="34" /><text x="226" y="170" textAnchor="middle">D</text>
  </svg>
}

function HeroArt() {
  const reduced = useReducedMotion()
  return <motion.div className="hero-art" initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduced ? 0 : .7 }}><div className="art-label">SYSTEM MAP / 001</div><NetworkMark /><div className="art-caption"><span>Business need in. Useful system out.</span><span className="mono">[ BUILD / ITERATE ]</span></div><div className="art-index">01—04</div></motion.div>
}

function PageIntro({ kicker, title, accent, children }: { kicker: string; title: string; accent: string; children: ReactNode }) {
  return <section className="page-intro wrap"><Reveal><p className="eyebrow"><span className="pulse" />{kicker}</p><h1>{title}<br /><em>{accent}</em></h1><p className="lede">{children}</p></Reveal></section>
}

function Cta() {
  return <section className="contact wrap section"><div className="contact-card"><div><div className="section-kicker light-kicker">Next step</div><h2>Have a system<br /><em>in mind?</em></h2><p>Tell us what you are trying to improve, automate, or build. We will reply with a practical way to start.</p><Link className="button button-light" href="/contact">Start a conversation <span>↗</span></Link></div><div className="contact-mark" aria-hidden="true">D<span>/</span></div></div></section>
}

function Home() {
  return <>
    <section className="hero wrap"><div className="hero-copy"><Reveal><p className="eyebrow"><span className="pulse" />AI implementation & software studio</p><h1>Make the next move<br /><em>useful.</em></h1><p className="lede">Derricode helps businesses move from AI interest to working systems — implementing AI, automating operations, and building the software around the opportunity.</p><div className="hero-actions"><Link className="button button-blue" href="/contact">Talk through an opportunity <span>↗</span></Link><Link className="text-link" href="/services">Explore the work <span>↓</span></Link></div></Reveal></div><HeroArt /></section>
    <section className="signal-strip" aria-label="Derricode focus areas"><div className="wrap signal-inner"><span>AI implementation</span><i>+</i><span>workflow automation</span><i>+</i><span>web & mobile software</span><i>+</i><span>MCP integrations</span></div></section>
    <section className="section"><div className="wrap split"><Reveal><div className="section-kicker">01 — The opportunity</div><h2>AI is easy to discuss.<br /><span>Implementation is the work.</span></h2></Reveal><Reveal delay={.1}><p className="big-copy">Most businesses do not need another abstract AI strategy. They need a clear decision about where the technology belongs, how it fits the way people work, and what should be built first.</p><p>Derricode connects business context to technical execution, without losing sight of the operators, customers, data, and systems involved.</p></Reveal></div></section>
    <section className="dark-section section"><div className="wrap split"><Reveal><div className="section-kicker light-kicker">02 — Our point of view</div><h2>Useful beats<br /><em>impressive.</em></h2></Reveal><Reveal delay={.1} className="point-notes">{['Start with a meaningful business constraint, not a fashionable tool.', 'Design the human workflow and the technical system together.', 'Ship a first version that can be observed, operated, and improved.'].map((note, i) => <div className="point-note" key={note}><b>0{i + 1}</b><p>{note}</p></div>)}</Reveal></div></section>
    <section className="section"><div className="wrap"><Reveal><div className="section-kicker">03 — Three ways to move</div><div className="section-heading"><h2>One partner for<br /><span>the connected work.</span></h2><p>Choose the starting point that matches the problem. The three pillars can stand alone or come together as one implementation.</p></div></Reveal><ServiceList /></div></section>
    <section className="blue-section section"><div className="wrap split"><Reveal><div className="section-kicker light-kicker">04 — The system, not the silo</div><h2>Agents, automation,<br /><em>software.</em></h2></Reveal><Reveal delay={.1}><p className="big-copy">An AI agent is only as useful as the context, tools, and permissions around it. Automation gives repeatable work a path. Software gives people a reliable interface.</p><SystemFlow /></Reveal></div></section>
    <Cta />
  </>
}

function ServiceList() { return <div className="service-list">{services.map((service, i) => <Reveal key={service.number} delay={i * .08}><article className="service-row"><span className="service-number">{service.number}</span><div className="service-symbol" aria-hidden="true">{service.number === '01' ? '◎' : service.number === '02' ? '↻' : '⌘'}</div><div className="service-title"><h3>{service.title}</h3><p>{service.summary}</p></div><p className="service-detail">{service.detail}</p><span className="service-arrow" aria-hidden="true">↗</span></article></Reveal>)}</div> }
function SystemFlow() { return <div className="system-flow">{['Agents|Reason over approved context', 'Automations|Move work between systems', 'Software|Make the result usable'].map((item, i) => <div key={item}><b>0{i + 1}</b><span>{item.split('|')[0]}</span><small>{item.split('|')[1]}</small>{i < 2 && <i />}</div>)}</div> }

function Services() { return <><PageIntro kicker="Services / What we build" title="Make the work" accent="move better.">From a focused internal workflow to a customer-facing product, we bring strategy and implementation into the same room.</PageIntro><section className="section"><div className="wrap"><ServiceList /></div></section><section className="dark-section section"><div className="wrap split"><Reveal><div className="section-kicker light-kicker">A connected practice</div><h2>Start where<br /><em>the friction is.</em></h2></Reveal><Reveal delay={.1}><p className="big-copy">You do not have to know whether the answer is an agent, an automation, an API, or a new interface. Bring the workflow. We will help identify the smallest useful system.</p></Reveal></div></section><Cta /></> }
function Process() { return <><PageIntro kicker="Process / How we work" title="Decisions made" accent="in the open.">Good implementation is a sequence of useful decisions. We keep each one visible, testable, and close to the business context.</PageIntro><section className="section"><div className="wrap"><div className="process-list">{processSteps.map(([number, title, text], i) => <Reveal key={number} delay={i * .06}><div className="process-item"><span className="process-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="process-marker" aria-hidden="true">↘</span></div></Reveal>)}</div></div></section><section className="blue-section section"><div className="wrap split"><Reveal><div className="section-kicker light-kicker">The delivery posture</div><h2>Small releases.<br /><em>Real feedback.</em></h2></Reveal><Reveal delay={.1}><p className="big-copy">The first release is a learning instrument, not a monument. We make the unknowns visible early and leave the system easier to understand than we found it.</p></Reveal></div></section><Cta /></> }
function Capabilities() { return <><PageIntro kicker="Capabilities / Technical scope" title="Built for the" accent="real stack.">The right implementation meets your existing systems where they are — and makes the next layer easier to operate.</PageIntro><section className="section"><div className="wrap capability-grid">{capabilities.map(([number, title, text], i) => <Reveal key={number} delay={i * .05}><article className="capability-item"><span>{number}</span><h2>{title}</h2><p>{text}</p></article></Reveal>)}</div></section><section className="dark-section section"><div className="wrap split"><Reveal><div className="section-kicker light-kicker">Integration principle</div><h2>Explicit access.<br /><em>Useful context.</em></h2></Reveal><Reveal delay={.1}><p className="big-copy">MCP integrations, APIs, and automations work best when permissions and context are deliberate. We build the connective tissue that keeps AI helpful and accountable.</p></Reveal></div></section><Cta /></> }
function buildContactMailto(name: string, email: string, message: string): string {
  const subject = `Derricode project enquiry from ${name}`
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
  return `mailto:hello@derricode.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function Contact() {
  const [status, setStatus] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()
    if (!name || !email || !message) {
      setStatus('Please complete your name, email, and context before opening a draft.')
      return
    }
    setStatus('Your email draft is ready to review. It has not been sent yet.')
    window.location.href = buildContactMailto(name, email, message)
  }
  return <><PageIntro kicker="Contact / Start a project" title="Bring the" accent="real question.">Tell us what you are trying to improve, automate, or build. A useful first conversation starts with the workflow, not the buzzword.</PageIntro><section className="section"><div className="wrap contact-layout"><Reveal><div className="contact-aside"><div className="section-kicker">A good starting point</div><p className="big-copy">What is happening today? Where does the work slow down? What would a better version make possible?</p><p>Share the context you have. You do not need a polished brief.</p><a href="mailto:hello@derricode.com" className="email-link">hello@derricode.com ↗</a></div></Reveal><Reveal delay={.1}><form className="contact-form" onSubmit={submit}><p className="form-note">This opens a pre-addressed email draft in your mail app; Derricode does not receive anything until you send it.</p>{status && <p className="form-status" role="status">{status}</p>}<label htmlFor="name">Name<input id="name" name="name" required autoComplete="name" /></label><label htmlFor="email">Email<input id="email" name="email" type="email" required autoComplete="email" /></label><label htmlFor="message">What are you working through?<textarea id="message" name="message" rows={5} required /></label><button className="button button-blue" type="submit">Open email draft <span>↗</span></button></form></Reveal></div></section></>
}

function NotFound() {
  return <section className="page-intro wrap not-found"><Reveal><p className="eyebrow"><span className="pulse" />404 / Route not found</p><h1>That path is<br /><em>not useful.</em></h1><p className="lede">The page you requested does not exist. Return to Derricode's home base or start a conversation about the system you are trying to build.</p><Link className="button button-blue" href="/">Back home <span>↗</span></Link></Reveal></section>
}

function App() { const [route, setRoute] = useState<RouteKey>(normalizePath); const [menuOpen, setMenuOpen] = useState(false); const reduced = useReducedMotion(); useEffect(() => { const onPop = () => { setRoute(normalizePath()); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'auto' }) }; window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop) }, []); const Page = route === '/' ? Home : route === '/services' ? Services : route === '/process' ? Process : route === '/capabilities' ? Capabilities : route === '/contact' ? Contact : NotFound; const motionState = reduced ? { opacity: 1, y: 0 } : undefined; return <div className="site-shell" id="top"><a className="skip-link" href="#main-content">Skip to content</a><header className="nav wrap"><Link className="brand" href="/" aria-label="Derricode home"><span className="brand-mark">D</span><span>DERRICODE</span></Link><button className="menu-button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>Menu <span>{menuOpen ? '×' : '＋'}</span></button><nav id="primary-nav" className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">{navItems.slice(1).map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}<Link className="nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>Start a conversation <span>↗</span></Link></nav></header><main id="main-content" tabIndex={-1}><AnimatePresence mode="wait"><motion.div key={route} initial={motionState ?? { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={motionState ?? { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : .3 }}><Page /></motion.div></AnimatePresence></main><footer className="footer wrap"><span>© {new Date().getFullYear()} DERRICODE</span><span>AI systems, automations, and applications.</span><a href="#top">Back to top ↑</a></footer></div> }

export default App
