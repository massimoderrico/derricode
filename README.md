# Derricode — Make the next useful thing.

Derricode is an AI implementation and software studio for businesses. We help teams turn complex opportunities into clear, working systems through AI implementation, workflow systems, full-stack web/mobile products, APIs, and MCP integrations.

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

- `/` — point of view, business value, and the studio narrative
- `/services` — three offering pillars: AI implementation, workflow systems, and digital products
- `/process` — consultative four-step delivery approach
- `/capabilities` — technical range presented as a capability system, not documentation
- `/contact` — calm, high-touch project intake with an honest email-draft flow
- unknown paths — branded 404 response with HTTP 404

## Art direction

This version is a full visual reset toward a premium digital studio: editorial typography, generous white space, strong black/blue moments, restrained rules, and one quiet abstract hero composition. The primary surface is **Decide / Learn**: each route makes one business idea land before offering the next step.

The palette keeps the locked brand constraints: warm white foundation, blue signal (`#2171b5`), and black contrast (`#111`). **Cormorant Garamond** is the display voice for hero headlines, page titles, section statements, and major editorial moments; **Manrope** carries body copy, navigation, buttons, labels, and supporting UI. Both are loaded through `next/font/google` in the App Router, avoiding render-blocking stylesheet imports and removing DM Sans from the system. Monospace, debug labels, system maps, terminal framing, dense technical rails, fake dashboards, decorative metrics, gradients, glassmorphism, stock imagery, invented testimonials, and generic icon-card grids were intentionally removed.

The visual composition borrows principles—not layouts or identity—from premium reference families including Apple, Framer, Stripe, SpaceX, and the public 21st.dev component ecosystem: confident scale, sparse surfaces, clear contrast, and motion that supports continuity. From 21st.dev, the implementation adapts public interaction principles such as staggered entrances, directional continuity, subtle hover feedback, and animated underlines—not copied components or proprietary layouts. The abstract hero uses CSS geometry rather than p5/WebGL so it stays light, graceful, and secondary to the message.

## Motion and accessibility

Framer Motion powers page entrances and section reveals. `useReducedMotion()` and CSS reduced-motion rules remove transforms and durations for users who prefer less motion. The site includes semantic landmarks, a skip link, keyboard-friendly native controls, visible focus states, labeled form fields, responsive navigation, and 44px minimum interactive targets.

Contact is intentionally honest: the form validates locally and opens a pre-addressed `mailto:hello@derricode.com` draft. Nothing is claimed to be sent until the visitor reviews and sends it.

## Structure

- `app/` — Next.js App Router layouts, routes, metadata, and branded 404 handling
- `components/` — navigation, motion primitives, and art-directed route sections
- `content/` — structured services, process, and capability copy
- `lib/` — contact helper and route utilities
- `scripts/smoke.mjs` — production-server route and behavior smoke test

## Design references

- Apple principles: https://www.apple.com/
- Framer principles: https://www.framer.com/
- Stripe principles: https://stripe.com/
- SpaceX principles: https://www.spacex.com/
- 21st.dev public animation/component reference: https://21st.dev/
- claude-design and popular-web-designs guidance were used as process/reference inputs; Derricode's layouts and copy remain original.

No fabricated metrics, testimonials, client logos, or unsupported claims were added. No deployment is performed by this repository workflow.
