# Derricode — Turn possibility into motion.

Derricode is an AI implementation and software studio for businesses. The site positions the studio as the connective layer between a real business constraint and a useful system: AI implementation, workflow automation, full-stack web/mobile applications, APIs, and MCP integrations.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run test:smoke
npm audit --omit=dev --audit-level=high
npm run start
```

## Routes

- `/` — the new “possibility into motion” story, focused system visualization, point of view, and CTA
- `/services` — AI implementation, workflow automation, applications, APIs, and integrations
- `/process` — four-stage delivery approach
- `/capabilities` — web, mobile, APIs, MCP, internal tools, and automation
- `/contact` — accessible project-intake form that opens an email draft
- unknown paths — explicit branded 404 response with HTTP 404

## New design concept: The Operating Loop

The redesign treats Derricode as the operating loop between **context → connection → interface**. Instead of a generic agency landing page, the composition behaves like a system map: large editorial typography establishes the business decision, a dark technical field visualizes the system underneath it, and the page progressively moves from point of view to delivery posture.

- **White is the foundation**: clarity, room to think, and the visible business context.
- **Blue (`#195cff`) is the signal**: action, connection, and the moment an idea becomes an implemented loop.
- **Black (`#080b12`) is the contrast layer**: technical depth, infrastructure, and honest boundaries.
- **Space Grotesk / Manrope / DM Mono** create a deliberate display, body, and system-label hierarchy.
- Layouts use editorial splits, numbered process rails, asymmetric capability cells, and a blue/black closing panel instead of repeated centered card grids.

## Purposeful p5/WebGL system visualization

`components/system-visual.tsx` contains the one focused interactive visual: a small p5.js 1.11.3 instance running in WebGL mode inside the home hero. It renders a sparse node graph, technical grid, depth movement, and a blue core node to express the Derricode story without turning the full website into an unmaintainable canvas.

Performance choices include `pixelDensity(1)`, a capped 30 FPS loop, a small fixed node set, no DOM work inside `draw()`, and cleanup on unmount. `prefers-reduced-motion` is detected before instantiating p5; reduced-motion users receive a static CSS node-map fallback and a clear `STATIC / REDUCED MOTION` label.

## Motion, accessibility, and performance

Framer Motion powers page entrance and section reveal transitions. Every motion wrapper uses `useReducedMotion()` and falls back to static/zero-duration behavior. CSS also disables scroll and hover transforms under `prefers-reduced-motion`.

The site keeps semantic `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks; a skip link; native links and buttons; visible `:focus-visible` states; an accessible mobile navigation with `aria-expanded`; labeled form fields; keyboard-friendly controls; responsive layouts; and direct App Router route behavior. Contact is intentionally honest: the form validates locally and opens a pre-addressed `mailto:hello@derricode.com` draft; nothing is claimed to be sent until the visitor sends it.

## Structure

- `app/` — Next.js 16 App Router layouts, routes, metadata, and branded not-found handling
- `components/` — navigation, motion wrappers, route sections, and the focused WebGL visualization
- `content/` — structured services, process, and capability copy
- `lib/` — contact helper
- `public/` — static assets
- `scripts/smoke.mjs` — production-server route and behavior smoke test

## Design workflow references

The implementation followed the existing frontend-product-build workflow and its Decide/Learn narrative discipline. It also references the UI UX Pro Max / 21st.dev ecosystem for design-system thinking and component quality without copying an external site:

- UI/UX Pro Max package: https://www.npmjs.com/package/uipro-cli
- UI/UX Pro Max reference: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- 21st.dev component reference: https://21st.dev/
- gstack workflows and `/design-consultation`, `/design-review`, `/qa`, `/review`: https://github.com/garrytan/gstack
- p5.js: https://p5js.org/

No fabricated metrics, testimonials, client logos, or unsupported claims were added. No deployment is performed by this task; Revi should review the complete redesign before Op redeploys.
