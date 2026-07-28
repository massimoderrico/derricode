# Derricode — AI implementation & software studio

A production-ready, responsive landing page for Derricode. The site tells a fuller brand story: why AI implementation matters, Derricode's practical point of view, three service pillars, how agents/automation/software fit together, the delivery process, technical capabilities, and what it is like to work together.

**Local path:** `/home/massimo/derricode`

## Setup

```bash
npm install
npm run dev
```

Build and verify:

```bash
npm run build       # TypeScript + Vite production build
npm run lint        # oxlint
npm run preview     # local production preview
```

## Design decisions

- **Surface:** Decide / Learn. The narrative moves from the business problem, to Derricode's point of view, to services, system architecture, delivery process, capabilities, working relationship, and a direct contact CTA.
- **Color system:** Decisive blue, white, and black. `#195cff` is the intentional action and signal accent; white surfaces carry readable content; black sections provide contrast and make the blue feel purposeful. The previous orange/lime palette has been removed.
- **Typography:** Space Grotesk provides a technical editorial voice for headings, Manrope keeps body copy readable, and DM Mono is reserved for operational labels and section metadata.
- **Composition:** The page uses editorial section transitions, a dark system-map hero visual, a blue signal strip, long-form service rows, process timelines, and a focused CTA rather than a compact feature-card pitch.
- **Content discipline:** No invented client logos, testimonials, awards, metrics, case studies, or unsupported claims. Copy describes observable ways of working and specific technical capabilities only.
- **Motion:** `framer-motion` handles hero entrance and in-view reveals. `useReducedMotion()` removes reveal distance for users who prefer reduced motion; CSS also disables smooth scrolling in that mode.
- **Accessibility:** Semantic sections and landmarks, a logical heading hierarchy, descriptive SVG label, native links/buttons, visible link targets, readable contrast, and mobile-friendly hit areas.

## Dependencies

- React + TypeScript + Vite
- `framer-motion` — used in `src/App.tsx` for hero entrance and section reveals.
- `uipro-cli` (dev dependency, v2.2.3) — the current UI/UX Pro Max CLI package verified from the package registry and its official project documentation. Its quality checklist informed the composition, restrained palette, accessibility, responsive behavior, and reduced-motion treatment.

### UI/UX Pro Max verification

Official project: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
Package: https://www.npmjs.com/package/uipro-cli

The package's documented role is installing the UI/UX Pro Max skill for AI coding assistants. Derricode does not copy a component or proprietary code; the layout, copy, system-map visual, tokens, and interaction design are original to this site.

MCP is used here in its technical sense: the Model Context Protocol, which can connect AI assistants to explicitly approved tools and data through MCP servers or client integrations. It is not a claim of a proprietary MCP platform.

## Notes

- The contact address is intentionally a direct `mailto:hello@derricode.com` CTA and can be replaced with a form endpoint when the operating workflow is selected.
- No Vercel deployment was performed; the project remains a standard Vite app suitable for a static build pipeline.
