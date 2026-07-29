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

The palette keeps the locked brand constraints: warm white foundation, blue signal (`#2171b5`), and black contrast (`#111`). **Cormorant Garamond** is the display voice for hero headlines, page titles, section statements, and major editorial moments; **Manrope** carries body copy, navigation, buttons, labels, and supporting UI. Both are loaded through `next/font/google` in the App Router, avoiding render-blocking stylesheet imports and removing DM Sans from the system. Interface symbols use the maintained `lucide-react` icon library rather than emoji or text glyphs. Monospace, debug labels, system maps, terminal framing, dense technical rails, fake dashboards, decorative metrics, gradients, glassmorphism, stock imagery, invented testimonials, and generic icon-card grids were intentionally removed.

The visual composition borrows principles—not layouts or identity—from premium reference families including Apple, Framer, Stripe, SpaceX, and the public 21st.dev component ecosystem: confident scale, sparse surfaces, clear contrast, and motion that supports continuity. From 21st.dev, the implementation adapts public interaction principles such as staggered entrances, directional continuity, subtle hover feedback, and animated underlines—not copied components or proprietary layouts. The abstract hero uses CSS geometry rather than p5/WebGL so it stays light, graceful, and secondary to the message.

The current motion layer includes two adapted public registry components retrieved from the 21st.dev public catalog: **Interactive Hover Button** (component ID `685`, `https://21st.dev/@interactive-hover-button/components/default`) and **Text Scroll animation** (component ID `4905`, `https://21st.dev/@text-scroll-animation/components/default`). Their source/demo artifacts were inspected from the public CDN (`https://cdn.21st.dev/bundled/969.html` and `https://cdn.21st.dev/larsen66/text-scroll-animation/default/bundle.1757691032938.html`) and adapted into local Framer Motion components; the original gradient-heavy Spotlight Card (ID `2358`) was inspected and intentionally rejected to preserve the no-gradient direction. The configured 21st MCP endpoint returned `401 Unauthorized` from this subagent runtime, so this pass used the public catalog/CDN artifacts rather than claiming an MCP `search`/`get_component` response. Both adaptations preserve semantic content, keyboard accessibility, mobile visibility, and static/zero-transform behavior under reduced motion; the interactive registry button has an explicit 44px minimum target.

Framer Motion powers page entrances, staggered editorial headline reveals, a quiet scroll-progress rail, the process page's pinned progress narrative, tactile CTA feedback, and directional section/list continuity. The new process narrative re-composes the public Text Scroll animation's scroll-linked continuity into a semantic ordered list: a restrained 12px directional lift and a single progress rule, with no scroll hijacking or looping behavior. The motion layer is intentionally short and secondary to the message: no looping spectacle, gradients, glass, or cursor gimmicks. `useReducedMotion()` and CSS reduced-motion rules remove transforms, hide progress rails, and set durations to zero for users who prefer less motion; touch layouts keep the same content without hover-dependent meaning. The site includes semantic landmarks, a skip link, keyboard-friendly native controls, visible focus states, labeled form fields, responsive navigation, and explicit 44px minimum targets on the registry button, primary navigation CTA, and mobile menu button. Other text and footer links retain their visual styling but are not represented by a blanket 44px compliance claim.

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
