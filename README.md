# Derricode — AI-native software studio

A production-ready, responsive landing page for Derricode: an AI company whose coordinated sub-agents help teams turn hard problems into useful software, products, and automations.

**Local path:** `/home/massimo/derricode`

## Setup

```bash
npm install
npm run dev
```

Build and verify:

```bash
npm run build       # TypeScript + Vite production build
npm run lint        # ESLint
```

## Design decisions

- **Surface:** Decide / Learn. The composition intentionally moves from a clear position (hero), to an explanation of the AI team, to proof-oriented benefits, then a practical process and contact CTA.
- **Visual language:** Original “field notes” system: warm paper background, ink-black utility sections, signal orange, and a restrained lime/blue node palette. Typography pairs Space Grotesk for decisive headings with Manrope for readable body copy and DM Mono for operational labels.
- **Anti-slop choices:** No invented metrics, testimonials, logos, stock imagery, generic feature-card grid, or unsupported claims. The network diagram is a small original SVG visual that explains orchestration rather than pretending to be product telemetry.
- **Motion:** `framer-motion` handles reveal and in-view transitions. `useReducedMotion()` disables distance-based motion for users who prefer reduced motion; CSS also disables smooth scrolling in that mode.
- **Accessibility:** Semantic sections and landmarks, descriptive SVG label, visible link targets, native `mailto:` CTA, keyboard-friendly anchor navigation, readable contrast, and mobile hit targets.

## Dependencies

- React + TypeScript + Vite
- `framer-motion` — used in `src/App.tsx` for hero reveals and team-row in-view transitions.
- `uipro-cli` (dev dependency, v2.2.3) — the current UI/UX Pro Max CLI package verified from the package registry and its official project documentation. It was run locally during setup to confirm the CLI is available.

### UI/UX Pro Max verification

Official project: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
Package: https://www.npmjs.com/package/uipro-cli

The package's documented role is installing the UI/UX Pro Max skill for AI coding assistants. For this site, its workflow was used as a design-quality checklist (composition first, restrained palette, accessibility, responsive behavior, reduced motion) rather than importing a generic component template.

## 21st.dev reference

Public reference source: https://21st.dev/

The page was reachable publicly during project setup (HTTP 200). Derricode does **not** copy a 21st.dev component or its proprietary code. The adaptation is at the principle level: a strong editorial hero, compact operational labels, a visible visual system, and a deliberate “how it works” progression. The resulting copy, node diagram, color system, layout, and interaction design are original to Derricode.

## Notes

- The contact address is intentionally a direct `mailto:hello@derricode.com` CTA and can be replaced with a form endpoint when the operating workflow is selected.
- No Vercel deployment was performed; the project is configured as a standard Vite app suitable for Vercel's static build pipeline.
